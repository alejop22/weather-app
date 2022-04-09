import Card from "./Card";
import styles from '../components/cards.module.css';

export default function Cards({ciudad}) {
    return (
        <div className={styles.container__cards}>
            {ciudad.map((c) => 
               <Card
                key={c.id}
                name={c.name}
                max={c.max}
                min={c.min}
                img={c.img}
                weather={c.weather}
               />
            )}
        </div>
    );
}