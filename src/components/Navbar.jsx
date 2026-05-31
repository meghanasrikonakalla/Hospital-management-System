import React from "react";
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div>
             <Link to="/">Home</Link>
             <Link to="/doctors">Doctors</Link>
             <Link to="/patients">Patients</Link>
        </div>
    )
}
export default Navbar