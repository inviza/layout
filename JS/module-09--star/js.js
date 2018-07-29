const btnStart = document.querySelector('.js-start'),
btnLap = document.querySelector('.js-take-lap'); 
btnReset = document.querySelector('.js-reset'); 
container = document.querySelector('.js-laps');
numTime = document.querySelector('.js-time');

let startTime = Date.now(); 
let isActive = false; 
let Num = 0; 
let pauseTime = 0;
let currentTime = 0; 

class BVG{
 timer(time){ 
    currentTime =  new Date(time);
    let minutes = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : currentTime.getMinutes(); 
    let seconds = currentTime.getSeconds() < 10 ? `0${currentTime.getSeconds()}` : currentTime.getSeconds();
    let milliseconds = Number.parseInt(currentTime.getMilliseconds()/100);
    return `${minutes}:${seconds}.${milliseconds}`;
}

 htmlTime(){
    this.numTime.textContent = timer(Date.now() - startTime); 
}

 activateTimer(time){
    btnStart.textContent = 'Pause';
    startTime = time; 
    Num = setInterval(this.htmlTime,100); 
    isActive = true; 
}

 Start() {
    if (!isActive) {
        if (currentTime === 0) {
            this.activateTimer(Date.now());
        } else if (currentTime !== 0) {
            this.activateTimer(Date.now() - pauseTime);
        }
    } else if (isActive) {
        clearInterval(Num);
        pauseTime = Date.now() - startTime;
        btnStart.textContent = 'Continue';
        isActive = false;
    }
}

 Lap(){
    const liElem = document.createElement('li'); 
    liElem.textContent = numTime.textContent;
    container.appendChild(liElem);    
}

 Reset() {
    clearInterval(Num);
    isActive = false;
    numTime.textContent = this.timer(0);
    pauseTime = 0;
    btnStart.textContent = 'Start';
    while (container.firstChild) {
        container.removeChild(container.firstChild);    
    }
}   

}
let TTT = new BVG ();
btnStart.addEventListener('click', TTT.Start());
btnLap.addEventListener('click', TTT.Lap());
btnReset.addEventListener('click',TTT.Reset())