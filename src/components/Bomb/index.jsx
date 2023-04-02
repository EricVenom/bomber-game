import './style.css';

export default function Bomb({ positionX, positionY }) {
    return (
        <div
            className='bomb'
            style={{ top: `${positionY}px`, left: `${positionX}px` }}
        />
    )
}