import product1 from './product1.png';

function UserCart(){

    return(

    <div class="container px-4 py-5" id="hanging-icons">
    <h2 class="pb-2 border-bottom">Shopping cart</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <img src={product1} width="30px" height="30px" alt="Product Image"/>
        </div>
        <div>
          <h2>Featured title</h2>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary">
            Primary button
          </a>
        </div>
      </div>
    </div>
  </div>
    )
}

export default UserCart;