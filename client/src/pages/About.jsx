import InnerBanner from "../components/InnerBanner/InnerBanner"

const About = () => {
  return (
    <>
        <InnerBanner/>
        <section className="content-sec">
    <div className="container">
      <p className="my-4 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of
        Lorem Ipsum.
      </p>
    </div>
  </section>


  <section className="about-center-div pt-5">
    <div className="container">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-sm-12 col-md-12 col-lg-5">
          <div className="content-image-sec">
            <img src="/images/about-div.png" className="img-fluid img-custom-about" alt="" />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-7">
          <div className="text-center text-lg-start">
            <h4 className="fw-bold text-dark text-uppercase">LOREM IPSUM</h4>
            <p className="mb-0 pb-4 pb-lg-0">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="container my-4 my-md-5">
    <div className="headings text-center mb-3 mb-md-4">
      <div className="container">
        <h3 className="ourtxt text-uppercase">lorem <span className="colltxt">ipsum</span></h3>
      </div>
    </div>
    <p className="text-center para-width-small">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of
      Lorem Ipsum.
    </p>
  </section>

  <section className="about-black-div pt-5">
    <div className="container">
      <div className="row gy-4 align-items-center">
        <div className="col-12 col-sm-12 col-md-12 col-lg-7 order-2 order-lg-1">
          <div className="text-center text-lg-start">
            <h4 className="fw-bold text-white text-uppercase">LOREM IPSUM</h4>
            <p className="mb-0 pb-4 pb-lg-0 text-white">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 order-1 order-lg-2">
          <div className="content-image-sec">
            <img src="/images/about-div.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="container our-team-sec">
    <div className="row">
      <div className="col justify-content-center mt-5 mb-4">
        <div className="headings text-center mb-3 mb-md-4">
          <div className="container">
            <h3 className="ourtxt text-uppercase">Meet Our <span className="colltxt">Team</span></h3>
          </div>
        </div>

        <div className="owl-carousel owl-theme mt-5">
          <div className="item item-slider-about">
            <div className="item-image-div-about">
              <img src="/images/john.png" className="center-image" />
            </div>
            <h4 className="item-name-slider mt-3 mb-0">KRISTA JOHN</h4>
            <span className="item-post-slider">designer</span>
          </div>
          <div className="item item-slider-about">
            <div className="item-image-div-about">
              <img src="/images/isbella.png" className="center-image" />
            </div>
            <h4 className="item-name-slider mt-3 mb-0">ISABEELA</h4>
            <span className="item-post-slider">designer</span>
          </div>
          <div className="item item-slider-about">
            <div className="item-image-div-about">
              <img src="/images/lily.png" className="center-image" />
            </div>
            <h4 className="item-name-slider mt-3 mb-0">LILY</h4>
            <span className="item-post-slider">designer</span>
          </div>
          <div className="item item-slider-about">
            <div className="item-image-div-about">
              <img src="/images/jack.png" className="center-image" />
            </div>
            <h4 className="item-name-slider mt-3 mb-0">JACK JOHN</h4>
            <span className="item-post-slider">designer</span>
          </div>

          <div className="item item-slider-about">
            <div className="item-image-div-about">
              <img src="/images/john.png" className="center-image" />
            </div>
            <h4 className="item-name-slider mt-3 mb-0">KRISTA JOHN</h4>
            <span className="item-post-slider">designer</span>
          </div>

          <div className="item item-slider-about">
            <div className="item-image-div-about">
              <img src="/images/isbella.png" className="center-image" />
            </div>
            <h4 className="item-name-slider mt-3 mb-0">ISABEELA</h4>
            <span className="item-post-slider">designer</span>
          </div>

          <div className="item item-slider-about">
            <div className="item-image-div-about">
              <img src="/images/lily.png" className="center-image" />
            </div>
            <h4 className="item-name-slider mt-3 mb-0">LILY</h4>
            <span className="item-post-slider">designer</span>
          </div>

          <div className="item item-slider-about">
            <div className="item-image-div-about">
              <img src="/images/jack.png" className="center-image" />
            </div>
            <h4 className="item-name-slider mt-3 mb-0">JACK JOHN</h4>
            <span className="item-post-slider">designer</span>
          </div>

          <div className="item item-slider-about">
            <div className="item-image-div-about">
              <img src="/images/john.png" className="center-image" />
            </div>
            <h4 className="item-name-slider mt-3 mb-0">KRISTA JOHN</h4>
            <span className="item-post-slider">designer</span>
          </div>

          <div className="item item-slider-about">
            <div className="item-image-div-about">
              <img src="/images/isbella.png" className="center-image" />
            </div>
            <h4 className="item-name-slider mt-3 mb-0">ISABEELA</h4>
            <span className="item-post-slider">designer</span>
          </div>

          <div className="item item-slider-about">
            <div className="item-image-div-about">
              <img src="/images/lily.png" className="center-image" />
            </div>
            <h4 className="item-name-slider mt-3 mb-0">LILY</h4>
            <span className="item-post-slider">designer</span>
          </div>

          <div className="item item-slider-about">
            <div className="item-image-div-about">
              <img src="/images/jack.png" className="center-image" />
            </div>
            <h4 className="item-name-slider mt-3 mb-0">JACK JOHN</h4>
            <span className="item-post-slider">designer</span>
          </div>




        </div>

      </div>
    </div>
  </div>
    </>
  )
}

export default About