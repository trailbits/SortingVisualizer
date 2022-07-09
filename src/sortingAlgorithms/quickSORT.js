export function getQuickSortAnimations(array) {
    if (array.length <= 1) return array;
    let animations = [];
    let auxiliaryArray = array.slice();
    quickSORT(0, array.length - 1, auxiliaryArray, animations)
    return animations;
}

function quickSORT(
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    if (startIdx < endIdx) {
        /* pi is partitioning index, arr[p] is now  
        at right place */
        let pi = partition(startIdx, endIdx, auxiliaryArray, animations);

        // Separately sort elements before  
        // partition and after partition  
        quickSORT(startIdx, pi - 1, auxiliaryArray, animations);
        quickSORT(pi + 1, endIdx, auxiliaryArray, animations);
    }
}


function partition(low, high, arr, animations)
{
    let pivot = arr[high]; // pivot  
    let i = (low - 1); // Index of smaller element  

    for (let j = low; j <= high - 1; j++)
    {
        // If current element is smaller than the pivot  
        animations.push([j, high]);
        animations.push([j, high]);
        animations.push([]) ;
        if (arr[j] < pivot) {
            i++; // increment index of smaller element 
            animations.push([]);
            animations.push([]);
            animations.push([i, arr[j]]);
            animations.push([]);
            animations.push([]);
            animations.push([j, arr[i]])   ;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    animations.push([]);
    animations.push([]);
    animations.push([i+1, arr[high]]);
    animations.push([]);
    animations.push([]);
    animations.push([high, arr[i+1]]);
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return (i + 1);
}

