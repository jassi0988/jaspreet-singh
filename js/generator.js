'use strict'

function createItem(a) {
    return "<li>" + a + "</li>";
}

function createList(array) {
    let mainstring = ""
    for (let i = 0; i < 4; i++) {
        mainstring += createItem(array[i]);
        console.log(mainstring)
    }
    return mainstring
}