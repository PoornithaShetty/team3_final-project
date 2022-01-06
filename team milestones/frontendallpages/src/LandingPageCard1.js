import { useState } from 'react';
import { Link } from 'react-router-dom';
import heart from './heart.svg';
import Painting2 from './Painting2.png';
import clock1 from './clock1.png';
import Doll3 from './Doll3.jpg';
import romanvases from './romanvases.png'
import Sculp1 from './Sculp1.jpg'

function LandingPageCard1() {
    return(
        <div className=" px-4">
            <h2 className="pb-2 py-2 text-bold border-bottom text-center py-3">Most Viewed</h2>
            <p className='text-center Header_color'> Curabitur sollicitudin ultrices risus, ut ornare ante ullamcorper sed. Quisque vel sapien a massa aliquam porta.Sed quis lobortis lorem.</p>

            <div className="row  row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-2">
            <div className="col">
            <div className="card">
                <div className="d-flex flex-column h-50 text-shadow-1">
                    <img src={Doll3} className="card-img-top" alt="..." width="80" height="250"/>
                    <div className="card-body">
                    <p className="card-text">Doll 3</p>
                    
                    <Link to='/dollsandminiatures' className="btn btn-color text-white">View Details</Link>
                    </div>
                    </div>
            </div>
            </div>

            <div className="col">
            <div className="card">
                <div className="d-flex flex-column h-50 text-shadow-1">
                    <img src={romanvases} className="card-img-top" alt="..." width="80" height="250"/>
                    <div className="card-body">
                    <p className="card-text">Candle holder</p>
                    
                    <Link to='./sculpture' className="btn btn-color text-white">View Details</Link>
                    </div>
                    </div>
            </div>
            </div>

            <div className="col">
            <div className="card">
                <div className="d-flex flex-column h-50 text-shadow-1">
                    <img src={Painting2} className="card-img-top" alt="..." width="80" height="250"/>
                    <div className="card-body">
                    <p className="card-text">Painting</p>
                    
                    <Link to='/painting' className="btn btn-color text-white">View Details</Link>
                    </div>
                    </div>
            </div>
            </div>

            <div className="col">
            <div className="card">
                <div className="d-flex flex-column h-50 text-shadow-1">
                    <img src={Sculp1} className="card-img-top" alt="..." width="80" height="250"/>
                    <div className="card-body">
                    <p className="card-text">Sculpture 1</p>
                    
                    <Link to='./sculpture' className="btn btn-color text-white">View Details</Link>
                    </div>
                    </div>
            </div>
            </div>
            
        </div>
        </div>
    )
    
}

export default LandingPageCard1;