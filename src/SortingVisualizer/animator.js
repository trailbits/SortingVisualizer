// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 0.4;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

//
let stop_animations = []

export function animator_merge_bubble(animations) {
  
    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        // console.log("at = ",i);
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            if (barOneIdx !== undefined) {                              //2.barOneIdx !== undefined due to selection sort
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                stop_animations.push(setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS));
            }    
        } else {
            const [barOneIdx, newHeight] = animations[i];             //1.replaced from line 34(merge_sort) to 31 due to bubble_sort due to passing of empty array
            if (barOneIdx !== undefined)                             //2.barOneIdx !== undefined due to selection_sort & bubble_sort 
                stop_animations.push(setTimeout(() => {                                   
                    // const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    //  barOneStyle.backgroundColor = 'green';       //work only for quick sort
                }, i * ANIMATION_SPEED_MS));
        }
    }
}



export function stopper(original_array) {
    while(stop_animations.length !== 0) {
        let element = stop_animations[stop_animations.length - 1]
        clearTimeout(element)
        stop_animations.pop()
    }
}   