function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const inDegree: number[] = new Array(numCourses).fill(0);
    const graph: Map<number, number[]> = new Map();

     for (const [course, pre] of prerequisites) {
        inDegree[course]++;
        if (!graph.has(pre)) {
            graph.set(pre, []);
        }
        graph.get(pre)!.push(course);
    }

    const queue: number[] = [];
    const order: number[] = [];

    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length > 0) {
        const course = queue.shift()!;
        order.push(course);

        for (const next of graph.get(course) || []) {
            inDegree[next]--;
            if (inDegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    return order.length === numCourses ? order : [];
}
