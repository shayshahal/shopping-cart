import styles from '/src/styles/shop/controls/Filter.module.css'
import {useEffect, useState} from 'react'

export default function Filter(props) {
    const [floor, setFloor] = useState('');
	const [ceiling, setCeiling] = useState('');
    function filterCheck(num){
        return num >= floor && num <= ceiling;
    }
    useEffect(()=>{
        props.onChange(props.name, filterCheck);
    }, [floor, ceiling])
    return (
        <div className={styles.Filter}>
            <label>{props.name}: </label>
            <input className={styles.input} value={floor} type="number" onChange={e=>{setFloor(e.target.value)}} min={0}/>
            {' - '}
            <input className={styles.input} value={ceiling} type="number" onChange={e=>{setCeiling(e.target.value)}} min={0}/>
        </div>
    )
}