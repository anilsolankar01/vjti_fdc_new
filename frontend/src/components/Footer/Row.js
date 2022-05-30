import './Row.css'
import { Link } from 'react-router-dom';

export default function Row() {

return(
<div className="row">
            <div className="col-md-7">
                <div className="row">
                    <div className="col-md-4 mb-md-0 mb-4">
                        <h2 className="footer-heading">About</h2>
                        <ul className="list-unstyled">
                        <li><a href='/' className="d-block">About VJTI-FDC</a></li>
                        <li><a href="https://vjti.ac.in/" className="d-block">About VJTI</a></li>
                        <li><a href='/' className="d-block">Focus Area</a></li>
                        <Link to='/people'>
                        <li><a href='/' className="d-block">People</a></li>
                        </Link>
                        </ul>
                    </div>
                    
                    <div className="col-md-4 mb-md-0 mb-4">
                        <h2 className="footer-heading">Quick Links</h2>
                        <ul className="list-unstyled">
                        <li><a href='http://dbatu.ac.in/' className="d-block">DBATU</a></li>
                        <li><a href='http://www.mhrd.gov.in/' className="d-block">MHRD</a></li>
                        <li><a href='http://dst.gov.in/' className="d-block">DST</a></li>
                        <li><a href='http://www.dtemaharashtra.gov.in/' className="d-block">DTE</a></li>
                        <li><a href='http://www.vjti.ac.in/' className="d-block">VJTI</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-md-0 mb-4">
                        <h2 className="footer-heading">Resources</h2>
                        <ul className="list-unstyled">
                        <li><Link to='/research'><div className="d-block">Research</div></Link></li>
                        <li><Link to='photo-gallery'><div className="d-block">Photo Gallery</div></Link></li>
                        <li><Link to='contact-us'><div className="d-block">Contact Us</div></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
)
}
