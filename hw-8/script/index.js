
const myStr = ['Qwer', 'Rssdf', 'Gdgd', 'Ksdfsdfsf\nfsdfsdf', 'Usf\nfsdfsdf\nfsdfsfsd', 'Mdsfsf\nfsdfsf\nfsdfsdfds'];

const users = [
    {   first_name  : "John",
        last_name   : "Smith",
        age         : 23,
    },
    {   first_name  : "Homer",
        last_name   : "Page",
        age         : 15,
    },
    {   first_name  : "Melanie",
        last_name   : "Armstrong",
        age         : 21,
    },
    {   first_name  : "Vince",
        last_name   : "Poe",
        age         : 16,
    },
];

//======================================================

function add_p(par, dest) {
    dest.append(par);
}

function loop_h_ten() {
    const divNum = document.querySelector(".numbers");
    for (let i = 100; i >= 50; i -= 10) {
        const newPgph = document.createElement("p");
        newPgph.innerText = i;
        add_p(newPgph, divNum);
    }
}

function loop_str(inputStr) {
    const divNum = document.querySelector(".string_container");
    for (i in myStr) {
        const newPgph = document.createElement("p");
        newPgph.innerText = inputStr[i];
        add_p(newPgph, divNum);
    }
}

function add_card(fname = "John", lname = "Smith", age = 123) {
    const newCard = document.createElement("form");
    newCard.classList.add("card");

    const newDiv = document.createElement("div");

    const newLbl1 = document.createElement("label");
    newLbl1.classList.add("fname");
    newLbl1.innerText = fname;

    const newLbl2 = document.createElement("label");
    newLbl2.classList.add("lname");
    newLbl2.innerText = lname;

    const newLbl3 = document.createElement("label");
    newLbl3.classList.add("age");
    newLbl3.innerText = age;

    document.querySelector(".user_container").appendChild(newCard);

    newDiv.appendChild(newLbl1);
    newDiv.appendChild(newLbl2);
    //newDiv.appendChild(newLbl3);
    newCard.appendChild(newDiv);
    newCard.appendChild(newLbl3);
}

function gen_new() {
    add_card();
}

loop_h_ten();
loop_str(myStr);

for (i in users) {
    if (users[i].age >= 18) {
        add_card(users[i].first_name, users[i].last_name, users[i].age);
    }
}

