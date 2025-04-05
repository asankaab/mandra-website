import React from 'react';
import styles from './footer.module.scss'
import Heading2 from './ui/Heading2';
import Button from './ui/Button';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="wrapper">
                <div className={styles.container}>
                    <div className={styles.banner}>
                        <Heading2>Ready to create unforgettable memories? Book your session today!</Heading2>
                        <Button href="contact">Book Now</Button>
                    </div>
                </div>
            </div>
        </footer>
    );
};