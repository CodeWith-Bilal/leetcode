

function connect(root: _Node | null): _Node | null {
    if (!root) return null;

    const queue: _Node[] = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;

            if (i < levelSize - 1) {
                node.next = queue[0];
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return root;
}
