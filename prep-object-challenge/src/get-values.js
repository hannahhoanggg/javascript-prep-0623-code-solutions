/* exported getValues */

function getValues(object) {
    let array = [];
    for (const v in object)
    array.push(object[v]); {
        return array;
    }
} 
