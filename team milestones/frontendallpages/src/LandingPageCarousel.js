import carouselimage1 from './HomeDecorImage.jpg';
import carouselimage2 from './clock1.png';
import carouselimage3 from './giftimage.jpg';
import Sculp1 from './Sculp1.jpg';
import Painting2 from './Painting2.png'

function LandingPageCarousel()
{
    return(
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item">
        <img className="bd-placeholder-img" width="420px" height="420px" src={Painting2} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/><rect width="50%" height="50%" fill="#777"></rect>

        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <p><a className="btn btn-lg btn-color text-white" href="/painting">Shop Now</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="bd-placeholder-img" width="420px" height="420px" src={carouselimage2} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/><rect width="100%" height="100%" fill="#777"></rect>

        <div className="container">
          <div className="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a className="btn btn-lg btn-color" href="/sculpture">Shop Now</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item active">
        <img className="bd-placeholder-img" width="420px" height="420px" src={Sculp1}aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/><rect width="100%" height="100%" fill="#777"></rect>

        <div className="container">
          <div className="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a className="btn btn-lg btn-color text-white" href="/sculpture">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    )
}

export default LandingPageCarousel;