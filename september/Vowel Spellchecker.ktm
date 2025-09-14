class Solution {
    fun spellchecker(wordlist: Array<String>, queries: Array<String>): Array<String> {
        val exactWords = wordlist.toHashSet()
        val caseInsensitive = HashMap<String, String>()
        val vowelInsensitive = HashMap<String, String>()

        fun devowel(word: String): String {
            return word.lowercase().map { ch ->
                if (ch in "aeiou") '*' else ch
            }.joinToString("")
        }

        // Build maps (first occurrence wins)
        for (word in wordlist) {
            val lower = word.lowercase()
            val dev = devowel(word)

            caseInsensitive.putIfAbsent(lower, word)
            vowelInsensitive.putIfAbsent(dev, word)
        }

        val result = Array(queries.size) { "" }

        for ((i, q) in queries.withIndex()) {
            when {
                exactWords.contains(q) -> result[i] = q
                caseInsensitive.containsKey(q.lowercase()) -> result[i] = caseInsensitive[q.lowercase()]!!
                vowelInsensitive.containsKey(devowel(q)) -> result[i] = vowelInsensitive[devowel(q)]!!
                else -> result[i] = ""
            }
        }

        return result
    }
}
