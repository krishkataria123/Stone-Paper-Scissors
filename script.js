let user_score = 0
let comp_score = 0
let options = document.querySelectorAll(".box");
function show(user_win,user_choice,comp_choice){
    let content = document.querySelector(".content")

    if(user_win){
        content.innerText=`You wins. ${user_choice} beats ${comp_choice}`
        user_score++;
        content.style.backgroundColor="rgb(32, 219, 32)"
    }
    else {
        content.innerText=`You Loss. ${comp_choice} beats ${user_choice}`
        comp_score++;
        content.style.backgroundColor="Red"
    }

}
function comp_choice(user_choice) {
    let content = document.querySelector(".content")

    let arr = ["Rock", "Paper", "Scissors"]
    let select = Math.ceil(Math.random() * 3) - 1
    console.log(select)
    let comp_choice = arr[select]
    let user_win = true;
    if (comp_choice == user_choice) {
        content.innerText = (`This is a Draw. Both chooses ${comp_choice}.`)
        content.style.backgroundColor="orange"

    }
    // else if (user_choice == "Rock") {
    //     if(arr[select]=="Paper") {
    //         comp_score++;
    //     content.innerHTML=(`<span>Computer Wins</span>`)}
    //     else {user_score++
    //         content.innerHTML=(`<span>You Wins</span>`)
    //     }
    // }
    // else if (user_choice == "Paper") {
    //     if(arr[select]=="Scissors") {
    //         comp_score++;
    //     content.innerHTML=(`<span>Computer Wins</span>`)}
    //     else {user_score++
    //         content.innerHTML=(`<span>You Wins</span>`)
    //     }
    // }
    // else if (user_choice == "Scissors") {
    //     if(arr[select]=="Rock") {
    //         comp_score++;
    //     content.innerHTML=(`<span>Computer Wins</span>`)}
    //     else {user_score++
    //         content.innerHTML=(`<span>You Wins</span>`)
    //     }
    // }
    else {
        if (user_choice == "Paper") user_win = (comp_choice == "Rock") ? true : false;
        else if (user_choice == "Scissors") user_win = (comp_choice == "Paper") ? true : false;
        show(user_win,user_choice,comp_choice)
    }


    document.getElementById("user_score").innerText = user_score
    document.getElementById("comp_score").innerText = comp_score

}
options.forEach((e) => {
    e.addEventListener("click", () => {
        let user_choice = e.getAttribute("id")
        console.log(`${user_choice} is clicked`)
        comp_choice(user_choice)
    })
})
