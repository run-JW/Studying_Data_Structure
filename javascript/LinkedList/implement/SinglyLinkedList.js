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
        this.tail = null; 
    }

    get size() {
        return this.count;
    }

    insert(value) {
        if (this.head === null) {
            this.head = new Node(value);
            this.tail = this.head;
        } else {
            this.tail.next = new Node(value);
            this.tail = this.tail.next;
        }
        this.count++;
    }
}
