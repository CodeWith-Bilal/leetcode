//leetcode interview Question
// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

function maxPoints(points: number[][]): number {
  if (points.length <= 2) return points.length;

  const gcd = (a: number, b: number): number => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
      const t = a % b;
      a = b;
      b = t;
    }
    return a;
  };

  let result = 0;

  for (let i = 0; i < points.length; i++) {
    const map = new Map<string, number>();
    let duplicates = 0;
    let localMax = 0;
    const [xi, yi] = points[i];

    for (let j = i + 1; j < points.length; j++) {
      const [xj, yj] = points[j];
      let dx = xj - xi;
      let dy = yj - yi;

      if (dx === 0 && dy === 0) {
        duplicates++;
        continue;
      }

      const g = gcd(dx, dy);
      dx = dx / g;
      dy = dy / g;

      if (dx < 0) {
        dx = -dx;
        dy = -dy;
      } else if (dx === 0 && dy < 0) {
        dy = -dy;
      }

      const key = `${dy}/${dx}`;
      const cnt = (map.get(key) ?? 0) + 1;
      map.set(key, cnt);
      if (cnt > localMax) localMax = cnt;
    }

    result = Math.max(result, localMax + duplicates + 1);

    if (result >= points.length - i) break;
  }

  return result;
}
