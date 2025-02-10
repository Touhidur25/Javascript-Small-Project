const endDate = '14 February 2025 11:00:00 PM'
document.getElementById('end_date').innerHTML = endDate
const inputs = document.querySelectorAll('input')

const clock = ()=> {
    const end = new Date(endDate)
    const now = new Date()
    const date = (end-now)/1000 //Convert mili second to second
    if (date<0) return;//Just Check if the value is negative or not

    inputs[0].value = Math.floor(date/3600/24)//Convert to days
    inputs[1].value = Math.floor((date/3600)%24)//Convert to Hours
    inputs[2].value = Math.floor((date/60)%60)//Convert to minutes
    inputs[3].value = Math.floor(date) % 60 //Convert to Seconds
    // console.log(end);
    // console.log(now);
    // console.log(day);

}

clock()


setInterval(
    () => {
        clock()
    },
    1000
)

/*
1 day = 24 hours
1 hour = 60min
60 min = 3600s
1 min = 60s
 */