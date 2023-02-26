class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.tail) {
      this.tail.next = node;
    }

    if (!this.head) {
      this.head = node;
    }

    this.tail = node;

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let nodeI = this.head;

    while (nodeI.next.next) {
      nodeI = nodeI.next;
    }
    const popedNode = nodeI.next;
    nodeI.next = null;
    this.tail = nodeI;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return popedNode;
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}

const sLinkedList = new SinglyLinkedList();

sLinkedList.push('Hello');
sLinkedList.push('World');
sLinkedList.push('I');
sLinkedList.push('am');
sLinkedList.push('Rafael');

console.log(sLinkedList.length);

sLinkedList.print();

sLinkedList.pop();
sLinkedList.pop();
sLinkedList.pop();
sLinkedList.pop();
sLinkedList.pop();

console.log(sLinkedList.length);
sLinkedList.print();
