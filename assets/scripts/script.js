function displayGreeting() {
    var name = document.getElementById('nameInput').value;
    var greetingMessage = "Привет, " + name + "!";
    document.getElementById('greetingMessage').textContent = greetingMessage;
}