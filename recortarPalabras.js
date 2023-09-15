let recortar = (palabra,cant) => {
    let recorte = palabra.map(palabras1=> palabras1.substring(0,cant))
    return recorte
}
let palabra=["hola","rojo","Amarillo"]
let cant=4
console.log(recortar(palabra,cant))