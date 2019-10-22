import React from 'react';
import sahara from '../../assets/sahara.jpg';
import {Link} from "react-router-dom";

const Place: React.FC = () => {
    return (
        <section>
            <header>
                <div className="general_title">Sahara</div>
            </header>
            <div className="border">
                <img className="image" src={sahara} alt="Картинка" />
            </div>
            <div className="description">Geographical position: 23°00′ с. ш. 12°36′ в. д.</div>
            <div className="description">Climate: сухой субтропический, сухой тропический</div>
            <div className="description">Nations: регейбат, чаамба, туареги</div>
            <Link to="/Tape/" className="href">
                <div className="general_title">Photo tape</div>
            </Link>
        </section>
    )
}
export default Place