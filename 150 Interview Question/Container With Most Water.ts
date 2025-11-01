function maxArea(height: number[]): number {
    let left = 0, right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let width = right - left;
        let h = Math.min(height[left], height[right]);
        let area = width * h;

        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}
