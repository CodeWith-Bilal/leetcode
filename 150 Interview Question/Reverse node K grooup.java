class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode curr = head;
        int count = 0;
        while (curr != null && count < k) {
            curr = curr.next;
            count++;
        }

        if (count < k) return head; 

        ListNode prev = null;
        ListNode next = null;
        curr = head;

        int i = 0;
        while (i < k && curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            i++;
        }

        head.next = reverseKGroup(next, k);

        return prev;
    }
}
