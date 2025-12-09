function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
}

function createLinkedList(arr: number[]): ListNode | null {
    let dummy = new ListNode();
    let current = dummy;
    for (const num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

function printLinkedList(head: ListNode | null): void {
    let result: number[] = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result);
}

const l1 = createLinkedList([2, 4, 3]);
const l2 = createLinkedList([5, 6, 4]);

const result = addTwoNumbers(l1, l2);
printLinkedList(result); 
