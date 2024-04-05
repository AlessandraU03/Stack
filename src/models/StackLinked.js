import { Node } from "./Node.js";

export class StackLinked {

    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(element) {
        const newNode = new Node(element);
        if (!this.top) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        const removedNode = this.top;
        this.top = this.top.next;
        removedNode.next = null;
        this.size--;
        return removedNode.element;
    }

  
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.top.element;
    }

  
    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}

