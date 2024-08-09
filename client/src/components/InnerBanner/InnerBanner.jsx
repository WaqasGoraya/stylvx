import React from 'react'

const InnerBanner = (props) => {
  return (
    <>
<section className="inner-page-banner">
    <div className="container">
      <div className="banner-head">
        <div className="inner-page-head d-flex align-items-center justify-content-center">
          <div className="hero-content text-center">
            <h1 className=" fw-bold pt-2 text-white">ABOUT US</h1>
            <div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><a className="text-decoration-none text-dark fw-normal"
                      href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item fw-bold text-white" aria-current="page">About Us</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default InnerBanner