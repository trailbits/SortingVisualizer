import { arraysAreEqual} from './areEqual.js';

export function getBubbleSortAnimations(array) {
    if (array.length <= 1) return array;  
    let animations = [];
    let auxiliaryArray = array.slice();
    array = bubbleSORT(0, array.length-1, auxiliaryArray, animations) 
    return animations;
}

function bubbleSORT(
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    for(let i=startIdx; i<endIdx; i++) {
        for(let j=0; j<=endIdx-1; j++) {
            animations.push([j, j + 1]);   //making red 
            animations.push([j, j + 1]);  // revert back to orginal color 
            
            if(auxiliaryArray[j] > auxiliaryArray[j+1]) {
                animations.push([j, auxiliaryArray[j + 1]]);  //pushing the smallest one i.e.. auxiliaryArray[j+1] to index j
                                                             //height at index j is the value of auxiliaryArray[j+1]
                animations.push([j+1, j+1]);   //making red 
                animations.push([j+1, j+1]);  // revert back to orginal color
                animations.push([j+1, auxiliaryArray[j]]);
                [auxiliaryArray[j+1], auxiliaryArray[j]] = [auxiliaryArray[j], auxiliaryArray[j + 1]]
            }
            else {
                animations.push([])
            }
        }
    }
    return auxiliaryArray;
}