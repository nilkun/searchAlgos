bubbleSort = (list, compare) => {
    let swapped = false;
    for(let i=list.length-1; i >= 0; i--) {
        swapped = false;
        for(let j=0; j < i; j++) {
            if(list[j]>list[j+1]) {
                [list[j], list[j+1]] = [list[j+1], list[j]];
                swapped = true;
            };
        }
        if(!swapped) break;
    }
}

quickSort = (list, low = 0, high=list.length-1) => {
    
    // lumoto
    if (low < high) {
        const pivot = partition(list, low, high);
        quickSort(list, low, pivot - 1);
        quickSort(list, pivot, high);        
    }
}

partition = (list, low, high) => {
    const localPivot = list[high];
    let i = low;
    for (let j = low; j < high; j++){
        if(list[j] < localPivot) {
            [list[i], list[j]] = [list[j], list[i]];
            i++;
        }        
    }
    [list[i], list[high]] = [list[high], list[i]];
    return i;
}

heapSort = (list) => {
    
    heapify(list, list.length);
    for(let end = list.length - 1; end > 0; ) {
        [list[end], list[0]] = [list[0], list[end]];
        end--;
        siftDown(list, 0, end);
    }
}

heapify = (list) => {
    for(let start = list.length - 1; start >= 0; start--) {
        siftDown(a, start, list.length - 1);
    }
}

siftDown = (list, start, end) => {

}

class Heap {
    constructor(i)
}

// Heap
// Introsort 

// Insertion 

// Merge

// -----------
//counting
// radic
//bucket

