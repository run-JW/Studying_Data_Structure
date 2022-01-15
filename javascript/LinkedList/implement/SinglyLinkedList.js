class ADT {
    search(list, key) { throw new Error("Abstract method"); }

    insert(list, element) { throw new Error("Abstract method"); }
}

class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class SinglyLinkedList extends ADT {
    constructor() {
        super();
        this.count = 0;
        this.head = null;
    }

    get size() {
        return this.count;
    }

    push(element) {
        const node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            for (let i = 0; i < this.count - 1 && current !== null; i++) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
}
