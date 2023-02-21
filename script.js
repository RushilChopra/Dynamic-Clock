const toggleBtn = document.getElementById("btn");

toggleBtn.addEventListener("click", function() {
    if (toggleBtn.innerHTML=="Light") {
        document.body.style.backgroundColor ="white";
        document.getElementById('hours').style.color = 'black';
        document.getElementById('minutes').style.color = 'black';
        document.getElementById('seconds').style.color = 'black';
        document.getElementById('session').style.color = 'black';
        toggleBtn.innerHTML ="Dark";
        toggleBtn.style.color ="white";
        toggleBtn.style.backgroundColor ="black";
    } else {
        document.body.style.backgroundColor ="black";
        document.getElementById('hours').style.color = 'white';
        document.getElementById('minutes').style.color = 'white';
        document.getElementById('seconds').style.color = 'white';
        document.getElementById('session').style.color = 'white';
        toggleBtn.innerHTML ="Light";
        toggleBtn.style.color ="black";
        toggleBtn.style.backgroundColor ="white";
    }
});

function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var session = document.getElementById('session');


    if(hrs >= 12){
        session.innerHTML='PM';
    }else{
        session.innerHTML='AM';
    }
    if(hrs > 12){
        hrs = hrs-12;
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = seconds;
}

setInterval(displayTime,1000);
