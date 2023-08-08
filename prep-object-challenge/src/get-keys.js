/* exported getKeys */

function getKeys(object) {
    let array = [];
    for (let p in object) {
        array.push(p);
    }
    return array;
}