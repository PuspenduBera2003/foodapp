import React, { useEffect, useState } from 'react'
import './HomePageBanner.css'

const FeatherRight = () => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const feathers = document.querySelectorAll('.featherright');

        const handleMouseOver = () => {
            setIsHovered(true);
        };

        const handleAnimationEnd = () => {
            setIsHovered(false);
        };

        feathers.forEach(feather => {
            feather.addEventListener('mouseover', handleMouseOver);
            feather.addEventListener('click', handleMouseOver);
            feather.addEventListener('animationend', handleAnimationEnd);
        });

        return () => {
            feathers.forEach(feather => {
                feather.removeEventListener('mouseover', handleMouseOver);
                feather.removeEventListener('animationend', handleAnimationEnd);
            });
        };
    }, []);

    const rightFeathersClass = `featherright ${isHovered ? 'moveright' : ''}`;
    return (
        <div className="container">
            <div className={`feather6 ${rightFeathersClass}`}>
                <div className="base-feather"></div>
                <div className="line-feather-1"></div>
                <div className="line-feather-2"></div>
                <div className="line-feather-3"></div>
                <div className="middle-feather-line"></div>
                <div className="middle-circle"></div>
                <div className="blue-circle"></div>
            </div>
            <div className={`feather7 ${rightFeathersClass}`}>
                <div className="base-feather"></div>
                <div className="line-feather-1"></div>
                <div className="line-feather-2"></div>
                <div className="line-feather-3"></div>
                <div className="middle-feather-line"></div>
                <div className="middle-circle"></div>
                <div className="blue-circle"></div>
            </div>
            <div className={`feather8 ${rightFeathersClass}`}>
                <div className="base-feather"></div>
                <div className="line-feather-1"></div>
                <div className="line-feather-2"></div>
                <div className="line-feather-3"></div>
                <div className="middle-feather-line"></div>
                <div className="middle-circle"></div>
                <div className="blue-circle"></div>
            </div>
            <div className={`feather9 ${rightFeathersClass}`}>
                <div className="base-feather"></div>
                <div className="line-feather-1"></div>
                <div className="line-feather-2"></div>
                <div className="line-feather-3"></div>
                <div className="middle-feather-line"></div>
                <div className="middle-circle"></div>
                <div className="blue-circle"></div>
            </div>
            <div className={`feather10 ${rightFeathersClass}`}>
                <div className="base-feather"></div>
                <div className="line-feather-1"></div>
                <div className="line-feather-2"></div>
                <div className="line-feather-3"></div>
                <div className="middle-feather-line"></div>
                <div className="middle-circle"></div>
                <div className="blue-circle"></div>
            </div>
        </div>
    )
}

export default FeatherRight
