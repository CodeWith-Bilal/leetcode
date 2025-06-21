#leetcode daily challenge
# https://leetcode.com/problems/maximum-manhattan-distance-after-k-changes/
# You are given a string s consisting of the characters 'N', 'S', 'E', and 'W', where s[i] indicates movements in an infinite grid:

# 'N' : Move north by 1 unit.
# 'S' : Move south by 1 unit.
# 'E' : Move east by 1 unit.
# 'W' : Move west by 1 unit.
# Initially, you are at the origin (0, 0). You can change at most k characters to any of the four directions.

# Find the maximum Manhattan distance from the origin that can be achieved at any time while performing the movements in order.

# The Manhattan Distance between two cells (xi, yi) and (xj, yj) is |xi - xj| + |yi - yj|.
 def maxManhattanDistance(s: str, k: int) -> int:
    n = len(s)
    max_distance = 0

    x, y = 0, 0
    path = [(0, 0)]  # (x, y) at each step

    for move in s:
        if move == 'N':
            y += 1
        elif move == 'S':
            y -= 1
        elif move == 'E':
            x += 1
        elif move == 'W':
            x -= 1
        path.append((x, y))

    dx = {'N': 0, 'S': 0, 'E': 1, 'W': -1}
    dy = {'N': 1, 'S': -1, 'E': 0, 'W': 0}

    x, y = 0, 0
    max_distance = 0

    for i in range(n):
        x += dx[s[i]]
        y += dy[s[i]]
        dist = abs(x) + abs(y)
        max_distance = max(max_distance, dist)

    x, y = 0, 0
    for i in range(n):
        best_increase = []
        for j in range(i + 1):
            curr_move = s[j]
            curr_dx, curr_dy = dx[curr_move], dy[curr_move]
            curr_x, curr_y = path[j]
            curr_dist = abs(curr_x) + abs(curr_y)

            for new_move in ['N', 'S', 'E', 'W']:
                if new_move == curr_move:
                    continue
                new_dx, new_dy = dx[new_move], dy[new_move]
                new_x = curr_x - curr_dx + new_dx
                new_y = curr_y - curr_dy + new_dy
                new_dist = abs(new_x) + abs(new_y)
                delta = new_dist - curr_dist
                best_increase.append(delta)

        best_increase.sort(reverse=True)
        bonus = sum(best_increase[:k]) if k <= len(best_increase) else sum(best_increase)
        max_distance = max(max_distance, abs(path[i + 1][0]) + abs(path[i + 1][1]) + bonus)

    return max_distance
# Example usage:
s = "NSEW"  