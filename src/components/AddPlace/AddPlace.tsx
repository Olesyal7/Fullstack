import React from 'react'
import { Link } from 'react-router-dom'

const AddPlace: React.FC = () => {
    return (
        <section>
            <form>
                <div className="form">
                    <input type="text" name="name" required />
                    <label htmlFor="name"> Name</label>
                </div>
                <div className="form">
                    <input type="text" name="geographicalPosition" required />
                    <label htmlFor="geographicalPosition"> Geographical Position</label>
                </div>
                <div className="form">
                    <input type="text" name="description" required />
                    <label htmlFor="description"> Description</label>
                </div>
                <div className="img_form">
                    <input type="image" name="image" required />
                    <label htmlFor="image" className="img_label"> Image</label>
                </div>
                <button type="submit" id="send_form">Send</button>
            </form>
        </section>
    )
}

export default AddPlace