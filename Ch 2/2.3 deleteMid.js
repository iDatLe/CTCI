/*

CTCI - 2.3 Delete middle node

Implement an algorithm to delete a node in the middle 
(i.e., any node but the first and last node, not necessarily the exact middle) 
of a singly linked list, given only access to that node.

*/

class linkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    deleteMid(element) { // it's 'deleted' by setting it to next value instead of removing
      var node = element;
      while (node !== null && node.next !== null) { // while not head and while not tail
        node.value = node.next.value;
        node = node.next;

        if(node.next.next == null) {
            node.next = null;
        }
      }
    }
}

var a = new linkedList('1');
var b = new linkedList('2');
var c = new linkedList('3');
var d = new linkedList('4');
var e = new linkedList('5');
var f = new linkedList('6');
var g = new linkedList('7');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

a.deleteMid(b)

console.log(a, "bye")

