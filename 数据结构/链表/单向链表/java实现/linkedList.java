class Node {
   int val;
   Node next;

   Node(int val) {
      this.val = val;
   }
}

class LinkedList {

   private Node head;

   LinkedList() {
      this.head = new Node();
   }

   LinkedList(int val) {
      this.head = new Node(val);
   }

}