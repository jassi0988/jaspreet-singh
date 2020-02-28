'use strict'

function execute(name, a, b) {
    if (typeof (name) === "string") {
        if (name == "ADD") {
            return a + b;
        } else if (name == "SUB") {
            return a - b;
        } else if (name == "MUL") {
            return a * b;
        } else if (name == "chaloupe") {
            return "unknown operation name...";
        }
    } else if (typeof (name) === "function") {
        return div(a, b);
    } else {
        return "unknown operation type..."
    }
}