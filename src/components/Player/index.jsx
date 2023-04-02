import './style.css';
import { useEffect, useRef, useState } from 'react';
import Bomb from '../Bomb';

export default function Player({ mapHeight, mapWidth }) {
    const [playerPositionX, setPlayerPositionX] = useState(0);
    const [playerPositionY, setPlayerPositionY] = useState(0);
    const [activeBomb, setActiveBomb] = useState(false);
    const [bombPositionX, setBombPositionX] = useState(-1);
    const [bombPositionY, setBombPositionY] = useState(-1);

    const ref = useRef(null);
    useEffect(() => {
        ref.current.focus()
    }, [])

    function handleKeyDown(e) {
        const movingTiming = 30;
        const movingDistance = 10;

        if (e.key === 'ArrowRight' || e.key === 'd') {
            ref.current.style.left = `${playerPositionX}px`;
            if (playerPositionX < mapWidth - 40) {
                setTimeout(() => {
                    setPlayerPositionX(playerPositionX + movingDistance)
                }, movingTiming)
            }

        } else if (e.key === 'ArrowLeft' || e.key === 'a') {
            ref.current.style.left = `${playerPositionX}px`;
            if (playerPositionX > 0) {
                setTimeout(() => {
                    setPlayerPositionX(playerPositionX - movingDistance);
                }, movingTiming);
            }

        } else if (e.key === 'ArrowDown' || e.key === 's') {
            ref.current.style.top = `${playerPositionY}px`;
            if (playerPositionY < mapHeight - 40) {
                setTimeout(() => {
                    setPlayerPositionY(playerPositionY + movingDistance);
                }, movingTiming);
            }

        } else if (e.key === 'ArrowUp' || e.key === 'w') {
            ref.current.style.top = `${playerPositionY}px`;
            if (playerPositionY > 0) {
                setTimeout(() => {
                    setPlayerPositionY(playerPositionY - movingDistance);
                }, movingTiming);
            }

        } else if (e.key === 'Enter') {
            if (!activeBomb) {
                setActiveBomb(true);
                setBombPositionX(playerPositionX);
                setBombPositionY(playerPositionY);
                setTimeout(() => {
                    setActiveBomb(false);
                    setBombPositionX(-1);
                    setBombPositionY(-1);
                }, 3000);
            }
            return;
        } else {
            return;
        }
    };

    return (
        <>
            <div
                className='player'
                ref={ref}
                tabIndex={0}
                onKeyDown={handleKeyDown}
            >
            </div>
            {activeBomb &&
                <Bomb
                    positionY={bombPositionY}
                    positionX={bombPositionX}
                />}
        </>
    )
}