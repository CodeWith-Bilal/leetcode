#daily leetcode challange
# You are given an integer num. You will apply the following steps to num two separate times:

# Pick a digit x (0 <= x <= 9).
# Pick another digit y (0 <= y <= 9). Note y can be equal to x.
# Replace all the occurrences of x in the decimal representation of num by y.
# Let a and b be the two results from applying the operation to num independently.

# Return the max difference between a and b.

# Note that neither a nor b may have any leading zeros, and must not be 0.

class Solution(object):
    def maxDiff(self, num):
        """
        :type num: int
        :rtype: int
        """
        num_str = str(num)

        for digit in num_str:
            if digit != '9':
                max_num = int(num_str.replace(digit, '9'))
                break
        else:
            max_num = num  

        if num_str[0] != '1':
            min_num = int(num_str.replace(num_str[0], '1'))
        else:
            for i in range(1, len(num_str)):
                if num_str[i] != '0' and num_str[i] != '1':
                    min_num = int(num_str.replace(num_str[i], '0'))
                    break
            else:
                min_num = num  

        return max_num - min_num

