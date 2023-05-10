import React, {useEffect, useState} from 'react'
import "./MapLocations.scss"
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import {useParams} from 'react-router-dom';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "../../assets/mapPin.svg"

function MapLocations() {
    const markerIcon = new L.Icon({
        iconUrl: icon,
        iconSize: [32, 32]
    });


    const [locationJson,
        setlocationJson] = useState({})
    const [showPin,
        setshowPin] = useState(false)
    const getData = async() => {
        fetch(`${import.meta.env.VITE_BASEURL}/data/locations.json`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(function (response) {
                return response.json();

            })
            .then(responseData => {
                setlocationJson(responseData)

            })

    }

    useEffect(() => {

        getData()

    }, [])

    useEffect(() => {
        if (Object.keys(locationJson).length !== 0) {

            setshowPin(true)
        }
    }, [locationJson])

    return (
        <div className="leaflet-container">


{showPin && 

            <MapContainer center={[locationJson["Bramhall"].long, locationJson["Bramhall"].lat]} zoom={8}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/> 
                    
                    
                    {showPin && Object
                    .keys(locationJson)
                    .map((key, i) => (

                        <Marker key={key}
                            icon={markerIcon}
                            position={[locationJson[key].long, locationJson[key].lat]}>
                            <Popup>
                                <div className="popup" key={key}>

                                {key}
                                </div>
                            </Popup>
                        </Marker>

                    ))
}

            </MapContainer>
}
        </div>
        
    )
}

export default MapLocations