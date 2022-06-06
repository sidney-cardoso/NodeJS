// setTimeOut roda uma função depois de x milissegundos
const timeOut = 3000
const finished = () => console.log('Feito!')

setTimeout(finished, timeOut)
console.log('Esse é exibido primeiro')
