import InnerBanner from "../components/InnerBanner/InnerBanner"

const ContactUs = () => {
  return (
    <>
    <InnerBanner title="Contact Us"/>
        <div className="contact-top-div">

<div className="container">
      <div className="text-center pt-3">
        <h1 className="mt-3 contact-heading-main">GET IN TOUCH</h1>
        <p className="contact-para-top mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </p>
  </div>
</div>

<div className="container">
  <div className="row gy-4">
    <div className="col-md-4">
      <div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" aria-describedby="nameHelp" placeholder="Name"  />
          </div>
          <div className="form-group">
            <input type="email" className="form-control mt-3" aria-describedby="emailHelp" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control mt-3" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea className="form-control mt-3" id="Textarea1" required placeholder="Message" rows="5"></textarea>
          </div>
          <div className="contact-submit-btn py-4">
          <button type="submit" className="btn btn-primary modal-btn-login">
          Submit
        </button>
        </div>
        </form>
      </div>
    </div>
    <div className="col-md-8">
      <div className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14159906.420505691!2d58.3546319874604!3d29.950436907162743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1722344656981!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</div>

</div>

<div className="mt-5 mb-5">
<div className="container">
    <div className="row">
        <div className="col-md-4 contact-div-cols">
            <a href="mailto:" className="text-decoration-none">
            <div className="contact-parent-div d-flex justify-content-center align-items-center ">
                <div className="contact-child1-div d-flex justify-content-center align-items-center gap-3">
                      <img src="/images/contact-email.png" className="img-fluid email-img-contact" width="68" />
                     <div>
                        <h4 className="conatct-email-txt1">Email</h4>
                        <h6 className="contact-email-info">info@stylvix.net</h6>
                        </div>
                </div>
                </div>
                </a>
                </div>
                <div className="col-md-4 contact-div-cols">
                    <a href="callto:" className="text-decoration-none">
                    <div className="contact-parent-div d-flex justify-content-center align-items-center">
                        <div className="contact-child1-div d-flex justify-content-center align-items-center gap-3">
                              <img src="/images/contact-phone.png" className="img-fluid email-img-contact" width="68"/>
                             <div>
                                <h4 className="conatct-email-txt1">PHONE</h4>
                                <h6 className="contact-email-info">000 123 34567</h6>
                                </div>
                        </div>
                        </div>
                    </a>
                        </div>
                        <div className="col-md-4 contact-div-cols">
                              <a href="#" className="text-decoration-none">
                            <div className="contact-parent-div d-flex justify-content-center align-items-center ">
                                <div className="contact-child1-div d-flex justify-content-center align-items-center gap-3">
                                      <img src="/images/location-1.png" className="img-fluid email-img-contact" width="68" />
                                     <div>
                                        <h4 className="conatct-email-txt1">LOCATION</h4>
                                        <h6 className="contact-email-info">Eminent, Inc.12889 
                                            Moore St. Cerritos, CA 90703</h6>
                                        </div>
                                </div>
                                </div>
                            </a>
                                </div>
            </div>
        </div>

</div>
    </>
  )
}

export default ContactUs