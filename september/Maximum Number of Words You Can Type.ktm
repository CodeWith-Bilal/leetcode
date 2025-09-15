class Solution {
    fun canBeTypedWords(text: String, brokenLetters: String): Int {
        val brokenSet = brokenLetters.toSet()
        val words = text.split(" ")
        var count = 0
        
        for (word in words) {
            var valid = true
            for (ch in word) {
                if (ch in brokenSet) {
                    valid = false
                    break
                }
            }
            if (valid) count++
        }
        
        return count
    }
}
