// 150 interview questions of leet code
// //problem statement:
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

//Solution:

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (!lists.length) return null;

    const pq: ListNode[] = [];

    const push = (node: ListNode | null) => {
        if (!node) return;
        pq.push(node);
        pq.sort((a, b) => a.val - b.val); 
    };

    for (const node of lists) {
        push(node);
    }

    const dummy = new ListNode(0);
    let current = dummy;

    while (pq.length > 0) {
        const smallest = pq.shift()!;
        current.next = smallest;
        current = current.next;
        push(smallest.next);
    }

    return dummy.next;
}
