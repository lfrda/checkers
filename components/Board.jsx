import styles from '../styles/Home.module.css';
import Row from "./Row";


export default function Board(props) {
    return (
        <div className={styles.board}>
        <Row length={8} />
        <Row length={8} even />
        <Row length={4} />
        <Row length={8} even/>
        <Row length={8} />
        <Row length={3} even/>
        <Row length={8} />
        <Row length={8} even/>
        </div>
    )
}