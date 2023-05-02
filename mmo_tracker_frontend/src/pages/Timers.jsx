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

    useEffect(() => {
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
        <div>
            <div className="container-fluid">
                <form onSubmit={(e) => [e.preventDefault(), saveTimer(userData, timer)]}>
                <div className="row">
                    <input className="form-floating p-2" id="form-field" placeholder="Timer Name" type="text" onChange={(e) => setTimerName(e.target.value)}/>
                </div>
                <div className="row-col-4 p-2">
                        <input className="form-floating p-2" id="form-field" placeholder="Hours" type="number" onChange={(e) => setTimerHours(e.target.value)} min="0"/>

                        <input className="form-floating p-2" id="form-field" placeholder="Minutes" type="number" onChange={(e) => setTimerMins(e.target.value)} min="0" max="59"/>

                        <input className="form-floating p-2" id="form-field" placeholder="Seconds" type="number" onChange={(e) => setTimerSec(e.target.value)} min="0" max="59"/>

                        <button className="btn btn-primary p-2" type="submit">Save Timer</button>
                </div>
                </form>
            </div>
            <div>
                {(timerList == []) ?
                    <div /> :
                    <div>
                    { timerList.map((timer) => <Timer name={timer.name} hours={timer.hours} mins={timer.mins} sec={timer.sec} />) }
                    </div>
                }
            </div>
        </div>
    )
}