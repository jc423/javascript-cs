/**
 * Created by joe on 5/4/2015.
 */
'use strict';
function Queue(){
    this.first = null;
    this.last = null;
}

Queue.prototype.queue = function(item){
    if(this.first){
        this.last.next = item;
        item.previous = this.last;
        this.last = item;
    }else{
        this.first = item;
        this.last = item;
    }
};

Queue.prototype.dequeue = function(){
    if(this.first){
        var firstItem = this.first;
        this.first = this.first.next;
        return firstItem;
    }else{
        return null;
    }

}

/**
 * Function return number of items in queue
 * @returns {number}
 */
Queue.prototype.count = function(){
    var currentItem;
    var count = 0;
    if(this.first){
        currentItem = this.first;
        count = 1;
        while(currentItem.next != null){
            count++;
            currentItem = currentItem.next;
        }
    }
    return count;

}

function QueueItem(value){
    this.previous = null;
    this.next = null;
    this.value = value;
}

