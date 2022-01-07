const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset');
//declaring interval
let timer = null;

let spHr = document.getElementById('sp-hr');
let spMin = document.getElementById('sp-min');
let spSec = document.getElementById('sp-sec');
let hrInp = document.getElementById('hr');
let minInp = document.getElementById('min');
let secInp = document.getElementById('sec');

function updateTimer(hr,min,sec){
    if(hr<10){
        spHr.innerHTML = `0${hr}`;
    }else{
        spHr.innerHTML = `${hr}`;
    }
    if(min<10){
        spMin.innerHTML = `0${min}`;
    }else{
        spMin.innerHTML = `${min}`;
    }
    if(sec<10){
        spSec.innerHTML = `0${sec}`;
    }else{
        spSec.innerHTML = `${sec}`;
    }
}


submitBtn.addEventListener('click',()=>{
    hr = hrInp.value;
    min = minInp.value;
    sec = secInp.value;


    if(sec=="" && min=="" && hr==""){
        alert('You have not given any input Buddyy!!!');
    }else{
        
        if(hr=="") hr=0;
        if(min=="") min=0;
        if(sec=="") sec=0;

        hr=parseInt(hr);
        min=parseInt(min);
        sec=parseInt(sec);

        if(min==60 || min>60){
            hr+=1;
            min=0;
        }
        if(sec==60 || sec>60){
            min+=1;
            sec=0;
        }

        updateTimer(hr,min,sec);

        if(!timer){
            timer = setInterval(()=>{
                //base condition
                if(sec==0 && min==0 && hr==0){
                    alert("Timer finished Ya DODO!!");
                    clearInterval(timer);
                }
                
                //timer logic
                if(sec>0){
                    sec-=1;
                    updateTimer(hr,min,sec);
                }
    
                if(sec==0){
                    if(min>0){
                        min-=1;
                        sec=59;
                        updateTimer(hr,min,sec);
                    }
                    if(min==0){
                        if(hr>0){
                            hr-=1;
                            min=59;
                            updateTimer(hr,min,sec);
                            sec=60;
                        }
                    }
                    
                }
    
            },1000);
        } 
    }

});

resetBtn.addEventListener('click',()=>{
    hrInp.value="";
    minInp.value="";
    secInp.value = "";
    updateTimer(0,0,0);
    if(timer){
        clearInterval(timer);
        timer=null;
    }
});