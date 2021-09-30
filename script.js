var btnFunc = document.querySelector("#btn-translate");
var ipFunc = document.querySelector("#text-ip");
var opFunc = document.querySelector("#text-op");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?text=" + text;
}

function errorHandler(error) {
    console.log("Error detected : ", error);
    alert("Something went wrong, try again later.")
}

function clickHandler() {
    var inputText = ipFunc.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            opFunc.innerText = translatedText;
        })
        .catch(errorHandler)
}
btnFunc.addEventListener("click", clickHandler);