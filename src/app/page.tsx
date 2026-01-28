import Image from 'next/image'
import styles from './page.module.scss'
import { matchesByDate } from './variables'
import { teamCountry } from './helpers'

export default function Home() {
    return (
        <div className={styles.Home}>
            {matchesByDate.map((dates, i) => (
                <div
                    key={i}
                    className={styles.date}
                >
                    <h1>{dates.date}</h1>
                    <div className={styles.matches}>
                        {dates.matches.map((item, i) => (
                            <div
                                key={i}
                                className={styles.match}
                                style={{
                                    border: item.finished ? '2px solid #00FFA3' : 'none',
                                }}
                            >
                                <div className={styles.image}>
                                    <Image
                                        src={`/${teamCountry(item.first)}/${item.first}.svg`}
                                        alt={item.first}
                                        width={100}
                                        height={100}
                                        loading='eager'
                                        unoptimized
                                    />
                                </div>
                                <div className={styles.middle}>
                                    <div>{item.time}</div>
                                    <div>{item.tournament}</div>
                                </div>
                                <div className={styles.image}>
                                    <Image
                                        src={`/${teamCountry(item.second)}/${item.second}.svg`}
                                        alt={item.second}
                                        width={100}
                                        height={100}
                                        loading='eager'
                                        unoptimized
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
