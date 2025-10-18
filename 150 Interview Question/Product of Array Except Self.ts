    function productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const answer = new Array(n).fill(1);

        let prefix = 1;
        for (let i = 0; i < n; i++) {
            answer[i] = prefix;
            prefix *= nums[i];  // Update prefix
        }

        let suffix = 1;
        for (let i = n - 1; i >= 0; i--) {
            answer[i] *= suffix;
            suffix *= nums[i];  // Update suffix
        }

        return answer;
    }
