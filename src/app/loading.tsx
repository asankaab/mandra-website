import styles from "./loading.module.scss"

export default function Loading() {
    return (
        <div className={styles.centeredBox}>
            <svg
                className={styles.container}
                viewBox="0 0 35 35"
                height="35"
                width="35"
                >
                <rect
                    className={styles.track}
                    x="2.5"
                    y="2.5"
                    fill="none"
                    strokeWidth="5px"
                    width="32.5"
                    height="32.5"
                />
                <rect
                    className={styles.car}
                    x="2.5"
                    y="2.5"
                    fill="none"
                    strokeWidth="5px"
                    width="32.5"
                    height="32.5"
                    pathLength="100"
                />
            </svg>
        </div>
    )
}