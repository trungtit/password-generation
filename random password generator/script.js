const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
let pw1 = []
let pw2 = []

let pw1El = document.getElementById("pw1-el")
let pw2El = document.getElementById("pw2-el")


function randomFun() { 
    let random = Math.floor(Math.random() * characters.length)
    return characters[random]
}

function start() { 
    if (pw1.length < 15 && pw2.length < 15) {
        
        for (let i = 0; i < 15; i++) {
            let val1 = randomFun()
            pw1.push(val1)
            let val2 = randomFun()
            pw2.push(val2)
            pw1El.textContent += pw1[i]
            pw2El.textContent += pw2[i]
        }
    } else { 
        alert("Passwords were generated!")
    }
}

function callMenu() { 
    let menuBar = document.getElementById("menu-bar")
    menuBar.classList.toggle("menu-bar")
}

function copyText1() {
    let copyText1 = document.getElementById("pw1-el")
    navigator.clipboard.writeText(copyText1.textContent);
    alert("Password is saved: " + copyText1.textContent);
}

function copyText2() {
    let copyText2 = document.getElementById("pw2-el")
        navigator.clipboard.writeText(copyText2.textContent);
        alert("Password is saved: " + copyText2.textContent);
    
}