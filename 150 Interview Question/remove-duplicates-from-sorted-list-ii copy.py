class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

from typing import Optional

class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0, head)  
        prev = dummy
        current = head

        while current:
            if current.next and current.val == current.next.val:
                dup_val = current.val
                while current and current.val == dup_val:
                    current = current.next
                prev.next = current  
            else:
                prev = prev.next
                current = current.next

        return dummy.next
