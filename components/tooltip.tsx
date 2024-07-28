import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Tooltip.module.css';

interface TooltipProps {
    text: string;
    tooltip: string;
    size: number;
}



const Tooltip: React.FC<TooltipProps> = ({ text, tooltip, size }) => {
    const [isHovered, setIsHovered] = useState(false);

    const image = `/assets/svg/${text}.svg`

    return (
        <div className={styles.tooltipContainer}>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image draggable="false" src={image} alt="Info icon" width={size} height={size} />
            </div>
            {isHovered && (
                <div className={styles.tooltip}>
                    {tooltip}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
