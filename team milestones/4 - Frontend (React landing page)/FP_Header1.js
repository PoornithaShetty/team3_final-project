function FP_Header1(){
    return(
 <header className="p-2" style={{"padding":"0px"}}>
 <div className="px-2 py-1 bg-dark text-white">
 <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
     <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
     </a>
     <h2>mahala محلة</h2>  

     <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

         <nav className="navbar navbar-expand-xxl navbar-dark bg-dark" aria-label="Seventh navbar example"/>
             <div className="container-fluid"/>
     <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenus">
         <span className="navbar-toggler-icon"></span>
     </button>

     <div className="offcanvas offcanvas-start navbar-light bg-light" id="offcanvasMenus" style={{"width": "300px"}}>
         <div className="border-bottom p-4 mb-4 "> 
             <h4 className="text-black"> Hello, Sign in</h4> 
             <button type="button" className="btn-close float-end text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>

         <ul className="navbar-nav">
             <li className="nav-item">
                 <a href="#" className="nav-link px-4">Home</a>
             </li>
             <li className="nav-item">
                 <a href="#" className="nav-link px-4">About Us</a>
             </li>
             <li className="nav-item">
                 <a href="#" className="nav-link px-4">Our Blog</a>
             </li>
             <li className="nav-item">
                 <a href="#" className="nav-link px-4">Our Services</a>
             </li>
             <li className="nav-item">
                 <a href="#" className="nav-link px-4">Templates</a>
             </li>
             <li className="nav-item">
                 <a href="#" className="nav-link px-4">Docs</a>
             </li>
             <li className="nav-item">
                 <a href="#" className="nav-link px-4">Our Projects</a>
             </li>
             <li className="nav-item">
                 <a href="#" className="nav-link px-4">Examples</a>
             </li>
             <li className="nav-item">
                 <a href="#" className="nav-link px-4">Discussions</a>
             </li>
         </ul>
     </div>
     </ul>

     <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
     <input type="search" className="form-control form-control-light" placeholder="Search..." aria-label="Search"/>
     </form>

 <div className="text-end">
     <button type="button" className="btn btn-primary">Sign Up</button>
     <a href="/" className="px-3">
     </a>

     </div> 
 </div>
 </div>
 <nav className="bg-light border-bottom">
     <div className="container d-flex flex-wrap">
     <ul className="nav me-auto">
         <li className="nav-item"><a href="#" className="nav-link link-dark px-2 active" aria-current="page">Home</a></li>
         <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Features</a></li>
         <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Pricing</a></li>
         <li className="nav-item"><a href="#" className="nav-link link-dark px-2">FAQs</a></li>
         <li className="nav-item"><a href="#" className="nav-link link-dark px-2">About</a></li>
     </ul>
     </div>
 </nav>
</header>
    )
}
export default FP_Header1;
