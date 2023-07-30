function displayGreeting() {
    var ageInput = Number(prompt("Введите свой возраст:"));
    var age = parseInt(ageInput);

    if (isNaN(age)) {
        alert("Вы ввели некорректное значение. Пожалуйста, введите число.");
        return;
    }

    var greetingMessage;

    switch (true) {
        case age <= 0:
            greetingMessage = "Вы ещё не родились?";
            break;
        case age <= 12:
            greetingMessage = "Привет, малыш!";
            break;
        case age <= 18:
            greetingMessage = "Привет, подросток!";
            break;
        default:
            greetingMessage = "Привет, взрослый!";
            break;
    }

    alert(greetingMessage);
}