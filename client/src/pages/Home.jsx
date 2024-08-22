import { useAuth } from "../context/authContext";
const Home = () => {
  const [auth,setAuth] = useAuth()
  return (
    <>
    <div className="video-background">
    <video autoPlay muted loop playsInline>
      <source src="./images/short-vidro.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="content-hero text-white text-center pb-4 pb-md-5">
      <p className="hero-txt-craft mb-0">Crafted to perfection</p>
      <h1 className="hero-txt-fashion">Fashion with Stylvix</h1>
      <button className="btnshopnow">Shop Now</button>
    </div>
  </div>
  <div className="headings text-center my-5">
    <div className="container">
      <h3 className="ourtxt">OUR <span className="colltxt">COLLECTIONS</span></h3>
    </div>
  </div>
  <section className="our-collection-sec">
    <div className="container">
      <div className="row g-3">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="position-relative">
            <div className="our-collect-image-sec">
              <img src="./images/women.png" className="img-fluid" alt="Image 1" />
            </div>
            <div className="text-overlay-our-women">
              <h3 className="mb-0 fw-bold">WOMENS</h3>
              <a href="#">
                SHOP NOW
                <span className="p-2">
                  <svg width="18" height="10" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2334 6.06667H2.00007M16.2334 6.06667L12.1667 2M16.2334 6.06667L12.1667 10.1333"
                      stroke="white" strokeWidth="2.03333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="position-relative">
            <div className="our-collect-mens-image">
              <img src="./images/men.png" className="img-fluid" alt="Image 2" />
            </div>
            <div className="text-overlay-our-women">
              <h3 className="mb-0 fw-bold">MENS</h3>
              <a href="#">
                SHOP NOW
                <span className="p-2">
                  <svg width="18" height="10" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2334 6.06667H2.00007M16.2334 6.06667L12.1667 2M16.2334 6.06667L12.1667 10.1333"
                      stroke="white" strokeWidth="2.03333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="position-relative mt-3">
            <div className="our-collect-mens-image">
              <img src="./images/kids.png" className="img-fluid" alt="Image 3" />
            </div>
            <div className="text-overlay-our-women">
              <h3 className="mb-0 fw-bold">KIDS</h3>
              <a href="#">
                SHOP NOW
                <span className="p-2">
                  <svg width="18" height="10" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2334 6.06667H2.00007M16.2334 6.06667L12.1667 2M16.2334 6.06667L12.1667 10.1333"
                      stroke="white" strokeWidth="2.03333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="my-5">
    <hr className="custom-hr1" />
  </div>
  <section className="trending-brands">
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-lg-4">
          <div className="text-center text-md-start">
            <div className="headings">
              <h3 className="ourtxt">TRENDING <span className="colltxt">BRANDS</span></h3>
            </div>
            <p className="brandpara mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has
              been the industry's standard dummy text.</p>
          </div>
        </div>
        <div className="col-md-7 col-lg-8">
          <div className="owl-carousel owl-theme">
            <div className="item">
              <div className="home-slider-image-sec">
                <img src="./images/amazon.png" />
              </div>
            </div>
            <div className="item">
              <div className="home-slider-image-sec">
                <img src="./images/amazon.png" />
              </div>
            </div>
            <div className="item">
              <div className="home-slider-image-sec">
                <img src="./images/amazon.png " />
              </div>
            </div>
            <div className="item">
              <div className="home-slider-image-sec">
                <img src="./images/amazon.png" />
              </div>
            </div>
            <div className="item">
              <div className="home-slider-image-sec">
                <img src="./images/amazon.png" />
              </div>
            </div>
            <div className="item">
              <div className="home-slider-image-sec">
                <img src="./images/amazon.png" />
              </div>
            </div>
            <div className="item">
              <div className="home-slider-image-sec">
                <img src="./images/amazon.png" />
              </div>
            </div>
            <div className="item">
              <div className="home-slider-image-sec">
                <img src="./images/amazon.png" />
              </div>
            </div>
            <div className="item">
              <div className="home-slider-image-sec">
                <img src="./images/amazon.png" />
              </div>
            </div>
            <div className="item">
              <div className="home-slider-image-sec">
                <img src="./images/amazon.png" />
              </div>
            </div>
            <div className="item">
              <div className="home-slider-image-sec">
                <img src="./images/amazon.png" />
              </div>
            </div>
            <div className="item">
              <div className="home-slider-image-sec">
                <img src="./images/amazon.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="my-5">
    <hr className="custom-hr1" />
  </div>

  <div className="headings text-center my-5">
    <div className="container">
      <h3 className="ourtxt">OUR LATEST <span className="colltxt">BLOGS</span></h3>
    </div>
  </div>

  <section className="latest-blogs">
    <div className="container">
      <div className="row gy-3">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="latest-blog-image-sec">
            <img src="./images/blog/blog-1.png" className="img-fluid" alt="" />
          </div>
          <div className="description mt-3 text-center text-md-start">
            <h4 className="blog-txt-h1 text-uppercase">Lorem Ipsum</h4>
            <ul className="d-flex gap-3 ul-blog justify-content-center justify-content-md-start">
              <li>2024-07-05</li>
              <li>
                <img src="./images/ellips.png" alt="Ellipse icon" />
              </li>
              <li>By William</li>
            </ul>
            <p className="para-blog">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text.
            </p>
            <a href="#" className="read-blog">
              Read More
              <span className="m-2">
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.1458 2.64914L1.85408 9.35082M14.1458 2.64914L8.71915 1.05197M14.1458 2.64914L12.5487 8.07584"
                    stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="latest-blog-image-sec">
            <img src="./images/blog/blog-2.png" className="img-fluid" alt="" />
          </div>
          <div className="description mt-3 text-center text-md-start">
            <h4 className="blog-txt-h1 text-uppercase">Lorem Ipsum</h4>
            <ul className="d-flex gap-3 ul-blog justify-content-center justify-content-md-start">
              <li>2024-07-05</li>
              <li>
                <img src="./images/ellips.png" alt="Ellipse icon" />
              </li>
              <li>By William</li>
            </ul>
            <p className="para-blog">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text.
            </p>
            <a href="#" className="read-blog">
              Read More
              <span className="m-2">
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.1458 2.64914L1.85408 9.35082M14.1458 2.64914L8.71915 1.05197M14.1458 2.64914L12.5487 8.07584"
                    stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <button className="btn-blog-seemore">See More</button>
      </div>
    </div>
  </section>
  <pre>{JSON.stringify(auth.user)}</pre>
    </>
  )
}

export default Home