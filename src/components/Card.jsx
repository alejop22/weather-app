import styles from '../components/card.module.css';


export default function Card(props) {

    return (
        <div className={styles.container__card}>
            <div className={styles.container__btn}>
                <button className={styles.btnClose} onClick={() => props.onClose(props.id)}> X </button>
            </div>
            <div>
                <h1>{props.name}</h1>
            </div>
            <div className={styles.container__temp}>
                <div>
                    <h3> Temp Max</h3>
                    <span>{props.max}°</span>
                </div>
                <div>
                    <h3> Temp Min</h3>
                    <span>{props.min}°</span>
                </div>
                <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="clima" />
            </div>
        </div>
    );
}