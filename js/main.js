const inputTexto=document.querySelector(".input-texto");
const mensaje=document.querySelector(".mensaje");

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    for(let x=0; x < matrizCodigo.length; x++){
        if(stringEncriptado.includes(matrizCodigo[x][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[x][0],matrizCodigo[x][1]);
        }
    }
    return stringEncriptado;
}

function btnEncriptar(){
    document.getElementById("mensaje-box").style.visibility= "visible";
    document.getElementById("dt").style.visibility="hidden";
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value=textoEncriptado;
    inputTexto.value="";
}

function Desencriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    for(let x=0; x < matrizCodigo.length; x++){
        if(stringEncriptado.includes(matrizCodigo[x][1])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[x][1],matrizCodigo[x][0]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    document.getElementById("mensaje-box").style.visibility= "visible";
    document.getElementById("dt").style.visibility="hidden";
    const textoEncriptado = Desencriptar(inputTexto.value);
    mensaje.value=textoEncriptado;
    inputTexto.value="";
}

function btnCopiar(){
    let copiado=mensaje.value;
    navigator.clipboard.writeText(copiado);
    mensaje.value = "";
}