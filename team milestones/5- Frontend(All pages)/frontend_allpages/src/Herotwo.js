import { Link } from "react-router-dom";
function Herotwo(){
    return(
 <div class="bg-dark text-secondary px-4 py-4 text-center">
        <div class="py-2" >
        <h5 class="text-white">WANT TO KEEP UPDATED WITH NEW PRODUCT LAUNCHES?</h5>
        <h6>Subscribe to our newsletters to get information about product launches and offers!</h6>
        <div class="input-group mb-3 w-50 p-2 mx-auto">
        <input type="text" class="form-control" placeholder="Email address..." aria-label="Email address" aria-describedby="button-addon2"/>
        <button class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" type="button" id="button-addon2">Subscribe Now</button>
        </div>
        </div>

        <div class="col-lg-6 mx-auto">
        <h4 class="py-0"> About Us</h4>
        <p>mahala is exclusive of its kind online social community designed to be the one-stop destination to represent the whole variety of handicrafts of the nation. mahala community aims to connect local artists and artisans to global customers. Our platform stands out by specifically catering to artisanal products, becoming the top-of-mind online shop for those looking to support and buy local and for those needing a suitable platform to reach their niche markets.<Link to="/aboutus"> Learn more </Link></p>

        </div>
        </div>
    )
}
export default Herotwo;