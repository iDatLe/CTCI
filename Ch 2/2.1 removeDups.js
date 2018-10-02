class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    checkDups(head, node) {
        var currNode = head;
        while (currNode !== node) { // while no dup
            if (currNode.value === node.value) { // if there's a dup return true
                return true;
            }
            currNode = currNode.next; // while no dup then set currNode to next value
        }
        return false; // no dup then false
    }

    printLinkedList(head) {
        var node = head; // set node to head of linkedlist
        console.log('start of linked list');
        while (node !== null) { // if node is not tail then set it to next value
            console.log(node.value);
            node = node.next;
        }
        console.log('end of linked list');
    }

    removeDups(head) {
        var node = head; // sets node to head
        while (node !== null) { // while node is not the tail
            if (node.next !== null && this.checkDups(head, node.next)) { 
                node.next = node.next.next; // if node isn't tail and there is a dupe then next value is the next, next value                       
            } else {
                node = node.next; // if tail (then end of linked list) OR no dupe then value is next value
            }
        }
        return head; // if node is tail then just return head because it's the first linked list
    }
}

// TESTS

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

new LinkedList().removeDups(a);
new LinkedList().printLinkedList(a);

var f = new LinkedList('f');
var g = new LinkedList('g');
var h = new LinkedList('g');
var i = new LinkedList('g');
var j = new LinkedList('g');

f.next = g;
g.next = h;
h.next = i;
i.next = j;

console.log(new LinkedList().checkDups(j, g))
new LinkedList().removeDups(f);
new LinkedList().printLinkedList(f);


var k = new LinkedList('g');
var l = new LinkedList('g');
var m = new LinkedList('g');
var n = new LinkedList('b');
var o = new LinkedList('g');

k.next = l;
l.next = m;
m.next = n;
n.next = o;

new LinkedList().removeDups(k);
new LinkedList().printLinkedList(k);