/* exported compact */

function compact(array) {
    let newArray = [];
    for(let index in array) {
        if (array[index]) {
            newArray.push(array[index]);
        }
    }
    return newArray;
}