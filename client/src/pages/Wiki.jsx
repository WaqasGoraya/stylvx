import InnerBannerWhite from "../components/InnerBanner/InnerBannerWhite"

const Wiki = () => {
  return (
    <>
          <section className="wiki-profile-section container-fluid my-5">
    <div>
     <InnerBannerWhite title="Wiki Profiles" />
      <div className="container">
        <div className="row flex-row justify-content-between align-content-center mt-5">
          <div className="tabs-btns col-lg-4 col-md-4 col-sm-12 col-12 justify-content-sm-between">
            <div
              className="tabs-btn-outer d-lg-flex d-block flex-column flex-wrap align-items-start justify-content-evenly gap-2 pt-4">
              <button className="tab-btn tablink text-start p-2 text-uppercase" onclick="openPage('Home', this)"
                id="defaultOpen">
                Fashion Influencers
              </button>
              <button className="tab-btn tablink text-start p-2 text-uppercase" onclick="openPage('News', this)">
                Fashion Models
              </button>
              <button className="tab-btn tablink text-start p-2 text-uppercase" onclick="openPage('Contact', this)">
                Fashion Podcaster
              </button>
              <button className="tab-btn tablink text-start p-2 text-uppercase" onclick="openPage('About', this)">
                Fashion Editors and Journalists
              </button>
              <button className="tab-btn tablink text-start p-2 text-uppercase" onclick="openPage('Home', this)">
                Fashion Photographers
              </button>
              <button className="tab-btn tablink text-start p-2 text-uppercase" onclick="openPage('News', this)">
                Fashion Entrepreneurs
              </button>
              <button className="tab-btn tablink text-start p-2 text-uppercase" onclick="openPage('Contact', this)">
                Fashion Stylist
              </button>
            </div>
          </div>
          <div className="wiki-short-outer col-lg-8 col-md-8 col-sm-12 col-12 d-flex flex-column gap-3">
            <div
              className="short-by-section row d-flex flex-row justify-content-center justify-content-lg-between align-items-center p-3">
              <div className="short-by-title">
                <span className="fw-bold fs-3 text-uppercase">Fashion Influencers</span>
              </div>
              <div className="wiki-short-by d-flex flex-row justify-content-center align-items-center gap-2 p-2">

                <span className="fw-bold text-uppercase">Sort By</span>
                <div className="wiki-short-drobpx d-flex flex-row justify-content-center align-items-center ">

                  <button className="wiki-sortby-btn btn-secondary  dropdown-toggle w-100" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Populer
                    <div className="popular-dropbox-arrow">
                      <img src="images/right-arrow.png" alt="" />
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
            <div className="wiki-cards-outer">
              <div id="Home" className="tabcontent">
                <div className="row">
                  <div
                    className="wiki-cards tabcontent col-lg-4 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center p-2">
                    <div className="wiki-card-img">
                      <img className="img-fluid" src="./images/wiki-img-1.png" alt="" />
                    </div>
                    <div
                      className="wiki-card-desciption d-flex flex-column justify-content-between align-items-center text-center p-1">
                      <span className="fw-bold fs-5 wiki-card-name">Michelle Joy</span>
                      <p className="wiki-card-designation">Singer,social media inlueencer</p>
                      <button className="wiki-card-view-btn p-1 w-100 border-0 mb-3">view Profile</button>
                    </div>
                  </div>
                  <div
                    className="tabcontent wiki-cards col-lg-4 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center p-2">
                    <div className="wiki-card-img">
                      <img className="img-fluid" src="./images/wiki-img-2.png" alt="" />
                    </div>
                    <div
                      className="wiki-card-desciption d-flex flex-column justify-content-between align-items-center text-center p-1">
                      <span className="fw-bold fs-5">Michelle Joy</span>
                      <p>Singer,social media inlueencer</p>
                      <button className="p-1 w-100 border-0 mb-3">view Profile</button>
                    </div>
                  </div>
                  <div
                    className="tabcontent wiki-cards col-lg-4 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center p-2">
                    <div className="wiki-card-img">
                      <img className="img-fluid" src="./images/wiki/wiki-img-3.png" alt="" />
                    </div>
                    <div
                      className="wiki-card-desciption d-flex flex-column justify-content-between align-items-center text-center p-1">
                      <span className="fw-bold fs-5">Michelle Joy</span>
                      <p>Singer,social media inlueencer</p>
                      <button className="p-1 w-100 border-0 mb-3">view Profile</button>
                    </div>
                  </div>
                  <div
                    className="tabcontent wiki-cards col-lg-4 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center p-2">
                    <div className="wiki-card-img">
                      <img className="img-fluid" src="./images/wiki/wiki-img-4.png" alt="" />
                    </div>
                    <div
                      className="wiki-card-desciption d-flex flex-column justify-content-between align-items-center text-center p-1">
                      <span className="fw-bold fs-5">Michelle Joy</span>
                      <p>Singer,social media inlueencer</p>
                      <button className="p-1 w-100 border-0 mb-3">view Profile</button>
                    </div>
                  </div>
                  <div
                    className="tabcontent wiki-cards col-lg-4 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center p-2">
                    <div className="wiki-card-img">
                      <img className="img-fluid" src="./images/wiki/wiki-img-5.png" alt="" />
                    </div>
                    <div
                      className="wiki-card-desciption d-flex flex-column justify-content-between align-items-center text-center p-1">
                      <span className="fw-bold fs-5">Michelle Joy</span>
                      <p>Singer,social media inlueencer</p>
                      <button className="p-1 w-100 border-0 mb-3">view Profile</button>
                    </div>
                  </div>
                  <div
                    className="tabcontent wiki-cards col-lg-4 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center p-2">
                    <div className="wiki-card-img">
                      <img className="img-fluid" src="./images/wiki/wiki-img-6.png" alt="" />
                    </div>
                    <div
                      className="wiki-card-desciption d-flex flex-column justify-content-between align-items-center text-center p-1">
                      <span className="fw-bold fs-5">Michelle Joy</span>
                      <p>Singer,social media inlueencer</p>
                      <button className="p-1 w-100 border-0 mb-3">view Profile</button>
                    </div>
                  </div>
                  <div className="wiki-viewmore-btn d-flex justify-content-center">
                    <button className="p-2 fw-bold text-white bg-dark border-0 mt-5">View More</button>
                  </div>

                </div>
              </div>

              <div id="News" className="tabcontent">
                <h3>News</h3>
                <p>Some news this fine day!</p>
              </div>

              <div id="Contact" className="tabcontent">
                <h3>Contact</h3>
                <p>Get in touch, or swing by for a cup of coffee.</p>
              </div>

              <div id="About" className="tabcontent">
                <h3>About</h3>
                <p>Who we are and what we do.</p>
              </div>


            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Wiki