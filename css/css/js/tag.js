const cores = {
    p:'white',
    ul:'green',
    div:'red',
    span:'orange',
    ol:'purple',
    footer:'pink',
    form:'blue',
    body:'aquamarine',
    section:'brown',
    padrao:'#616161',
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }
 }

document.querySelectorAll('.tag').forEach(elemento =>{
    const nometag = elemento.tagName.toLowerCase()
    elemento.style.borderColor = cores.get(nometag)

    if(!elemento.classList.contains('noLabel')){
        const label = document.createElement('Label')
        label.style.backgroundColor = cores.get(nometag)
        label.innerHTML= nometag
        elemento.insertBefore(label,elemento.childNodes[0])//essa linha , é para adicionar antes do primeiro elemento filho que esteja presente.
    }
})

//vou escrever, mas não usar o modo de aplicar a cor por JS.
