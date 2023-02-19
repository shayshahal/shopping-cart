import styles from '/src/styles/navbar/cart/item/Item.module.css'
import Control from './Control';

export default function Item(props) {
    return (
        <div className={styles.Item}>
            <img alt={props.item.title} src={props.item.images.at(-1)}/>
            <h3>{props.item.title}</h3>
            <p>{props.item.price}</p>
            <Control amount={props.amount} onChange={props.onChange} onDelete={props.onDelete}/>
        </div>
    )
}