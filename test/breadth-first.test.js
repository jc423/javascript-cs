/**
 * Created by joe on 5/4/2015.
 */
'use strict';
describe('Breadth-first search',function(){
    it('should return no nodes in an empty tree',function(){
        var tree = new Tree();
        expect(tree.breadthFirstSearch()).toEqual([]);
    });

    //TODO: Order of result should not matter
    it('should return nodes in tree ordered by level',function(){
        var nodeG = new Node('G');
        var nodeF = new Node('F');
        var nodeE = new Node('E');
        var nodeD = new Node('D',[nodeF,nodeG]);
        var nodeC = new Node('C',[nodeE]);
        var nodeB = new Node('B',[nodeD]);
        var nodeA = new Node('A',[nodeB,nodeC]);
        var tree = new Tree(nodeA);

        expect(tree.breadthFirstSearch()).toEqual(['A','B','C','D','E','F','G']);
    });

    it('should not return duplicates if node has multiple parents',function(){
        var nodeG = new Node('G');
        var nodeF = new Node('F');
        var nodeE = new Node('E');
        var nodeD = new Node('D',[nodeF,nodeG,nodeE]);
        var nodeC = new Node('C',[nodeE,nodeF]);
        var nodeB = new Node('B',[nodeD]);
        var nodeA = new Node('A',[nodeB,nodeC]);
        var tree = new Tree(nodeA);

        expect(tree.breadthFirstSearch()).toEqual(['A','B','C','D','E','F','G']);
    });

});