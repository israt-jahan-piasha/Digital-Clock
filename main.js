let ClockDiv =document.querySelector('#Clock')
  
function digitalClock(){
    let newTime= new Date()
    // console.log(newTime.toLocaleTimeString())
ClockDiv.innerHTML=newTime.toLocaleTimeString()}

setInterval(digitalClock, 1000)
