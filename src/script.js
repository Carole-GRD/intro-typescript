(function () {
    var _a;
    (_a = document.getElementById('guess-form')) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", compareUserGuess);
    function compareUserGuess(event) {
        var _a;
        event.preventDefault();
        var secretNumber = generateSecretNumber();
        // const userNumber = (<HTMLInputElement | null>document.getElementById('guess'))?.value;
        var userNumber = (_a = document.getElementById('guess')) === null || _a === void 0 ? void 0 : _a.value;
        if (secretNumber == Number(userNumber)) {
            alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
        }
        else {
            alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
        }
    }
    function generateSecretNumber() {
        var secretNumber = getRandomArbitrary(1, 4);
        return secretNumber;
    }
    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
})();
