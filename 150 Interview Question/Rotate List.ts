function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k === 0) return head;

    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    tail.next = head;

    let stepsToNewTail = length - (k % length);
    let newTail = head;
    for (let i = 1; i < stepsToNewTail; i++) {
        newTail = newTail.next!;
    }

    const newHead = newTail.next;
    newTail.next = null;

    return newHead;
}
