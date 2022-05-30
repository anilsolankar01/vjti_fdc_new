import Navbar from "./Navbar";
import banner from './banner.png';
import { Link } from 'react-router-dom';


export default function Header() {
    return(
        <>
        <div style={{justifyItems:'right'}}>
        <Link to="/">
            <img src={banner} alt="logo"/>
        </Link>
        </div>
        <Navbar/>
        </>
    )
}