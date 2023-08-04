function StopWatch(){
    let interval;
    const startBtn = document.querySelector('.start');
    const stopBtn = document.querySelector('.stop');
    const resetBtn = document.querySelector('.reset');
    const lapBtn = document.querySelector('.lap');
    const h2 = document.querySelector('h2');
    const secSpan = document.querySelector('.sec');
    const msSpan = document.querySelector('.milli')
    const minSpan = document.querySelector('.min')
    let sec = 0;
    let ms = 0;
    let min = 0;
    let duration;

    this.getDisplay = function(){
        min < 10 ? minSpan.textContent = '0' + min + ' :' :  minSpan.textContent = min + ' :';
        sec < 10 ? secSpan.textContent = '0' + sec + ' :' : secSpan.textContent = sec + ' :';
        ms < 10 ? msSpan.textContent = '0' + ms : msSpan.textContent = ms;
    }
    this.start = function(){
        startBtn.onclick = ()=>{
            clearInterval(interval);
            interval = setInterval(() => {
                ms++;
                if(ms == 300){
                    sec++;
                    ms = 0;
                };
                if(sec == 60){
                    min++;
                    sec = 0;
                };
                this.getDisplay();
            }, 0);
        };
        this.stop = function(){
            stopBtn.onclick = ()=>{
                clearInterval(interval);
            }
            
        };
        }
        
    this.reset = function(){
        resetBtn.onclick = ()=>{
            clearInterval(interval);
            min = 0 ; sec = 0; ms = 0;
           minSpan.textContent = '0' + min + ' :';
           secSpan.textContent = '0' + sec + ' :';
           msSpan.textContent = '0' + ms;
        }
      
    }
    this.getDuration = function(){
        lapBtn.onclick = ()=>{
            let span = document.createElement('span');
            span.classList.add('lapTime');
            h2.appendChild(span);
            duration = `${minSpan.textContent}${secSpan.textContent}${msSpan.textContent}`;
            span.textContent += `\n${duration}`;
            span.onclick = ()=>{
                h2.removeChild(span);
            };
        }
        
    }
};

let sw = new StopWatch();

sw.getDisplay();
sw.start()
sw.stop();
sw.reset();
sw.getDuration();