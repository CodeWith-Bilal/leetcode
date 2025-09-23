class Spreadsheet(private val rows: Int) {

    private val cells = mutableMapOf<String, Int>()

    fun setCell(cell: String, value: Int) {
        cells[cell] = value
    }

    fun resetCell(cell: String) {
        cells[cell] = 0
    }

    fun getValue(formula: String): Int {
        val parts = formula.removePrefix("=").split("+")
        var sum = 0
        for (p in parts) {
            val value = p.toIntOrNull() ?: cells.getOrDefault(p, 0)
            sum += value
        }
        return sum
    }
}
