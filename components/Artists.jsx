import styles from "../styles/ArtistListing.module.css";
import { artists } from "../data";

const Artists = () => {
    const alphabets =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    return(
        <div className={styles.container}>

            {alphabets.map((alphabet,idx) => (
                    <div key={idx} > 
                        
                        <h2 className={styles.initial}>
                            {alphabet}
                        </h2>
                        <div className={styles.namesContainer}>
                            {artists.length > 0 && artists.map((artist) => (
                                artist.name[0] === alphabet 
                                ? 
                                <div key={artist.id} className={styles.namesListing}>
                                    <p className={styles.artistName}>  {artist.name} </p>
                                   
                                </div>
                                : 
                                null
                            ))}
                        </div>
                        <hr className={styles.seperator} />
                    </div>    
            ))}
        </div>
    )
}

export default Artists