import React from 'react'
import './SortingVisualizer.css'
import { getMergeSortAnimations } from '../sortingAlgorithms/mergeSORT.js';
import { getBubbleSortAnimations } from '../sortingAlgorithms/bubbleSORT.js';
import { getSelectionSortAnimations } from '../sortingAlgorithms/selectionSORT.js';
import { getQuickSortAnimations } from '../sortingAlgorithms/quickSORT.js';
// import { getHeapSortAnimations } from '../sortingAlgorithms/heapSORT.js';
import { animator_merge_bubble, stopper } from './animator.js';

export default class SortingVisualizer extends React.Component {

    constructor(props) {
        super(props)
            this.state = {
                array: [],
        }
        this.resetArray = this.resetArray.bind(this)
        this.stop_sort = this.stop_sort.bind(this)
        this.merge_sort = this.merge_sort.bind(this)
        this.bubble_sort = this.bubble_sort.bind(this)
        this.selection_sort = this.selection_sort.bind(this)
        this.quick_sort = this.quick_sort.bind(this)
        // this.heap_sort = this.heap_sort.bind(this)
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        stopper(this.state.array)       // Here is scenario--> when we click any sort btn animations start. At that instant of time, if 
                                       // we click GenerateNewArray btn then new array will generated but still animations run. So for 
                                       //stopping animations we write this
        let arr = []
        
        let randomIntFromInterval = (min, max) => {
            return (Math.floor(Math.random() * (max - min) + min))
        } 

        for(let i=0; i<NUMBER_OF_ARRAY_BARS; i++)
            arr.push(randomIntFromInterval(5,700))               //int between 5 and 700

        // this.setState({ array: [568, 114, 688, 692, 481, 469] })  or we can set [7,2,9,3]
        this.setState({ array: arr })
    }

    render() {
        let key = 0;
        const show_array = this.state.array.map(val => 
            <div className="array-bar" key={key++} style={{ height: val, backgroundColor: "#40E0D0"}}></div> 
        )

        return(
            <div className="array-container">
                {show_array}
                <div>
                    <button onClick={this.resetArray}>Generate New Array</button>
                    <button onClick={this.quick_sort}>Quick Sort</button>
                    <button onClick={this.merge_sort}>Merge Sort</button>
                    <button onClick={this.bubble_sort}>Bubble Sort</button>
                    <button onClick={this.selection_sort}>Selection Sort</button>
                    <button onClick={this.stop_sort}> Stop </button>  
                </div>    
            </div>
        ) 
    }

    merge_sort() {
        animator_merge_bubble(getMergeSortAnimations(this.state.array))
        this.state.array.length = 0                 // this doesnt makes rerun of animations
    }
    
    bubble_sort() { 
        animator_merge_bubble(getBubbleSortAnimations(this.state.array))
        this.state.array.length = 0
    }

    selection_sort() {
        animator_merge_bubble(getSelectionSortAnimations(this.state.array))
        this.state.array.length = 0
    }

    quick_sort() {
        animator_merge_bubble(getQuickSortAnimations(this.state.array))
        this.state.array.length = 0
    }

    stop_sort() {
        stopper()
    }
}


// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 330;