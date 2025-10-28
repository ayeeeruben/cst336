let grade = document.querySelector("#gradeOptions");

let gradeText = document.querySelector("#gradeText");
let subBtn = document.querySelector("#subBtn")


subBtn.addEventListener("click", function gradeCalc(){
    let current = grade.value;
    if(current === "o1"){
        gradeText.textContent = "A+";
    }
    if(current === "o2"){
        gradeText.textContent = "A";
    }
    if(current === "o3"){
        gradeText.textContent = "B";
    }
    if(current === "o4"){
        gradeText.textContent = "C";
    }
});