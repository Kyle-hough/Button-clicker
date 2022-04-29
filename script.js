var z = true
function turnOff(element){
    if (z === true){
        element.innerText = "Logout"
        z = false
    }
    else {
        element.innerText = "Login"
        z = true
    }
    console.log(z)
}

function hide(element) {
    element.remove();
}