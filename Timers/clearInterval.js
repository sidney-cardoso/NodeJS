// clearInterval irá cancelar um setInterval registrado

const timeOut = 1000
const checking = () => console.log('Checking')

let interval = setInterval(checking, timeOut)
setTimeout(() => clearInterval(interval), 5000)
