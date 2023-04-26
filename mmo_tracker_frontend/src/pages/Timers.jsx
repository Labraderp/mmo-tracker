import { useContext, useEffect, useState } from "react";
import Timer from "../components/Timer";
import { userContext } from "../App";
import { getTimers, saveTimer } from "../utilities";

export default function Timers() {
    const { userData } = useContext(userContext)
    const [timerList, setTimerList] = useState([])
    const [timerName, setTimerName] = useState("Default Timer")
    const [timerHours, setTimerHours] = useState(0)
    const [timerMins, setTimerMins] = useState(0)
    const [timerSec, setTimerSec] = useState(0)
    
    const [timer, setTimer] = useState({
        'name' : timerName,
        'hours' : timerHours,
        'mins' : timerMins,
        'sec' : timerSec
    })

    useEffect(async () => {
        const timerDisplay = async () => {
            await getTimers(userData, setTimerList)
        }

        timerDisplay()
    }, [])

    useEffect(() => {
        setTimer({
            'name' : timerName,
            'hours' : timerHours,
            'mins' : timerMins,
            'sec' : timerSec
        })
    }, [timerName, timerHours, timerMins, timerSec])
    
    return(
        <>
        <div>
            <form onSubmit={(e) => [e.preventDefault(), saveTimer(userData, timer)]}>
                <input type="text" value={timerName} onChange={(e) => setTimerName(e.target.value)}/>
                <input type="number" value={timerHours} onChange={(e) => setTimerHours(e.target.value)}/>
                <input type="number" value={timerMins} onChange={(e) => setTimerMins(e.target.value)}/>
                <input type="number" value={timerSec} onChange={(e) => setTimerSec(e.target.value)}/>
                <button type="submit">Save Timer</button>
            </form>
        </div>
        <div>
            {(timerList == []) ?
                <div /> :
                timerList.map((timer) => <Timer name={timer.name} hours={timer.hours} mins={timer.mins} sec={timer.sec} />)
            }
        </div>
        </>
    )
}