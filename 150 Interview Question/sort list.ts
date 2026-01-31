class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0
        this.next = next ?? null
    }
}

function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head

    // 1️⃣ find middle
    let slow = head
    let fast = head
    let prev: ListNode | null = null

    while (fast && fast.next) {
        prev = slow
        slow = slow.next!
        fast = fast.next.next
    }

    // cut list into two halves
    prev!.next = null

    // 2️⃣ sort both halves
    const left = sortList(head)
    const right = sortList(slow)

    // 3️⃣ merge
    return merge(left, right)
}

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0)
    let curr = dummy

    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1
            l1 = l1.next
        } else {
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }

    curr.next = l1 || l2
    return dummy.next
}
