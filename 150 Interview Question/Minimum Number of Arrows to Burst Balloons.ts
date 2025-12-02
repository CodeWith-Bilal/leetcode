function findMinArrowShots(points: number[][]): number {
    if (points.length === 0) return 0;

    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1;
    let prevEnd = points[0][1];

    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > prevEnd) {
            arrows++;
            prevEnd = points[i][1]; 
        }
    }

    return arrows;
}
