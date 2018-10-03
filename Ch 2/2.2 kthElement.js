/*

CTCI - 2.2 Return kth to last

Implement an algorithm to find the kth to last element of a single linked list

*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value) {
        var node = new Node(value);

        if (this.head == null) {
            this.head = node;
        } else {
            var current = this.head;

            while (current.next != null) {
                current = current.next;

            }
            current.next = node;
        }
        this.size++;
    }

    kthElement(element) {
        var iteration = this.size - element;
        var current = this.head
        var count = 0;

        if (element > this.size) { // kth element out of list bounds
            return false
        } else {
            while (count < iteration) {
                    current = current.next; // move to next node
                    count++
                }
                return current.value // return element of chosen index
            }
        }
}

/* TEST */

var a = new LinkedList()
a.add('a');
a.add('b');
a.add('c');
a.add('d');
a.add('e');
console.log(a.kthElement(5))
console.log(a)


//size is 5

