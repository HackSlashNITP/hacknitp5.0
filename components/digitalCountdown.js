import React from 'react'
import { useState } from "react";
import styles from "../styles/DigitalCount.module.css"

const DigitalCountdown = () => {

    const [end, setEnd] = useState({
        days: " ",
        hours: " ",
        min: " ",
        sec: " "
      });

    // Set the date we're counting down to
var countDownDate = new Date("Jan 15, 2023 21:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  setEnd({...end,days:days,hours:hours,min:minutes,sec:seconds});
    
//   // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
}, 1000);

    
    

  return (
    <div className={styles.container}>
<div  className="{styles.headline} text-center text-5xl text-white font-Poppins" id="headline">EVENT STARTS IN</div>
<div id="countdown" className="text-center text-sm text-white font-Poppins">
<ul>
<li className={styles.lists}><span className={styles.blocks}  id="days">{end.days}</span>days</li>
<li className={styles.lists}><span className={styles.blocks} id="hours">{end.hours}</span>Hours</li>
<li className={styles.lists}><span className={styles.blocks} id="minutes">{end.min}</span>Minutes</li>
<li className={styles.lists}><span className={styles.blocks} id="seconds">{end.sec}</span>Seconds</li>
</ul>
</div>

</div>
  )
}

export default DigitalCountdown
