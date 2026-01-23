class TrieNode {
    children: Map<string, TrieNode>;
    isEnd: boolean;

    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class WordDictionary {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let node = this.root;

        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }

        node.isEnd = true;
    }

    search(word: string): boolean {
        return this.dfsSearch(word, 0, this.root);
    }

    private dfsSearch(word: string, index: number, node: TrieNode): boolean {
        if (index === word.length) {
            return node.isEnd;
        }

        const char = word[index];

        if (char === '.') {
            for (const child of node.children.values()) {
                if (this.dfsSearch(word, index + 1, child)) {
                    return true;
                }
            }
            return false;
        } else {
            if (!node.children.has(char)) {
                return false;
            }
            return this.dfsSearch(word, index + 1, node.children.get(char)!);
        }
    }
}
