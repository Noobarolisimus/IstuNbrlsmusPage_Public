//Dvati
function render(seconds, minutes, hours) {
            const hourPer = hours + minutes / 60 + seconds / 3600;
            const minutesPer = minutes + seconds / 60;
            document.querySelector('.hour_arrow_box').style.transform = `translate(-50%, -50%) rotate(${hourPer*30 + 90}deg)`;
            document.querySelector('.minute_arrow_box').style.transform = `translate(-50%, -50%) rotate(${minutesPer*6 + 90}deg)`;
            document.querySelector('.second_arrow_box').style.transform = `translate(-50%, -50%) rotate(${seconds*6 + 90}deg)`;

        }
        function render_digital_dig(seconds, minutes, digHour) {
            if(minutes < 10){
                document.querySelector('.digital_clock_box .minute').innerHTML= "0"+minutes;
            }else{
                document.querySelector('.digital_clock_box .minute').innerHTML= minutes;
            }
            if(seconds < 10){
                document.querySelector('.digital_clock_box .second').innerHTML= "0"+seconds;
            }else{
                document.querySelector('.digital_clock_box .second').innerHTML= seconds;
            }
            if(digHour < 10){
                document.querySelector('.digital_clock_box .hour').innerHTML= "0"+digHour;
            }else{
                document.querySelector('.digital_clock_box .hour').innerHTML= digHour;
            }
        }

        let time = new Date();
        let hours = time.getHours() % 12;
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let digHour = time.getHours();

        render(seconds, minutes, hours);
        render_digital_dig(seconds,minutes,digHour)

        setInterval(() => {
            seconds++;
            if (seconds == 60) {
                minutes++;
                seconds = 0;
                if (minutes == 60) {
                    digHour++;
                    hours++;
                    minutes = 0;
                    if (hours == 12) {
                        hours = 0;
                    }
                    if (digHour == 24) {
                        digHour = 0;
                    }
                }
            }
            render(seconds, minutes, hours);
            render_digital_dig(seconds,minutes,digHour)
        }, 1000);
//-Dvati
