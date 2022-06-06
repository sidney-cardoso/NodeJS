// clearTimeOut cancel um timeOut
const timeOut = 3000
const finished = () => console.log('Feito!')

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)
