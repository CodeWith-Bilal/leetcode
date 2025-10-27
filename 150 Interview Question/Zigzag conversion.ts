function convert(s: string, numRows: number): string {
    if (numRows === 1 || s.length <= numRows) return s;

    const rows: string[] = new Array(numRows).fill("");
    let index = 0;
    let direction = -1;

    for (const char of s) {
        rows[index] += char;

        if (index === 0 || index === numRows - 1) {
            direction *= -1;
        }
        
        index += direction;
    }

    return rows.join("");
}

