class TrieNode {
    children: Record<string, TrieNode> = {};
    word: string | null = null;
}

function buildTrie(words: string[]): TrieNode {
    const root = new TrieNode();
    for (const word of words) {
        let node = root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.word = word; // Store word at the end node
    }
    return root;
}

function findWords(board: string[][], words: string[]): string[] {
    const root = buildTrie(words);
    const result = new Set<string>();
    const m = board.length;
    const n = board[0].length;

    function dfs(i: number, j: number, node: TrieNode) {
        if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] === '#' || !node.children[board[i][j]]) {
            return;
        }

        const char = board[i][j];
        node = node.children[char];

        if (node.word) {
            result.add(node.word);
            // Optional: set node.word = null to prevent duplicates
        }

        board[i][j] = '#'; // Mark as visited

        dfs(i + 1, j, node);
        dfs(i - 1, j, node);
        dfs(i, j + 1, node);
        dfs(i, j - 1, node);

        board[i][j] = char; // Restore after DFS
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, root);
        }
    }

    return Array.from(result);
}
