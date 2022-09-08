const inputTxt = document.getElementById("inputTxt");
const resultTxt = document.getElementById("resultTxt");
const exportJS = document.getElementById("exportJS");
const executebtn = document.getElementById("execute");
const clearbtn = document.getElementById("clear");

clearbtn.addEventListener("click", () => {
    inputTxt.value = "";
    resultTxt.value = "";
});

executebtn.addEventListener("click", () => {
    try {
        if (exportJS.textContent = "Compilar JS") {
            eval(resultTxt.value);
        } else {
            eval(inputTxt.value);
        }
    } catch (error) {
        alert(error.message);
    }
});

exportJS.addEventListener("click", () => {
    if (exportJS.textContent == "Compilar JS") {
        exportJS.textContent = "Compilar ESJS";
    } else {
        exportJS.textContent = "Compilar JS";
    }
    traducir();
});

inputTxt.addEventListener("keyup", () => traducir());

function traducir() {
    let result = inputTxt.value;
    const removeComments = /\/\*[\s\S]*?\*\/|\/\/.*/g;
    result = result.replace(removeComments, "");
    result = js_beautify(result);

    if (exportJS.textContent == "Compilar JS") {
        result = result.replace(/\bdeclarar\b/g,"let");
        result = result.replace(/\bglobal\b/g,"var");
        result = result.replace(/\bconstante\b/g,"const");
        result = result.replace(/\benCasoDe\b/g,"switch");
        result = result.replace(/\bfuncion\b/g,"function");
        result = result.replace(/\bverdadero\b/g,"true");
        result = result.replace(/\bfalso\b/g,"false");
        result = result.replace(/\bsi\b/g,"if");
        result = result.replace(/\bsino\b/g,"else");
        result = result.replace(/\bpara\b/g,"for");
        result = result.replace(/\bmientras\b/g,"while");
        result = result.replace(/\bhacer\b/g,"do");
        result = result.replace(/\bsalir\b/g,"break");
        result = result.replace(/\bcaso\b/g,"case");
        result = result.replace(/\bfinalmente\b/g,"finally");
        result = result.replace(/\bretornar\b/g,"return");
        result = result.replace(/\bborrar\b/g,"delete");
        result = result.replace(/\bimportar\b/g,"import");
        result = result.replace(/\bexportar\b/g,"export");
        result = result.replace(/\bintentar\b/g,"try");
        result = result.replace(/\bcapturar\b/g,"catch");
        result = result.replace(/\ben\b/g,"in");
        result = result.replace(/\bde\b/g,"of");
        result = result.replace(/\binstanciaDe\b/g,"instanceof");
        result = result.replace(/\bnuevo\b/g,"new");
        result = result.replace(/\besta\b/g,"this");
        result = result.replace(/\btirar\b/g,"trow");
        result = result.replace(/\btipoDe\b/g,"typeof");
        result = result.replace(/\bvacio\b/g,"void");
        result = result.replace(/\bindefinido\b/g,"undefined");
        result = result.replace(/\bnulo\b/g,"null");
        result = result.replace(/\balerta\b/g,"alert");
    } else {
        result = result.replace(/\blet\b/g,"declarar");
        result = result.replace(/\bvar\b/g,"global");
        result = result.replace(/\bconst\b/g,"constante");
        result = result.replace(/\bswitch\b/g,"enCasoDe");
        result = result.replace(/\bfunction\b/g,"funcion");
        result = result.replace(/\btrue\b/g,"verdadero");
        result = result.replace(/\bfalse\b/g,"falso");
        result = result.replace(/\bif\b/g,"si");
        result = result.replace(/\belse\b/g,"sino");
        result = result.replace(/\bfor\b/g,"para");
        result = result.replace(/\bwhile\b/g,"mientras");
        result = result.replace(/\bdo\b/g,"hacer");
        result = result.replace(/\bbreak\b/g,"salir");
        result = result.replace(/\bcase\b/g,"caso");
        result = result.replace(/\bfinally\b/g,"finalmente");
        result = result.replace(/\breturn\b/g,"retornar");
        result = result.replace(/\bdelete\b/g,"borrar");
        result = result.replace(/\bimport\b/g,"importar");
        result = result.replace(/\bexport\b/g,"exportar");
        result = result.replace(/\btry\b/g,"intentar");
        result = result.replace(/\bcatch\b/g,"capturar");
        result = result.replace(/\bin\b/g,"en");
        result = result.replace(/\bof\b/g,"de");
        result = result.replace(/\binstanceof\b/g,"instanciaDe");
        result = result.replace(/\bnew\b/g,"nuevo");
        result = result.replace(/\bthis\b/g,"esta");
        result = result.replace(/\btrow\b/g,"arrojar");
        result = result.replace(/\btypeof\b/g,"tipoDe");
        result = result.replace(/\bvoid\b/g,"vacio");
        result = result.replace(/\bundefined\b/g,"indefinido");
        result = result.replace(/\bnull\b/g,"nulo");
        result = result.replace(/\balert\b/g,"alerta");
    }

    resultTxt.value = result;    
}