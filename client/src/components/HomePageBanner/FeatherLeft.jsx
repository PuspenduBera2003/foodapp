import React, { useEffect, useState } from 'react'
import './HomePageBanner.css'

const FeatherLeft = () => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const feathers = document.querySelectorAll('.featherleft');

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

    const leftFeathersClass = `featherleft ${isHovered ? 'moveleft' : ''}`;
    return (
        <div className="container">
            <div className={`feather1 ${leftFeathersClass}`}>
                <div className="base-feather"></div>
                <div className="line-feather-1"></div>
                <div className="line-feather-2"></div>
                <div className="line-feather-3"></div>
                <div className="middle-feather-line"></div>
                <div className="middle-circle"></div>
                <div className="blue-circle"></div>
            </div>
            <div className={`feather2 ${leftFeathersClass}`}>
                <div className="base-feather"></div>
                <div className="line-feather-1"></div>
                <div className="line-feather-2"></div>
                <div className="line-feather-3"></div>
                <div className="middle-feather-line"></div>
                <div className="middle-circle"></div>
                <div className="blue-circle"></div>
            </div>
            <div className={`feather3 ${leftFeathersClass}`}>
                <div className="base-feather"></div>
                <div className="line-feather-1"></div>
                <div className="line-feather-2"></div>
                <div className="line-feather-3"></div>
                <div className="middle-feather-line"></div>
                <div className="middle-circle"></div>
                <div className="blue-circle"></div>
            </div>
            <div className={`feather4 ${leftFeathersClass}`}>
                <div className="base-feather"></div>
                <div className="line-feather-1"></div>
                <div className="line-feather-2"></div>
                <div className="line-feather-3"></div>
                <div className="middle-feather-line"></div>
                <div className="middle-circle"></div>
                <div className="blue-circle"></div>
            </div>
            <div className={`feather5 ${leftFeathersClass}`}>
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

export default FeatherLeft
