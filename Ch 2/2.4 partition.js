/*

CTCI - 2.4 Partition

 Write code to partition a linked list around a value x, such that 
 all nodes less than x come before all nodes greater than or equal to x. 
 If x is contained within the list, the values of x only need to be after 
 the elements less than x (see below). The partition element x can appear 
 anywhere in the "right partition"; it does not need to appear between the 
 left and right partitions.

 EXAMPLE: 
 Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition=5] 
 Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

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

        if(this.head == null) {
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

    partition(x) {
        var node = this.head;
        var leftHead;
        var rightHead;
        var currLeft = null;
        var currRight = null;
        console.log(node.next.next)
        while (node != null) { // iterate through list

            if (node.value < x) {
                if (currLeft === null) { // beginning of partitioning
                    leftHead = node; // the left head will be the first node that's less than value
                    currLeft = leftHead; // currLeft will also be that head
                    // console.log(currLeft, 'hi')
                } else {
                    currLeft.next = node; // this is currLeft.next from previous if statement, adding another node
                    currLeft = currLeft.next // currLeft = the previous currLeft.next is moving along list
                }
            }  
            
            else {
                if (currRight === null) { // beginning of partitioning
                    rightHead = node; // the right head will be first node that's greater than value
                    currRight = rightHead; // currRight will also be that head
                } else {
                    currRight.next = node; // currRight.next head will equal next node
                    currRight = currRight.next; // currRight will be its next node from previous statement
                }
            }
            node = node.next // nodes moving down the list
        }
        currRight.next = null; //sets right side to be tail
        currLeft.next = rightHead; //connects left side to right side
        return leftHead; //this is the new head of linked list
    }
}

var a = new LinkedList()
a.add(1)
a.add(14)
// a.add(10)
// a.add(2)
// a.add(8)
// a.add(6)


// console.log(a)
console.log(a.partition(8), 'NOOO')