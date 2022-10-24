function getInfo() {
    let age, userName;
    let nowYear = new Date();

    userName = prompt("Как ваше имя?", "Введите имя");
    age = nowYear.getFullYear() - parseInt(prompt("Год вашего рождения?", "2000"));

    let descript = "Ваш возраст " + age + ". ";

    if (age <= 0) {
        descript +=
            "Похоже вы еще не родились, вероятно мне пишут ваши будущие родители.";
    } else if (age > 0 && age < 7) {
        descript +=
            "Вы ходите в детский сад. И я думаю весело проводите там время, а еще у вас много разных игрушек!";
    } else if (age >= 7 && age <= 17) {
        descript += "Вы школьник! Как успехи в учебе?";
    } else if (age > 17 && age <= 24) {
        descript +=
        "Скорее всего вы студент, если так - поздравляю! От сессии до сессии живут студенты весело." + 
        "А если вы парень - можеть быть вы служите в армии? В самоволку уже ходил? На 'губе' сидел?";
    } else if (age > 24 && age < 65) {
        descript += "Как работа, семья, дети?";
    } else if (age >= 65 && age < 100) {
        descript += "С заслуженным отдыхом! Или с внуками отдыхать некогда?";
    } else {
        descript +=
        "Поздравляю, вы - долгожитель! Ну или просто мне врете про свой возраст :-)";
    }

    document.getElementById("UserName").innerHTML =
        "Здравствуйте, " + userName + "!";
    
    document.getElementById("MainText").innerHTML = descript;
}

