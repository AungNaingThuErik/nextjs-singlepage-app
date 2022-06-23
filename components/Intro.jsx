import styles from "../styles/Intro.module.css";
const Intro = () => {
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Featured Artists</h1>
                <p className={styles.desc}>Adam Blackstone and Brain Frasier-Moore discuss Super Bowl 2020 and more.</p>
                <button className={styles.button}>Read More</button>
            </div>
        </div>
    )
}

export default Intro