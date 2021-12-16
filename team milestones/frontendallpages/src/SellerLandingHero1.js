import { Link } from 'react-router-dom';

function SellerLandingHero1(){
    return(
        <div id="sellerlh1">
        <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">It's time to shine</h1>
        <p className="col-lg-10 fs-4" style={{"color":"white"}}>Curabitur sollicitudin ultrices risus, ut ornare ante ullamcorper sed. Quisque vel sapien a massa aliquam porta. Etiam aliquet elit metus, vitae fermentum mauris efficitur eu. Sed quis lobortis lorem.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <Link to="/seller/productadd" className="btn">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Add product</button>
          </Link>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Update profile</button>
        </div>
      </div>
    </div>
  </div>
  </div>
    )
}

export default SellerLandingHero1;