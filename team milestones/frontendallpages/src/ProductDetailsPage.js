import { useEffect, useState, useParams} from 'react';
import { Link } from 'react-router-dom';


function ProductDetailsPage(props){

    // const productId = props.match.params.productId

    // const [Product, setProduct] = useState([])

    // useEffect(() => {
    // fetch (`${process.env.REACT_APP_BACKEND}/product/`,
    //     {
    //         method: 'GET',
    //     }
    // );
    // }
    // )

// const listProductDetails = id => async dispatch => {
//   try {
//     dispatch({ type: PRODUCT_DETAILS_REQUEST })

//     const { data } = await fetch.get(`${process.env.REACT_APP_BACKEND}/products/${id}`)

//     dispatch({
//       type: PRODUCT_DETAILS_SUCCESS,
//       payload: data.data.product,
//     })
//     console.log(data)
//   } 
// }
//   const ProductDetailsScreen = ({ match, histroy }) => {
//   const [qty, setQty] = useState(1)

//   const dispatch = useDispatch()
//   const ProductDetail = useSelector(state => state.productDetails)

//   const { loading, error, product } = ProductDetail

//   useEffect(() => {
//     window.scrollTo(0, 0)
//     dispatch(listProductDetails(match.params.id))
//   }, [dispatch, match])

     useEffect(() =>{
       fetchItems();
   }, []);

    const productId = props.match.params.productId
     const url = window.location.href

     console.log(url)

     const pathname = window.location.pathname
     console.log(pathname)

     const category = pathname.split(`/`)
     console.log(category)

     const productCategory = category.at(1)
     console.log(productCategory)
     
    const [items, setItems] = useState([]);
 
     const fetchItems =async () => {
       const data = await fetch(`${process.env.REACT_APP_BACKEND}/product/${productCategory}/${productId}`,
       {
           method: 'GET',
       }
        );
   const items = await data.json();
   setItems(items);
   };
   

    return(
          <div id="productdetails">  
          <div className="container py-5">
          <div className="card mb-3 border border-3 border-secondary" style={{"max-width": "540px;"}}>
          <div className="row g-0">
            <div className="col-md-6">
              <img src={items.productImage} className="img-fluid rounded-start" alt="..." width="100" height="250"/>
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h3 className="card-title">{items.productName}</h3>
                <p className="card-text">{items.productDescription}</p>
                <h6 className="card-text">Price : {items.productPrice}</h6>
                {items.productStock > 0 && 
                <div>
                  <p className="card-text"><small className="text-muted">InStock</small></p>
                 <Link to="/usercart" className="btn btn-primary">Add To Cart</Link>
                 </div>
                }
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    )
}
export default ProductDetailsPage;