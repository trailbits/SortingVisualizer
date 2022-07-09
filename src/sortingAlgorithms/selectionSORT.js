// export function selection_checker(array) {
    
// }

export function getSelectionSortAnimations(array) {
    if (array.length <= 1) return array;
    let animations = [];
    let auxiliaryArray = array.slice();
    selectionSORT(0, array.length - 1, auxiliaryArray, animations)
    return animations;
}

function selectionSORT(
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    for(let i=startIdx; i<=endIdx-1; i++) {
        let min_idx = i;
        for(let j=i+1;j<=endIdx;j++) {
            animations.push([min_idx, j]);  //Changing to red                             //comparison Region
            animations.push([min_idx, j]);  //reverting back to default tortoise         //comparison Region  
            if(auxiliaryArray[j] < auxiliaryArray[min_idx]) {  
                min_idx = j;
            }    
            animations.push([])
        }
        //Setting height Region
        animations.push([]);                                //setting to red
        animations.push([]);                               //setting back to tortoise
        animations.push([min_idx, auxiliaryArray[i]]);    //setting the auxiliaryArray[i] value at index min_idx 
        animations.push([]);                             //setting to red
        animations.push([]);                            //setting back to tortoise
        animations.push([i, auxiliaryArray[min_idx]]); //setting the auxiliaryArray[min_idx] at index i

        [auxiliaryArray[min_idx], auxiliaryArray[i]] = [auxiliaryArray[i], auxiliaryArray[min_idx]]
    }
}