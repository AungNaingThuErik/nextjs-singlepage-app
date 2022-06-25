import styles from "../styles/Creators.module.css";
import Image from "next/image";

const Creators = ({creators}) => {
    return(
        <div className={styles.container}>
            <div className={styles.containerTop}>
                <h1 className={styles.title}>#Monocreators #GoPlay</h1>
            </div>
            <div className={styles.creatorContainer}> 
                {creators.map((creator) => (
                    <div key={creator.id} className={styles.creatorCard}>
                        <Image
                            src={`/img/${creator.photo}`}
                            width="100%"
                            height="100%"
                            layout="responsive"
                            objectFit="cover"
                            alt="Musical Talent"
                        /> 
                        <h2 className={styles.creatorName}>{creator.name}</h2>
                    </div>
                ))}
            </div>
            <div className={styles.creatorCardMobile}>

            </div>
        </div>
    )
}

export default Creators