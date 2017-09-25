const Node = require('./node');

class LinkedList {   
    constructor () {
        this._head = null;
        this._tail = null;    
        this.length = 0;
        let index = 0;
    }
        append(data) {

        let newNode = new Node(data);
            if(this.length === 0){ 
                this._head = newNode;
                this._tail = newNode;
             }
             else { 
               this._tail.next = newNode;
                newNode.prev = this._tail;
                this._tail = newNode;
             }
             this.length++; 
             return this;
    }

    head() {   

    if(this._head == null && this._tail == null){
        return null;

    }
        return this._head.data;
    }
    tail() {

     if(this._head == null && this._tail == null){
        return null;

    }
        return this._tail.data;
    }
    at(index) {
        let theNextOne = this._head;
        var position = 0; 
       while(position!=index){
        theNextOne = theNextOne.next;
        position++;
        }
       
      return theNextOne.data;
    }

    insertAt(index, data) {
        let firstTheOne = this._head;
        let theNewNode = new Node(data);
        var positionN = 0;

        while(positionN!=index){
            firstTheOne = firstTheOne.next;
            positionN++;
        }

        if(firstTheOne===this._head ){
            theNewNode.next = this._head;
            this._head =theNewNode;
            
        } else {

            firstTheOne.prev.next = theNewNode;
            firstTheOne.prev = theNewNode;
            theNewNode.prev = firstTheOne.prev;
            theNewNode.next = firstTheOne; 
        }
        return this;
    }

    isEmpty() {
        return (this.length == 0);
    }

    clear() {

        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {

        let theDeletable = this._head;
        var indion = 0;
        while(indion!=index){
            theDeletable = theDeletable.next;
            indion++;
        }
        if(theDeletable == this._head){
            this._head = theDeletable.next;
        }

        if(theDeletable.prev) theDeletable.prev.next = theDeletable.next;
        if(theDeletable.next) theDeletable.next.prev = theDeletable.prev;
        return this;
    }

    reverse() {
        let theTail = this._head;
        this._head = this._tail;
        this._tail = theTail;

        let p = this._head;
        while(p!=null){
            theTail = p.next;
            p.next = p.prev;
            p.pre = theTail;
            p = p.next;
        }
        return this;
       
    }

    indexOf(data) {
        let theOne = this._head;
        var position = 0;
        while(data!=theOne.data){
            theOne = theOne.next;
            position++;
            if(theOne===null){
                return -1;
            }
        }
        return position;

    }
}

module.exports = LinkedList;
