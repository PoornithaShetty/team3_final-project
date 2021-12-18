import { Link } from 'react-router-dom';

function SellerChooseCategory()
{
    return(
        <div id="sellerchoosecategory-bg" className="py-5">
            <div className="container border border-5 border-secondary" style={{"margin-top": "0em", "max-width": "35em"}}>
            <h1>Choose Category of product you want to add</h1>
            <br/>
            <div class="d-grid gap-2">
            <Link to="/seller/homedecor/productadd" className="btn">
              <button type="button" className="btn btn-secondary btn-lg px-4 me-md-2">Home Decor</button>
            </Link>
            <br/>
            <Link to="/seller/paintings/productadd" className="btn">
              <button type="button" className="btn btn-secondary btn-lg px-4 me-md-2">Paintings</button>
            </Link>
            <br/>
            <Link to="/seller/Otherproductadd" className="btn">
              <button type="button" className="btn btn-secondary btn-lg px-4 me-md-2">others</button>
            </Link>
            </div>
            </div>
            </div>

    )
}

export default SellerChooseCategory;