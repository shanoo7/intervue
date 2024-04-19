// For i1
let i1 = document.getElementById("i1");
let symbol1 = "plus";

i1.addEventListener("click", () => {
    console.log("click");
    if (symbol1 == "plus") {
        symbol1 = "minus";
        let icon = i1.querySelector('i');
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
        let ans = document.getElementById("answer1");
        ans.innerText = "No, you only get charged for the tests that the candidates have submitted.";
    } else {
        symbol1 = "plus";
        let icon = i1.querySelector('i');
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
        let ans = document.getElementById("answer1");
        ans.innerText = "";
    }
});

// For i2
let i2 = document.getElementById("i2");
let symbol2 = "plus";

i2.addEventListener("click", () => {
    console.log("click");
    if (symbol2 == "plus") {
        symbol2 = "minus";
        let icon = i2.querySelector('i');
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
        let ans = document.getElementById("answer2");
        ans.innerText = "Unfortunately, you can only add up to the limit of users in your plan.";
    } else {
        symbol2 = "plus";
        let icon = i2.querySelector('i');
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
        let ans = document.getElementById("answer2");
        ans.innerText = "";
    }
});

// For i3
let i3 = document.getElementById("i3");
let symbol3 = "plus";

i3.addEventListener("click", () => {
    console.log("click");
    if (symbol3 == "plus") {
        symbol3 = "minus";
        let icon = i3.querySelector('i');
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
        let ans = document.getElementById("answer3");
        ans.innerText = "Your interview only gets deducted when both candidate and interviewer have spent more than 15 minutes in a call.";
    } else {
        symbol3 = "plus";
        let icon = i3.querySelector('i');
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
        let ans = document.getElementById("answer3");
        ans.innerText = "";
    }
});

// For i4
let i4 = document.getElementById("i4");
let symbol4 = "plus";

i4.addEventListener("click", () => {
    console.log("click");
    if (symbol4 == "plus") {
        symbol4 = "minus";
        let icon = i4.querySelector('i');
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
        let ans = document.getElementById("answer4");
        ans.innerText = "Our free plans have a limit of max 3 interviews/assignments per day. In addition to that you have unlimited access to interview playback and history that you can access in our paid plans. To see a detailed comparison, tap here.";
    } else {
        symbol4 = "plus";
        let icon = i4.querySelector('i');
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
        let ans = document.getElementById("answer4");
        ans.innerText = "";
    }
});

// For i5
let i5 = document.getElementById("i5");
let symbol5 = "plus";

i5.addEventListener("click", () => {
    console.log("click");
    if (symbol5 == "plus") {
        symbol5 = "minus";
        let icon = i5.querySelector('i');
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
        let ans = document.getElementById("answer5");
        ans.innerText = "We currently accept debit and credit cards but can accept alternative payment methods like ACH for Business or Enterprise plans if you email us at support@intervue.io";
    } else {
        symbol5 = "plus";
        let icon = i5.querySelector('i');
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
        let ans = document.getElementById("answer5");
        ans.innerText = "";
    }
});

// For i6
let i6 = document.getElementById("i6");
let symbol6 = "plus";

i6.addEventListener("click", () => {
    console.log("click");
    if (symbol6 == "plus") {
        symbol6 = "minus";
        let icon = i6.querySelector('i');
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
        let ans = document.getElementById("answer6");
        ans.innerText = "Yes, Absolutely!";
    } else {
        symbol6 = "plus";
        let icon = i6.querySelector('i');
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
        let ans = document.getElementById("answer6");
        ans.innerText = "";
    }
});

// For i7
let i7 = document.getElementById("i7");
let symbol7 = "plus";

i7.addEventListener("click", () => {
    console.log("click");
    if (symbol7 == "plus") {
        symbol7 = "minus";
        let icon = i7.querySelector('i');
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
        let ans = document.getElementById("answer7");
        ans.innerText = "Intervue thrives with multiple team members. You can collaborate on interviews, assignments, question banks and outcomes with your team mates. Give it a try.";
    } else {
        symbol7 = "plus";
        let icon = i7.querySelector('i');
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
        let ans = document.getElementById("answer7");
        ans.innerText = "";
    }
});

// For i8
let i8 = document.getElementById("i8");
let symbol8 = "plus";

i8.addEventListener("click", () => {
    console.log("click");
    if (symbol8 == "plus") {
        symbol8 = "minus";
        let icon = i8.querySelector('i');
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
        let ans = document.getElementById("answer8");
        ans.innerText = "When you interview on Intervue you and the candidate both can be on the same code environment while being on a high quality video call. You also have quick access to question bank, notes and candidate profile. All the events from the interview are collated in a quick playback that can be shared with anyone from your hiring team.";
    } else {
        symbol8 = "plus";
        let icon = i8.querySelector('i');
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
        let ans = document.getElementById("answer8");
        ans.innerText = "";
    }
});

// For i9
let i9 = document.getElementById("i9");
let symbol9 = "plus";

i9.addEventListener("click", () => {
    console.log("click");
    if (symbol9 == "plus") {
        symbol9 = "minus";
        let icon = i9.querySelector('i');
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
        let ans = document.getElementById("answer9");
        ans.innerText = "Yes, they both belong to the same quota.";
    } else {
        symbol9 = "plus";
        let icon = i9.querySelector('i');
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
        let ans = document.getElementById("answer9");
        ans.innerText = "";
    }
}); 
