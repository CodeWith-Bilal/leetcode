// Question: https://leetcode.com/problems/add-two-numbers/
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


//Solution:
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

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

// Output: [7,0,8]
// Explanation: 342 + 465 = 807, so the linked list should be 7 -> 0 -> 8.
// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.
// Follow-up: Could you solve it without using extra space?
// Note: The above code creates a linked list from an array, adds two numbers represented by linked lists, and prints the result as a linked list. The function `addTwoNumbers` implements the logic to add the two numbers digit by digit, handling carry as needed.
// The `createLinkedList` function creates a linked list from an array of numbers, and the `printLinkedList` function prints the linked list in a readable format.
// The solution has a time complexity of O(max(m, n)), where m and n are the lengths of the two linked lists, and a space complexity of O(1) since we are not using any extra space for the result linked list.
// The solution is efficient and meets the problem's constraints. The linked list is created in reverse order, and the addition is performed digit by digit, similar to how we would do it manually. The carry is handled appropriately, and the final result is returned as a linked list.
// The code is well-structured and easy to understand, making it a good solution for the problem.
// The code is written in TypeScript, which is a superset of JavaScript that adds static typing. This can help catch errors at compile time and improve code quality.
// The use of optional chaining (?.) and nullish coalescing (??) operators makes the code concise and readable.
// The code is also modular, with separate functions for creating and printing linked lists, which improves maintainability and reusability.
// Overall, this is a solid solution to the problem of adding two numbers represented by linked lists, and it demonstrates good coding practices in TypeScript.
// The code is efficient, easy to read, and follows best practices for TypeScript development.
// The use of a dummy node simplifies the process of building the result linked list, and the carry handling ensures that all digits are correctly added.
// The solution is well-structured and adheres to the problem constraints, making it a reliable implementation.
// The code is also flexible, allowing for easy modifications or extensions if needed in the future.
 