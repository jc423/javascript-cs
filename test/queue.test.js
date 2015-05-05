/**
 * Created by joe on 5/4/2015.
 */
'use strict';
describe('Queue',function(){
   it('should contain item after queuing',function(){
       var queue = new Queue();
       queue.queue('A');
       expect(queue.first.value).toBe('A');
   });

    it('should contain number of elements in the queue',function(){
        var queue = new Queue();
        queue.queue('A');
        queue.queue('B');
        queue.queue('C');
        queue.queue('D');

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
        queue.queue('A');
        queue.queue('B');
        queue.queue('C');
        expect(queue.dequeue()).toBe('A');
    });

    it('should remove items from the queue',function(){
        var queue = new Queue();
        queue.queue('A');
        queue.queue('B');
        queue.queue('C');
        queue.dequeue();
        expect(queue.count()).toBe(2);
    });

    it('should not remove more items than were in queue',function(){
        var queue = new Queue();
        queue.queue('A');
        queue.queue('B');
        queue.queue('C');
        var dq1 = queue.dequeue();
        var dq2 = queue.dequeue();
        var dq3 = queue.dequeue();
        var dq4 = queue.dequeue();

        expect(queue.count()).toBe(0);
        expect(dq4).toBeNull();
    });
});