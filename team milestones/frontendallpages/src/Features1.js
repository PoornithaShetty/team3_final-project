import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heart from './heart.svg';
import suncatcher from './suncatcher.png';
import wallart1 from './wallart1.png';
import pullover from './pullover.png';
import sculpture1 from './sculpture1.png'


function Features1(){
       // 2.2 If the submission is successful, set state to "unsucessful"
       return(
        <div className="container py-5" >
            <div className="row  row-cols-1 row-cols-lg-2 g-5 py-2 px-2">
                <div className="col">
                <div className="card">
                <div className="d-flex flex-column h-50 text-shadow-1">
                    <img src={suncatcher} className="card-img-top" alt="suncatcher"/>
                    </div>
                </div>
                </div>    
                <div className="col">
                <div className="card">
                <div className="d-flex flex-column h-50 text-shadow-1">
                    <img src={wallart1} className="card-img-top" alt="wallart1" height={300}/>
                    </div>
                </div>
                </div>
                </div>
                <div className="row  row-cols-1 row-cols-lg-2 g-3 py-2 px-4">   
                <div className="col">
                <div className="card">
                <div className="d-flex flex-column h-50 text-shadow-1">
                    <img src={pullover} className="card-img-top" alt="..."/>
                    </div>
                </div>
                </div>   
                <div className="col">
                <div className="card">
                <div className="d-flex flex-column h-50 text-shadow-1">
                    <img src={sculpture1} className="card-img-top" alt="..."/>
                    </div>
                </div>
                </div>
                </div>
 </div>
    )
}
export default Features1;
