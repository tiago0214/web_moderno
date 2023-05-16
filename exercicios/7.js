function baskara (ax2,bx,c){
    let resultado= []
    let delta = (bx**2)-(4*ax2*c)
    if (delta<0){
        return 'O delta é negativo.'
    }
    let x1 = (-bx+ Math.sqrt(delta)/(2*ax2))
    let x2 = (-bx- Math.sqrt(delta)/(2*ax2))
    resultado.push (x1)
    resultado.push (x2)
    return resultado+' Delta :'+ delta
    
}
console.log(baskara(1,3,2))
console.log(baskara(3,1,2))
