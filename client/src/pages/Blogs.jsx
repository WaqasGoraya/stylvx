import InnerBannerWhite from "../components/InnerBanner/InnerBannerWhite"

const Blogs = () => {
  return (
    <>
          <section className="blog-section mt-5">
    <div className="container">
    <InnerBannerWhite title="Blogs" />
      <div className="row faision-short-by d-flex flex-row justify-content-center justify-content-lg-between justify-content-md-between align-items-center mt-4 mb-4 p-2 gap-4">
        <div className="faision-text">
          <span className="fs-5 fw-bold text-uppercase">Fashion News & Style Guide</span>
        </div>
        <div
          className="shortby-outer d-flex flex-row justify-content-between align-items-center gap-2 p-2 bg-white rounded-3">
          <span className="fw-bold text-uppercase">Sort By</span>
          <div className="short-drobpx d-flex flex-row justify-content-center align-items ">

            <button className="sortby-btn btn-secondary  dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Populer
              
              <div className="popular-dropbox-arrow">
                <img src="/images/right-arrow.png" alt="" />
              </div>
            </button>


            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row cards-outer row-cols-md-2 align-items-center justify-content-evenly">
        <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-2">
          <div className="blog-card">
            <div className="blog-card-img-outer">
              <img className="blog-card-img" src="./images/blog/blog-1.png" alt="Blog Image" />
            </div>
            <div className="blog-card-info d-flex flex-column justify-content-start align-items-start p-2">
              <h1 className="fs-5 fw-bold blog-card-heading">lorem ipsum</h1>
              <div className="d-flex flex-row gap-2 position-relative">
                <h6 className="fw-bold blog-card-date">2024-07-05</h6>
                <span className="date p-1"></span>
                <h6 className="fw-bold blog-card-aurther">By William</h6>
              </div>
              <p className="text-start blog-card-detail">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text.</p>
              <div className="read-btn">
                <button className="border-0 bd-0 readmore fw-bold text-dark">Read More</button>
                <span className="arrow-line"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-2">
          <div className="blog-card">
            <div className="blog-card-img-outer">
              <img className="blog-card-img" src="./images/blog/blog-2.png" alt="Blog Image" />
            </div>
            <div className="blog-card-info d-flex flex-column justify-content-start align-items-start p-2">
              <h1 className="fs-5 fw-bold blog-card-heading">lorem ipsum</h1>
              <div className="d-flex flex-row gap-2 position-relative">
                <h6 className="fw-bold blog-card-date">2024-07-05</h6>
                <span className="date p-1"></span>
                <h6 className="fw-bold blog-card-aurther">By William</h6>
              </div>
              <p className="text-start blog-card-detail">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text.</p>
              <div className="read-btn">
                <button className="border-0 bd-0 readmore fw-bold text-dark">Read More</button>
                <span className="arrow-line"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-2">
          <div className="blog-card">
            <div className="blog-card-img-outer">
              <img className="blog-card-img" src="./images/blog/blog-3.png" alt="Blog Image" />
            </div>
            <div className="blog-card-info d-flex flex-column justify-content-start align-items-start p-2" >
              <h1 className="fs-5 fw-bold blog-card-heading">lorem ipsum</h1>
              <div className="d-flex flex-row gap-2 position-relative">
                <h6 className="fw-bold blog-card-date">2024-07-05</h6>
                <span className="date p-1"></span>
                <h6 className="fw-bold blog-card-aurther">By William</h6>
              </div>
              <p className="text-start blog-card-detail">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text.</p>
              <div className="read-btn">
                <button className="border-0 bd-0 readmore fw-bold text-dark">Read More</button>
                <span className="arrow-line"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-2">
          <div className="blog-card">
            <div className="blog-card-img-outer">
              <img className="blog-card-img" src="./images/blog/blog-4.png" alt="Blog Image" />
            </div>
            <div className="blog-card-info d-flex flex-column justify-content-start align-items-start p-2">
              <h1 className="fs-5 fw-bold blog-card-heading">lorem ipsum</h1>
              <div className="d-flex flex-row gap-2 position-relative">
                <h6 className="fw-bold blog-card-date">2024-07-05</h6>
                <span className="date p-1"></span>
                <h6 className="fw-bold blog-card-aurther">By William</h6>
              </div>
              <p className="text-start blog-card-detail">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text.</p>
              <div className="read-btn">
                <button className="border-0 bd-0 readmore fw-bold text-dark">Read More</button>
                <span className="arrow-line"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-2">
          <div className="blog-card">
            <div className="blog-card-img-outer">
              <img className="blog-card-img" src="./images/blog/blog-5.png" alt="Blog Image" />
            </div>
            <div className="blog-card-info d-flex flex-column justify-content-start align-items-start p-2">
              <h1 className="fs-5 fw-bold blog-card-heading">lorem ipsum</h1>
              <div className="d-flex flex-row gap-2 position-relative">
                <h6 className="fw-bold blog-card-date">2024-07-05</h6>
                <span className="date p-1"></span>
                <h6 className="fw-bold blog-card-aurther">By William</h6>
              </div>
              <p className="text-start blog-card-detail">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text.</p>
              <div className="read-btn">
                <button className="border-0 bd-0 readmore fw-bold text-dark">Read More</button>
                <span className="arrow-line"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-2">
          <div className="blog-card">
            <div className="blog-card-img-outer">
              <img className="blog-card-img" src="./images/blog/blog-6.png" alt="Blog Image" />
            </div>
            <div className="blog-card-info d-flex flex-column justify-content-start align-items-start p-2">
              <h1 className="fs-5 fw-bold blog-card-heading">lorem ipsum</h1>
              <div className="d-flex flex-row gap-2 position-relative">
                <h6 className="fw-bold blog-card-date">2024-07-05</h6>
                <span className="date p-1"></span>
                <h6 className="fw-bold blog-card-aurther">By William</h6>
              </div>
              <p className="text-start blog-card-detail">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text.</p>
              <div className="read-btn">
                <button className="border-0 bd-0 readmore fw-bold text-dark">Read More</button>
                <span className="arrow-line"></span>
              </div>
            </div>
          </div>
        </div>
        <button className="see-more p-2 bg-black color-white text-light border-0 mt-5 mb-2">See More</button>
      </div>
    </div>
  </section>
    </>
  )
}

export default Blogs