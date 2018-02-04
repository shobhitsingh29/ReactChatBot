import React from "react";
import {Link} from 'react-router-dom'
import config from "../../../config";
const {API: {protocols, domain, imagePath}} = config;

const BackButton = () => (
    <Link to='/'>
        <img src={`${protocols.HTTP}${domain.BOOKS_CONNECT_LOCAL}${imagePath}back_button.jpg`}
            className="back-button"/>
    </Link>
)

export default BackButton;