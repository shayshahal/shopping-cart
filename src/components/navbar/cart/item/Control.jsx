import styles from '/src/styles/navbar/cart/item/Control.module.css'

export default function Control(props) {
    return (
        <div className={styles.Item}>
            <button onClick={props.onDecrement}>{'-'}</button>
            <input type='number' onChange={props.onChange} value={props.amount}/>
            <button onClick={props.onIncrement}>{'+'}</button>
        </div>
    )
}