'use strict';

let size = 7
drawA(size);
drawB(size);
drawC(size);
drawD(size);
drawE(size);

size = 8
drawNumberA(size);
drawNumberB(size);
// drawNumberC(size);
// drawNumberD(size);

function drawA(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i == 0 || i == size - 1 || j == 0 || j == size - 1) {
                process.stdout.write("#" + " ");
            } else {
                process.stdout.write("  ");
            }
        }
        console.log("\n")
    }
}


function drawB(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i == 0 || i == size - 1 || i == j) {
                process.stdout.write("#" + " ");
            } else {
                process.stdout.write("  ");
            }
        }
        console.log("\n")
    }
}

function drawC(size) {
    for (let i = 0; i < size; i++) {
        for (let j = size; j > 0; j--) {
            if (i == 0 || i == size - 1 || i == j) {
                process.stdout.write("#" + " ");
            } else {
                process.stdout.write("  ");
            }
        }
        console.log("\n")
    }
}

function drawD(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i == 0 || i == size - 1 || i == j || i == (size - 1) - j) {
                process.stdout.write("#" + " ");
            } else {
                process.stdout.write("  ");
            }
        }
        console.log("\n")
    }
}


function drawE(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i == 0 || i == size - 1 || j == 0 || j == size - 1 || i == j || i == (size - 1) - j) {
                process.stdout.write("#" + " ");
            } else {
                process.stdout.write("  ");
            }
        }
        console.log("\n")
    }
}

function drawNumberA(size) {
    let str = ""
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < i; j++) {
            str += j + " "
        }
        str += "\n"
    }
    console.log(str)
}

function drawNumberB(size) {
    let str = ""
    for (let i = 0; i < size; i++) {
        for (let j = size; j > i; j--) {
            str += j + " "
        }
        str += "\n"
    }
    console.log(str)
}

function drawNumberB(size) {
    let str = ""
    let count = 0
    for (let i = 0; i < size; i++) {
        for (let j = 0; j > size; j++) {

            str += j + " "
        }
        str += "\n"
    }
    console.log(str)
}