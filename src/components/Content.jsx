import styles from './Content.module.css'
import Form from "./Form";

function Content () {
    return (
        <div className={styles.content} style={{backgroundColor:"rgba(0,0,0,0.77)"}}>
            <div>
                <p className={styles.title}>Contabilize os Doces!!!</p>
                <p>ㅤ</p>
            </div>
            <div className={styles.cont}>
                <Form></Form>
            </div>
        </div>
    )
}

export default Content