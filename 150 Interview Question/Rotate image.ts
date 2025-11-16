function rotate(matrix: number[][]): void {
    let n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

let matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix1);
console.log(matrix1);

let matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(matrix2);
console.log(matrix2);
