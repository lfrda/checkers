import styles from '../styles/space.module.css'

export default function Space(props) {
    
    return (
        <div 
            className={styles.space}
            style={{
                backgroundColor: props.black ? "black" : "white"
            }}>
            {props.text}
        </div>

    )
}