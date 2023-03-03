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

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let currIndex = 0;
    let currNode = this.head;
    while (currIndex < index && currNode) {
      currNode = currNode.next;
      currIndex++;
    }

    return currNode;
  }

  set(index, value) {
    const node = this.get(index);

    if (!node) {
      return undefined;
    }

    node.value = value;

    return node;
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

    const beforeTailNode = this.get(this.length - 2);

    const popedNode = beforeTailNode.next;

    beforeTailNode.next = null;

    this.tail = beforeTailNode;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }

    return popedNode;
  }

  shift() {
    if (!this.head) return undefined;
    const currNode = this.head;
    this.head = currNode.next;

    currNode.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currNode;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }

  sum() {
    let sum = 0;
    let node = this.head;
    while (node) {
      sum += node.value;
      node = node.next;
    }
    return sum;
  }
}

var maxSubArray = function (nums) {
  const sLinkedList = new SinglyLinkedList();
  for (let i = 0; i < nums.length; i++) {
    sLinkedList.push(nums[i]);
  }

  const wholeSum = sLinkedList.sum();

  let i = 0;
  let j = sLinkedList.length - 1;
  let maxSum = wholeSum;
  while (i < j) {
    console.log(sLinkedList.head.value);
    console.log(sLinkedList.tail.value);

    const withoutLeft = maxSum - sLinkedList.head.value;
    const withoutRight = maxSum - sLinkedList.tail.value;
    const withoutBoth =
      maxSum - sLinkedList.head.value - sLinkedList.tail.value;

    maxSum = Math.max(withoutLeft, withoutRight, withoutBoth, maxSum);

    if (maxSum === withoutLeft) {
      sLinkedList.shift();
    }
    if (maxSum === withoutRight) {
      sLinkedList.pop();
    }
    if (maxSum === withoutBoth) {
      sLinkedList.shift();
      sLinkedList.pop();
      i++;
      j--;
    }

    i++;
    j--;

    console.log({ maxSum });
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, -1, -3, 4, -1, 2, 1, -5, -4])); // 6
