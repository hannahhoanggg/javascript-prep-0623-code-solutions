// create your loops here.
function whileLoop1() {
    let array = [];
    let i = 0;
    while (i < 10) {
     array.push(i);
      i++;
}
return array;
}
console.log("whileLoop1 output:", whileLoop1());

function whileLoop2() {
    let array = [];
    let i = 0;
    while (i < 20) {
     array.push(i);
     i=i+2;
    }
return array;
}
console.log("whileLoop2 output:", whileLoop2());

function forLoop1() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(i);
    }
    return array;
}
console.log("forLoop1 output:", forLoop1());

function forLoop2() {
    for (let i = 100; i > 0; i--) {
        console.log("Time till explosion ", i, "!");
    }
}
forLoop2();

const x = {
    name: "Ada LoveLace",
    age: "classic",
    hobby: "computation",
    invention: "analytical engine"
}

function forInLoop1(object) {
    let array = [];
    for (const p in object) {
        array.push(p);
    }
    return array;
}
console.log("forInLoop1 output", forInLoop1(x));

function forInLoop2(object) {
    let array = [];
    for (const p in object) {
        array.push(object[p]);
    }
    return array;
}
console.log("forInLoop2 output", forInLoop2(x));
