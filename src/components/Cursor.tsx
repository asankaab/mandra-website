'use client';

import styles from './cursor.module.scss';
import React, { useEffect, useState } from 'react';
import Icon from './ui/Icon';

const Cursor: React.FC<{ children?: React.ReactNode, arrow?: boolean }> = ({ children, arrow=false }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [linkHover, setLinkHover] = useState(false)

    useEffect(() => {
        const link = document.querySelectorAll('a');

        link.forEach((item)=> {
            item.addEventListener('mouseover', ()=> setLinkHover(true));
            item.addEventListener('mouseleave', ()=> setLinkHover(false));
        })

        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className={!linkHover ? styles.cursor : styles.cursorHover}
            style={{ 
                transform: `translateX(${position.x}px) translateY(${position.y}px)`,
            }}>{children}{linkHover && arrow && <Icon name='arrow' color='#555'/>}
        </div>
    );
};

export default Cursor;