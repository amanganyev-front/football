import Image from 'next/image'
import styles from './page.module.scss'
import { matches } from './variables'
import { teamCountry } from './helpers'

export default function Home() {
    return (
        <div className={styles.Home}>
            {matches.map((item, i) => (
                <div
                    key={i}
                    className={styles.match}
                >
                    <div className={styles.image}>
                        <Image
                            src={`/${teamCountry(item.first)}/${item.first}.svg`}
                            alt={item.first}
                            width={100}
                            height={100}
                            unoptimized
                        />
                    </div>
                    <div className={styles.middle}>
                        <div>{item.date}</div>
                        <div>{item.time}</div>
                        <div>{item.tournament}</div>
                    </div>
                    <div className={styles.image}>
                        <Image
                            src={`/${teamCountry(item.second)}/${item.second}.svg`}
                            alt={item.second}
                            width={100}
                            height={100}
                            unoptimized
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
