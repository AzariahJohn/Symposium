import React, {useState} from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import './Timer.css'

function Timer() {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMins, setTimerMins] = useState('00');

    let interval = useRef();
    const startTimer = () => {
        const countDownDate = new Date('November 14 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const mins = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            
            if (distance < 0){
                clearInterval(interval.current)
            } else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMins(mins)
            }

        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval.current)
        }
    })

  return (
    <div className="timer">
        <div>
            <p>{timerDays}</p>
            <p><small>Days</small></p>
        </div>
        <span className="space"></span>
        <div>
            <p>{timerHours}</p>
            <p><small>Hours</small></p>
        </div>
        <span className="space"></span>
        <div>
            <p>{timerMins}</p>
            <p><small>Mins</small></p>
        </div>
    </div>
  )
}

export default Timer