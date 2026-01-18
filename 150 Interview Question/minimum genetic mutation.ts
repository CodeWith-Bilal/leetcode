function minMutation(startGene: string, endGene: string, bank: string[]): number {
    const validGenes = new Set(bank);
    if (!validGenes.has(endGene)) return -1;

    const queue: [string, number][] = [[startGene, 0]];
    const visited = new Set<string>([startGene]);
    const chars = ['A', 'C', 'G', 'T'];

    while (queue.length > 0) {
        const [current, steps] = queue.shift()!;
        if (current === endGene) return steps;

        for (let i = 0; i < current.length; i++) {
            for (const c of chars) {
                if (c === current[i]) continue;
                const mutated = current.slice(0, i) + c + current.slice(i + 1);
                if (validGenes.has(mutated) && !visited.has(mutated)) {
                    visited.add(mutated);
                    queue.push([mutated, steps + 1]);
                }
            }
        }
    }

    return -1;
}
