function askName(){
    let userName = prompt("Ваше имя: ", "Кто вы?");

    document.getElementById("UserName").innerHTML = "Здравствуйте " + userName + "!";
}