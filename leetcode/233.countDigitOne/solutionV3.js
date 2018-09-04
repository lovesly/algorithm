
function countDigitOne(n) {
    if (n <= 0) {
        return 0;
    }
    return numOfOne(n.toString());
}

function numOfOne(n) {
    if (n[0] < '0' || n[0] > '9') {
        return 0;
    }
    let first = parseInt(n[0]);
    let len = n.length;

    if (len == 1 && first == 0) {
        return 0;
    }

    if (len == 1 && first > 0) {
        return 1;
    }

    let numFirst = 0;
    if (first > 1) {
        numFirst = Math.pow(10, len-1);
    } else if (first == 1) {
        numFirst = parseInt(n.substr(1)) + 1;
    }

    let numOther = first * (len-1) * Math.pow(10, len-2);
    let numRecursive = numOfOne(n.substr(1));

    return numFirst + numOther + numRecursive;
}