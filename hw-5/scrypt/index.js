
function decimal() {
    console.log(`Tenth ${prompt("Set number")*0.1}`);
}

function biggest_of_two() {
    let tmp = prompt("Input two nums separated by ;").split(`;`);

    if (tmp[0] < tmp[1]) {
        alert(`Smallest is : ${tmp[0]}`);
    }
    else {
        alert(`Smallest is : ${tmp[1]}`);
    }
}

function is_hundred() {
    let tmp = prompt("task 100 ?");
    if (tmp < 100) {
        alert(`Less than 100`);
    }
    else if (tmp > 100) {
        alert(`More than 100`);
    }
    else {
        alert(`Equal to 100`);
    }
}

function greeting() {
    let tmp = prompt(`Enter your name and age separated with ;`).split(`;`);

    if (tmp[1] < 18) {
        alert(`Hi, ${tmp[0]}`);
    }
    else {
        alert(`Hello, ${tmp[0]}`);
    }
}

decimal();
biggest_of_two();
is_hundred();
greeting();
