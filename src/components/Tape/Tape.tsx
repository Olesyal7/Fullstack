import React from 'react'
import { Link } from 'react-router-dom'
import sea from '../../assets/sea.jpg'

const Tape: React.FC = () => {
    return (
        <section>
            <header>
                <div className="general_title">Places</div>
            </header>
            <div className="border">
                <Link to='/Place/'>
                    <img src={sea} className="image" alt="Картинка"/>
                </Link>
                <Link to='/Place/'>
                    <img src={sea} className="image" alt="Картинка"/>
                </Link>
                <Link to='/Place/'>
                    <img src={sea} className="image" alt="Картинка"/>
                </Link>
                <Link to='/Place/'>
                    <img src={sea} className="image" alt="Картинка"/>
                </Link>
                <Link to='/Place/'>
                    <img src={sea} className="image" alt="Картинка"/>
                </Link>
            </div>
        </section>
    )
}

export default Tape