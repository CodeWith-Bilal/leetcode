function copyRandomList(head: Node | null): Node | null {
  if (!head) return null;

  const map = new Map<Node, Node>();

  let current: Node | null = head;
  while (current) {
    map.set(current, new Node(current.val));
    current = current.next;
  }

  current = head;
  while (current) {
    const copied = map.get(current)!;
    copied.next = current.next ? map.get(current.next)! : null;
    copied.random = current.random ? map.get(current.random)! : null;
    current = current.next;
  }

  return map.get(head)!;
}
