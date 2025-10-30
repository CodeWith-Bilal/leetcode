/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const normalizedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    let left = 0;
    let right = normalizedString.length - 1;
    
    while (left < right) {
        if (normalizedString[left] !== normalizedString[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
};
