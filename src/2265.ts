class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function averageOfSubtree(root: TreeNode | null): number {
    function countTree(tree: TreeNode | null, k: number = 0): {sum: number, count: number, k: number} {
        if (!tree) return {sum: 0, count: 0, k: 0};
        let sum = tree.val;
        let count = 1;
    
        const left = countTree(tree.left, k);
        const right = countTree(tree.right, k);
    
        sum += left.sum + right.sum;
        count += left.count + right.count;
        k += left.k + right.k;

        const avg = Math.floor(sum / count);
        if (avg === tree.val) {
            k += 1;
        }
        console.log(tree)
        console.log(avg)
        return {sum, count, k}
    }

    if (!root) return 0;

    const { k } = countTree(root)

    // const avg = Math.floor(sum / count)
    return k
};

const node6 = new TreeNode(6);
const node5 = new TreeNode(1);
const node4 = new TreeNode(0);
const node3 = new TreeNode(5, node6);
const node2 = new TreeNode(8, node4, node5);

const rootTree = new TreeNode(4, node2, node3)

const res = averageOfSubtree(rootTree);
console.log(res);
