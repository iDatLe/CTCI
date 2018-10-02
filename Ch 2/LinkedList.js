/* 

CTCI - Remove dups

Write code to remove duplicates from an unsorted linked list.

*/

// User defined class node

class Node {
    //constructor
    constructor (element)
    {
        this.element = element; // holds the data of a node
        this.next = null; // holds the pointer to the next node, which is initialized to null value
    }
}

// Linked list class

class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }

    //functions to be implemented

    //add(element) **********
    add(element) {
        // creates a new node
        var node = new Node(element);

        // if list is Empty, add the element and make it head
        if (this.head == null) {
            this.head = node;
        } else {
           var current = this.head;

            // iterate to the end of the list
            while (current.next != null) { // while it's something, iterate until it's null
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size++;
    }

    //insertAt(element, index) **********
    insertAt(element, index) {
        if(index > 0 && index > this.size) {
            return false;
        } else {
            // creates a new node
            var node = new Node(element)
            var curr, prev;

            curr = this.head;
            var it = 0;

            // iterate over the list to find the position to insert
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            // adding an element
            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }

    //removeFrom(index) **********
    removeFrom(index) {
        if(index > 0 && index > this.size) {
            return -1;
        } else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element
            if (index == 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the position to remove an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element
                prev.next = curr.next;
            }
            this.size --;

            // return the remov element
            return curr.element;
        }
    }

    //removeElement(element) **********
    removeElement(element) {
        var current = this.head;
        var prev = null;

        //iterate over the list
        while (current != null) {
            // comparing element with current element
            // if found then remove and return true
            if (current.element == element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    //helper methods

    //indexOf(element) - returns index of a given element if element is in list
    indexOf(element) {
        var count = 0;
        var current = this.head;

        //iterate over the list
        while (current != null) {
            if (current.element == element){
                return count;
            }
            count++;
            current = current.next
        }
        // not found
        return -1;
    }

    //isEmpty() - returns true if list is empty
    isEmpty() {
        return this.size == 0;
    }

    //size_of_list() - check for size of linked list
    size_of_list() {
        console.log(this.size)
    }

    //PrintList() - prints contents of list
    printList() {
        var curr = this.head;
        var str = "";
        while (curr != null) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}

// // Testing
// // creating an object for the 
// // Linkedlist class 
// var ll = new LinkedList(); 
  
// // testing isEmpty on an empty list 
// // returns true 
// console.log(ll.isEmpty()); 
  
// // adding element to the list 
// ll.add(10); 
  
// // prints 10 
// ll.printList(); 
  
// // returns 1 
// console.log(ll.size_of_list()); 
  
// // adding more elements to the list 
// ll.add(20); 
// ll.add(30); 
// ll.add(40); 
// ll.add(50); 
  
// // returns 10 20 30 40 50 
// ll.printList(); 
  
// // prints 50 from the list 
// console.log("is element removed ?" + ll.removeElement(50)); 
  
// // prints 10 20 30 40 
// ll.printList(); 
  
// // returns 3 
// console.log("Index of 40 " + ll.indexOf(40)); 
  
// // insert 60 at second positon 
// // ll contains 10 20 60 30 40 
// ll.insertAt(60, 2); 
  
// ll.printList(); 
  
// // returns false 
// console.log("is List Empty ? " + ll.isEmpty()); 
  
// // remove 3rd element from the list 
// console.log(ll.removeFrom(3)); 
  
// // prints 10 20 60 40 
// ll.printList(); 

module.exports = LinkedList;