const btn = document.querySelector("button");
let diceVal = document.querySelector(".dice")
let diceChange = ()=>{
    
    
    let rndNum = Math.floor(Math.random() * 6) + 1;
    switch(rndNum){
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;"
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;"
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;"
    }
}
let six = document.querySelector(".finalRes");
btn.addEventListener("click" , ()=>{
    
    diceVal.classList.add("dice_animation");
    setTimeout(()=>{
        diceVal.classList.remove("dice_animation");
    },1000)
    
    const res = diceChange()
    diceVal.innerHTML=res;
    if(res == "&#9861;"){
        
        six.innerText = "Lucky MAN"
        
    }else{
        six.innerText=""
    }
    
})