'use strict';

const numbers = [45, 33, 9, 67, 22];
console.log('Numbers are', numbers)
console.log('Get First Number:', getFirst(numbers));
console.log('Get Last Number:', getLast(numbers));
console.log('Average is', getAverage(numbers));
console.log('Minimum is', getMinimum(numbers));
console.log('Maximum is', getMaximum(numbers));
console.log('Total is', getTotal(numbers));

function getFirst(numbers) {
    return numbers[0]
}

function getLast(numbers) {
    return numbers[4]
}

function getAverage(numbers) {
    let sum = 0
    let avg
    for (let i = 0; i < 4; i++) {
        sum = sum + numbers[i];
    }
    avg = sum / 4
    return avg
}

function getMinimum(numbers) {
    let min = numbers[0]
    for (let i = 0; i < 4; i++) {
        if (numbers[i] < min) {
            min = numbers[i]
        }
    }
    return min
}

function getMaximum(numbers) {
    let max = numbers[0]
    for (let i = 0; i < 4; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }
    return max
}

function getTotal(numbers) {
    let sum = 0
    for (let i = 0; i < 4; i++) {
        sum = sum + numbers[i];
    }
    return sum
}