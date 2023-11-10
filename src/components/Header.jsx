import styles from './Header.module.css'
function Header(){
    return(
        <div>
            <header className={styles.header}>
                <h1 className={styles.titulo}>Mafiween</h1>
            </header>
        </div>
    )
}
export default Header