/**
 * Created by joe on 5/4/2015.
 */
'use strict';
describe('Queue',function(){
   it('should contain item after queuing',function(){
       var queue = new Queue();
       var item = new QueueItem('A');
       queue.queue(item);
       expect(queue.first.value).toBe('A');
   });

    it('should contain number of elements in the queue',function(){
        var queue = new Queue();
        var item1 = new QueueItem('A');
        var item2 = new QueueItem('B');
        var item3 = new QueueItem('C');
        var item4 = new QueueItem('D');

        queue.queue(item1);
        queue.queue(item2);
        queue.queue(item3);
        queue.queue(item4);

        expect(queue.count()).toBe(4);
    });
});

describe('Dequeue',function(){
   it('should return no items if none in queue',function(){
       var queue = new Queue();
       expect(queue.dequeue()).toBeNull();
   });

    it('should return the first item in the queue',function(){
        var queue = new Queue();
        var item1 = new QueueItem('A');
        var item2 = new QueueItem('B');
        var item3 = new QueueItem('C');
        queue.queue(item1);
        queue.queue(item2);
        queue.queue(item3);
        expect(queue.dequeue().value).toBe('A');
    });

    it('should remove items from the queue',function(){
        var queue = new Queue();
        var item1 = new QueueItem('A');
        var item2 = new QueueItem('B');
        var item3 = new QueueItem('C');
        queue.queue(item1);
        queue.queue(item2);
        queue.queue(item3);
        queue.dequeue();
        expect(queue.count()).toBe(2);
    });
});