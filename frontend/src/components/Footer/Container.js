import Row from "./Row";
import './Container.css'

export default function Container() {
    return(

<div class="container">
    

        <Row/>

        <div class="row mt-5 pt-4 border-top">
            <div class="col-md-6 col-lg-8 mb-md-0 mb-4">
                <p class="copyright mb-0">
                    Copyright ©<script>document.write(new Date().getFullYear());</script>2021 All rights reserved.
                </p>
            </div>
        
            {/* <div class="col-md-6 col-lg-4 text-md-right">
                <ul class="ftco-footer-social p-0">
                <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><span class="ion-logo-twitter"></span></a></li>
                <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><span class="ion-logo-facebook"></span></a></li>
                <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"><span class="ion-logo-instagram"></span></a></li>
                </ul>
            </div> */}
        </div>
    </div>

    )
}