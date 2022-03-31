import React from 'react'
import { useLocation } from 'react-router-dom'
import CardComponent from '../componentes/CardComponent'

const OtroWebPage = () => {

    const location = useLocation()

    return (
        <div>OtroWebPage {location.state.nombre}
            <CardComponent
                titulo={"titulo de la card"}
                nombre={location.state.nombre}
            />
        </div>
    )
}

export default OtroWebPage