
function min_of_two(inArr) {
    if (inArr[0] < inArr[1]) {
        return inArr[0];
    }
    else {
        return inArr[1];
    }
}

function even_down(inArr) {
    if (((parseInt(inArr[0]) >> 0) & 0x1)) {
        inArr[0]--;
    }

    for ( ; inArr[0] >= inArr[1]; inArr[0] -= 2) {
        console.log(`Even : ${inArr[0]}`)
    }
}

function pow(b, p = 2) {
    return Math.pow(b, p);
}

function one_to_sum(n) {
    let tmp = n;
    if ((tmp >> 0) & 0x1) {
        return (n + 1) * Math.floor(n / 2) + Math.ceil(n / 2);
    }

    return (n + 1) * (n / 2);
}

function odd_even_sum(n, m) {
    let odd = 0;
    let even = 0;

    if ((n % 2) === 0) {
        even = n;
        odd = n+1;
    }
    else {
        even = n+1;
        odd = n;
    }

    for (let i = even+2; i <= m; i+=2) {
        even += i;
    }
    for (let i = odd+2; i <= m; i+=2) {
        odd += i;
    }

    console.log(`${even}  ${odd}`);
}

function longest_in_arr(arr) {
    if (arr.length === 0) {
        return null;
    }
    let longest = -1;
    let lindex  = -1;

    for (i in arr) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
            lindex = i;
        }
    }

    return arr[lindex];
}


alert(`Min of two : ${min_of_two(prompt(`Enter two separated with ;`).split(';'))}`);
even_down(prompt(`Enter start stop separated with ;`).split(`;`));
console.log(one_to_sum(10));
console.log(one_to_sum(5));
odd_even_sum(4, 11);

//------------------------------------

myArr1 = [];
myArr2 = ['a', 'abc', 'ab', 'ABC', 'a'];

console.log(`Longest in arr : ${longest_in_arr(myArr1)}`);
console.log(`Longest in arr : ${longest_in_arr(myArr2)}`);
