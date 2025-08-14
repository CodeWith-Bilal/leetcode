//interview Question
function mySqrt(x: number): number {
    if (x < 2) return x;

    let left = 1;
    let right = Math.floor(x / 2);
    let ans = 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const sq = mid * mid;

        if (sq === x) return mid;
        if (sq < x) {
            ans = mid;       
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
}
