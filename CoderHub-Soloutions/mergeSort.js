function mergeSort(node1, node2) {
    let merged = [];
    let i = 0;
    let j = 0;
    while (i < node1.length && j < node2.length) {
        if (node1[i] <= node2[j]) {
            merged.push(node1[i++]);
        } else {
            merged.push(node2[j++]);
        }
    }
    while (i < node1.length) {
        merged.push(node1[i++]);
    }
    while (j < node2.length) {
        merged.push(node2[j++]);
    }
    return merged;
}

console.log(mergeSort([1,3,5,7,9], [2,4,6,8,10]));
