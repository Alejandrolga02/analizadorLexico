const language = document.getElementById("language");
const javascript = document.getElementById("javascript");
const compilebtn = document.getElementById("compile");
const executebtn = document.getElementById("execute");
const clearbtn = document.getElementById("clear");

clearbtn.addEventListener("click", () => {
    language.value = "";
    javascript.value = "";
});

language.addEventListener("focus", () => disable(language, javascript));
javascript.addEventListener("focus", () => disable(javascript, language));

function disable(origin = null, extern = null) {
    let disabled = origin.disabled;

    if (!disabled) {
        extern.disabled = true;
    }
}

language.addEventListener("blur", () => active(language, javascript));
javascript.addEventListener("blur", () => active(javascript, language));

function active(origin = null, extern = null) {
    origin.disabled = false;
    extern.disabled = false;
}

executebtn.addEventListener("click", () => {
    try {
        eval(javascript.value);
    } catch (error) {
        alert(error.message);
    }
});

compilebtn.addEventListener("click", () => {
    let result = js_beautify(language.value);
    let removeComments = /\/\*[\s\S]*?\*\/|\/\/.*/g;
    // let removeString = /("|')((?:\\\1|(?:(?!\1).))*)\1/g;
    let removeNonword = /[^\w\xC0-\xFF]/g;

    let clean = result.replace(removeComments,"");
    clean = clean.replace(removeNonword," ");
    console.log(clean);
    let palabras = clean.split(" ");
    for (const palabra of palabras) {
        console.log(palabra);
    }
});

