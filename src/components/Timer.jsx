import {useState, useRef, useEffect, useContext} from 'react'
import { userContext } from '../App';
import { deleteTimer } from '../utilities';


export default function Timer({name, hours, mins, sec}) {

    const { userData } = useContext(userContext)

    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);

        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, hours, minutes, seconds} = getTimeRemaining(e);

        if(total >= 0) {
            setTimer (
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':' +
                (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const clearTimer = (e) => {
        setTimer (
            (hours > 9 ? hours : '0' + hours) + ':' +
            (mins > 9 ? mins : '0' + mins) + ':' +
            (sec > 9 ? sec : '0' + sec)
        )

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id
    }

    const getDeadTime = () => {
        let deadline = new Date();

        deadline.setSeconds(deadline.getSeconds() + sec);
        deadline.setHours(deadline.getHours() + hours);
        deadline.setMinutes(deadline.getMinutes() + mins)
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, [])

    const onClickReset = () => {
        clearTimer(getDeadTime());
    }

    return (
        <div>
            <h1>{name}</h1>
            <h2>{timer}</h2>
            <button className="btn btn-primary" onClick={onClickReset}>Reset</button>
            <button className="btn btn-danger" onClick={(e) => [e.preventDefault(), deleteTimer(userData, name)]}>Delete</button>
        </div>
    );
}