const Footer = () => {
  return (
    <>
      <div className="bottom-div-social">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="">
            <h3 className="share-signup mt-4">SHARE</h3>
            <ul className="d-flex gap-3 list-unstyled justify-content-center mt-4">
              <li>
                <a href="#">
                  <div className="div-icon-fa">
                    <img src="/images/facebook.png" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="div-icon-insta">
                    <img src="/images/insta.png" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="div-icon-insta">
                    <img src="/images/linkdin copy.png" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="div-icon-insta">
                    <img src="/images/x.png" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer-sec">
    <div className="container-fluid background-div">
      <h2 className="text-center text-white pt-5 substxt">BE FIRST TO KNOW</h2>
      <div className="search-sec position-relative mt-3">
        <form action="">
          <input type="email" className="form-control" placeholder="Enter your email address" required="" />
        </form>
        <button className="footerbtn">Subscribe</button>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-10 mt-4 mb-4">
            <div className="p-0">
              <hr className="hrfooter" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="box text-white">
              <h4>Information</h4>
              <div className="d-flex footer-div-col">
                <div className="box1-footer">
                  <ul className="p-0 footer-ultxt">
                    <li><a href="./about.html"> <img src="/images/footervector.png" height="11" /> <span>About Us</span></a>
                    </li>
                    <li><a href="./ourpartner.html"> <img src="/images/footervector.png" height="11" /> <span>Partner</span></a>
                    </li>
                  </ul>
                  <h5>Let’s Connect</h5>
                  <ul className="d-flex gap-2 p-0 footer-ulsocial">
                    <li><a href="#"><img src="/images/footerfacebookicon.png" height="40" /></a></li>
                    <li><a href="#"><img src="/images/footerinstaicon.png" height="40" /></a></li>
                    <li><a href="#"><img src="/images/footerlinkdinicon.png" height="40" /></a></li>
                    <li><a href="#"><img src="/images/footertwittericon.png" height="40" /></a></li>
                  </ul>
                </div>
                <div className="vertical-line"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="box text-white">
              <h4>Customer Care</h4>
              <div className="d-flex footer-div-col">
                <div className="box1-footer">
                  <ul className="p-0 footer-ultxt">
                    <li><a href="faq.html"><img src="/images/footervector.png" height="11" /> <span>FAQ</span></a></li>
                    <li><a href="contactus.html"><img src="/images/footervector.png" height="11" /> <span>Contact
                          Us</span></a></li>
                    <li><a href="#"><img src="/images/footervector.png" height="11" /> <span>Feedback</span></a>
                    </li>
                  </ul>
                </div>
                <div className="vertical-line"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="box text-white">
              <h4>Legal</h4>
              <div className="d-flex footer-div-col">
                <div className="box1-footer">
                  <ul className="p-0 footer-ultxt">
                    <li><a href="./termsofuse.html"><img src="/images/footervector.png" height="11" /> <span>Terms of
                          Use</span></a></li>
                    <li><a href="./privacypolicy.html"><img src="/images/footervector.png" height="11" /> <span>Privacy
                          Policy</span></a></li>
                    <li><a href="./cookiepolicy.html"><img src="/images/footervector.png" height="11" /> <span>Cookie
                          Policy</span></a></li>
                    <li><a href="./cookiesetting.html"><img src="/images/footervector.png" height="11" /> <span>Cookie</span></a>
                    </li>
                    <li><a href="#"><img src="/images/footervector.png" height="11" /> <span>Setting</span></a>
                    </li>
                  </ul>
                </div>
                <div className="vertical-line"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="box text-white">
              <h4>International</h4>
              <div className="box1-footer">
                <ul className="p-0 footer-ultxt">
                  <li><a href="#"><img src="/images/footervector.png" height="11" /> <span>STYLVIX - AU</span></a>
                  </li>
                  <li><a href="#"><img src="/images/footervector.png" height="11" /> <span>STYLVIX - CA</span></a>
                  </li>
                  <li><a href="#"><img src="/images/footervector.png" height="11" /> <span>STYLVIX - NZ</span></a>
                  </li>
                  <li><a href="#"><img src="/images/footervector.png" height="11" /> <span>STYLVIX - UK</span></a>
                  </li>
                  <li><a href="#"><img src="/images/footervector.png" height="11" /> <span>STYLVIX - US</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container d-flex footerbottomdiv">
      <p className="footerpara1">© Copyright 2024 STYLVIX. All rights reserved</p>
      <p className="footerpara1">Designed &amp; Developed by LEADconcept</p>
    </div>
  </footer>
    </>
  )
}

export default Footer