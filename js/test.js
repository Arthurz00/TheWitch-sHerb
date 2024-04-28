const fire = document.getElementById('fire')
const body = document.getElementById('body')

setInterval(() => {
    console.log(((fire.getBoundingClientRect().left * 100)/ body.clientWidth) + '%')
},1000)