
export async function bubbleSort(arr, speed) {
    const len = arr.length;

    for(let i = len; i > 1; i-- ) {
        for(let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                await swap(arr, j, j + 1, speed);
            }
        }
    }
}



async function swap(arr, a, b, speed) { // takes original array and 2 values and swaps bar heights 
    let bars = document.getElementsByClassName("array-bar");

    bars[a].style.height = `${arr[b]/10}%`
    bars[b].style.height = `${arr[a]/10}%`

    bars[a].style.backgroundColor = 'red';
    bars[b].style.backgroundColor = 'red';

    [arr[a], arr[b]] = [arr[b], arr[a]];
    await delay(speed);

    bars[a].style.backgroundColor = 'powderblue';
    bars[b].style.backgroundColor = 'powderblue';   
}



function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }