/**
 * Created by joe on 5/4/2015.
 */
'use strict';
function Tree(root){
    this.root = (root)?root:null;
}

Tree.prototype.getChildren = function(node){
    if(node){
        return node.children;
    }
}

Tree.prototype.breadthFirstSearch = function(){
    var result = [];

    if(this.root){
        var currentNode = this.root;
        currentNode.visited = true;
        result.push(currentNode.value);
        var queue = new Queue();
        //add current node to queue
        queue.queue(currentNode);
        while(queue.count()>0){
            currentNode = queue.dequeue();
            currentNode.children.forEach(function(element,index){
                if(!(element.visited === true)){
                    element.visited = true;
                    result.push(element.value);
                    queue.queue(element);
                }
            });
        }
    }
    return result;
};

function Node(value,children){
    this.value = value;
    this.children = (children)?children:[];
}

