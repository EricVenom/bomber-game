import { useEffect, useRef, useState } from 'react';
import Player from '../Player';
import './style.css';

export default function Map() {
    const mapRef = useRef(0);

    const [mapProportion, setMapProportion] = useState({
        height: mapRef.current.offsetHeight,
        width: mapRef.current.offsetWidth
    })

    useEffect(() => {
        setMapProportion({
            height: mapRef.current.offsetHeight,
            width: mapRef.current.offsetWidth
        })
    }, [])

    return (
        <div
            className='map'
            ref={mapRef}
        >
            <Player
                mapHeight={mapProportion.height}
                mapWidth={mapProportion.width}
            >
            </Player>
        </div>
    )
}