export function getHeapSortAnimations(array) {
    if (array.length <= 1) return array;
    let animations = [];
    let auxiliaryArray = array.slice();
    heapSORT(0, array.length - 1, auxiliaryArray, animations)
    return animations;
}

function heapSORT(params) {
    
}