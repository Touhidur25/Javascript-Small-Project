function digitalClock(){
    let secPoint = document.getElementById('secPoint')
    let minPoint = document.getElementById('minPoint')
    let hrPoint = document.getElementById('hrPoint')



    var clock  = new Date()

    var hours = clock.getHours() % 12 //Convert to 12 hour

    var amPm = clock.getHours() >= 12 ? 'PM' : 'AM'

    hours = hours === 0 ? 12 : hours // handle midnight 

    var minutes = clock.getMinutes()
    var seconds = clock.getSeconds()



    var secondPoint = ''
    for (var i = 1; i<61; i++){
        var rotatation = i*6 //Rotate each line 6 degree

        if (i === seconds){
            secondPoint += '<div class="active dot" style = "transform: rotate('+rotatation+'deg)"></div>'
        }

        else{
            secondPoint += '<div class="dot" style = "transform: rotate('+rotatation+'deg)"></div>'
        }
    }


    var minutePoint = ''
    for (var i = 1; i<61; i++){
        var rotatation = i*6 //Rotate each line 6 degree

        if (i === minutes){
            minutePoint += '<div class="active dot" style = "transform: rotate('+rotatation+'deg)"></div>'
        }

        else{
            minutePoint += '<div class="dot" style = "transform: rotate('+rotatation+'deg)"></div>'
        }
    }


    var hourPoint = ''
    for (var i = 1; i<13; i++){
        var rotatation = i*30 //Rotate each line 30 degree

        if (i === hours){
            hourPoint += '<div class="active dot" style = "transform: rotate('+rotatation+'deg)"></div>'
        }

        else{
            hourPoint += '<div class="dot" style = "transform: rotate('+rotatation+'deg)"></div>'
        }
    }











    secPoint.innerHTML = secondPoint + '<b>' + amPm + '</b>' +'<h2>' + zero(seconds) +'<br><span> Seconds</span></h2>';
    minPoint.innerHTML = minutePoint + '<h2>' + zero(minutes) + '<br><span> Minutes</span></h2>';
    hrPoint.innerHTML = hourPoint +  '<h2>' + zero(hours) + '<br><span> Hours</span></h2>'

    function zero(n){
        if (n < 10 ){
            return '0' + n
        }

        return n
    }

}

setInterval(digitalClock,1000)