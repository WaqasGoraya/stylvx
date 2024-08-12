import InnerBanner from "../components/InnerBanner/InnerBanner"

const Faqs = () => {
  return (
    <>
    <InnerBanner title="Faq" />
          <div className="container">
    <div className="headings my-5">
      <h3 className="ourtxt">FREQUENTLY ASKED <span className="colltxt">QUESTIONS</span></h3>
    </div>
    <div className="mt-5 faq-main-collapse">
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="faq-collapse-heading mb-0">
            WHAT IS YOUR RETURN POLICY?
          </h4>
          <p className="faq-p-para mb-0 d-flex align-items-center justify-content-end">
            <a className="btn p-0 mt-0" data-bs-toggle="collapse" href="#collapseExample1" id="collapseButton1"
              onClick="toggleIcons('plusIcon1', 'minusIcon1')" role="button" aria-expanded="false"
              aria-controls="collapseExample1">
              <img className="plus-img" id="plusIcon1" src="./images/plus.png" width="30px" />
              <img className="plus-img" id="minusIcon1" src="./images/minus.png" width="30px"
                style={{display: 'none'}} />
            </a>
          </p>
        </div>
      </div>
      <div className="collapse" id="collapseExample1">
        <hr />
        <div className="card card-body show" id="collapsibleParagraph1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.
        </div>
      </div>
    </div>
    <br />
    <div className="faq-main-collapse">
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="faq-collapse-heading mb-0">
            WHEN WILL MY ORDER SHIP?
          </h4>
          <p className="faq-p-para mb-0 d-flex align-items-center justify-content-end">
            <a className="btn p-0 mt-0 p-0" data-bs-toggle="collapse" href="#collapseExample2" id="collapseButton2"
              onClick="toggleIcons('plusIcon2', 'minusIcon2')" role="button" aria-expanded="false"
              aria-controls="collapseExample2">
              <img className="plus-img" id="plusIcon2" src="./images/plus.png" width="30px" />
              <img className="plus-img" id="minusIcon2" src="./images/minus.png" width="30px"
                style={{display: 'none'}} />
            </a>
          </p>
        </div>
      </div>
      <div className="collapse" id="collapseExample2">
       <hr />
        <div className="card card-body show" id="collapsibleParagraph2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.
        </div>
      </div>
    </div>
    <br />
    <div className="faq-main-collapse">
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="faq-collapse-heading mb-0">
            WHAT FORMS OF PAYMENT DO YOU ACCEPT?
          </h4>
          <p className="faq-p-para mb-0 d-flex align-items-center justify-content-end">
            <a className="btn p-0 mt-0" data-bs-toggle="collapse" href="#collapseExample3" id="collapseButton3"
              onClick="toggleIcons('plusIcon3', 'minusIcon3')" role="button" aria-expanded="false"
              aria-controls="collapseExample3">
              <img className="plus-img" id="plusIcon3" src="./images/plus.png" width="30px" />
              <img className="plus-img" id="minusIcon3" src="./images/minus.png" width="30px"
                style={{display: 'none'}} />
            </a>
          </p>
        </div>
      </div>
      <div className="collapse" id="collapseExample3">
       <hr />
        <div className="card card-body show" id="collapsibleParagraph2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.
        </div>
      </div>
    </div>
    <br />
    <div className="faq-main-collapse">
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="faq-collapse-heading mb-0">
            HOW DO I CREATE AN ACCOUNT?
          </h4>
          <p className="faq-p-para mb-0 d-flex align-items-center justify-content-end">
            <a className="btn p-0 mt-0" data-bs-toggle="collapse" href="#collapseExample4" id="collapseButton4"
              onClick="toggleIcons('plusIcon4', 'minusIcon4')" role="button" aria-expanded="false"
              aria-controls="collapseExample4">
              <img className="plus-img" id="plusIcon4" src="./images/plus.png" width="30px" />
              <img className="plus-img" id="minusIcon4" src="./images/minus.png" width="30px"
                style={{display: 'none'}} />
            </a>
          </p>
        </div>
      </div>
      <div className="collapse" id="collapseExample4">
       <hr />
        <div className="card card-body show" id="collapsibleParagraph2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.
        </div>
      </div>
    </div>
    <br />
    <div className="faq-main-collapse">
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="faq-collapse-heading mb-0">
            DO YOU PRICE MATCH OR OFFER PRICE ADJUSTMENTS?
          </h4>
          <p className="faq-p-para mb-0 d-flex align-items-center justify-content-end">
            <a className="btn p-0 mt-0" data-bs-toggle="collapse" href="#collapseExample5" id="collapseButton5"
              onClick="toggleIcons('plusIcon5', 'minusIcon5')" role="button" aria-expanded="false"
              aria-controls="collapseExample5">
              <img className="plus-img" id="plusIcon5" src="./images/plus.png" width="30px" />
              <img className="plus-img" id="minusIcon5" src="./images/minus.png" width="30px"
                style={{display: 'none'}} />
            </a>
          </p>
        </div>
      </div>
      <div className="collapse" id="collapseExample5">
       <hr />
        <div className="card card-body show" id="collapsibleParagraph2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.
        </div>
      </div>
    </div>
    <br />
    <div className="faq-main-collapse">
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="faq-collapse-heading mb-0">
            WHAT IF THE ITEM I WANT IS OUT OF STOCK?
          </h4>
          <p className="faq-p-para mb-0 d-flex align-items-center justify-content-end">
            <a className="btn p-0 mt-0" data-bs-toggle="collapse" href="#collapseExample6" id="collapseButton6"
              onClick="toggleIcons('plusIcon6', 'minusIcon6')" role="button" aria-expanded="false"
              aria-controls="collapseExample6">
              <img className="plus-img" id="plusIcon6" src="./images/plus.png" width="30px" />
              <img className="plus-img" id="minusIcon6" src="./images/minus.png" width="30px"
                style={{display: 'none'}} />
            </a>
          </p>
        </div>
      </div>
      <div className="collapse" id="collapseExample6">
       <hr />
        <div className="card card-body show" id="collapsibleParagraph6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.
        </div>
      </div>
    </div>
    <br />
    <div className="faq-main-collapse">
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="faq-collapse-heading mb-0">
            WHAT DO THE SPECIAL ORDER STATUSES MEAN?
          </h4>
          <p className="faq-p-para mb-0 d-flex align-items-center justify-content-end">
            <a className="btn p-0 mt-0" data-bs-toggle="collapse" href="#collapseExample7" id="collapseButton7"
              onClick="toggleIcons('plusIcon7', 'minusIcon7')" role="button" aria-expanded="false"
              aria-controls="collapseExample7">
              <img className="plus-img" id="plusIcon7" src="./images/plus.png" width="30px" />
              <img className="plus-img" id="minusIcon7" src="./images/minus.png" width="30px"
                style={{display: 'none'}} />
            </a>
          </p>
        </div>
      </div>
      <div className="collapse" id="collapseExample7">
       <hr />
        <div className="card card-body show" id="collapsibleParagraph7">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.
        </div>
      </div>
    </div>
    <br />
    <div className="faq-main-collapse">
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="faq-collapse-heading mb-0">
            WHEN WILL MY CARD BE CHARGED?
          </h4>
          <p className="faq-p-para mb-0 d-flex align-items-center justify-content-end">
            <a className="btn p-0 mt-0" data-bs-toggle="collapse" href="#collapseExample8" id="collapseButton8"
              onClick="toggleIcons('plusIcon8', 'minusIcon8')" role="button" aria-expanded="false"
              aria-controls="collapseExample8">
              <img className="plus-img" id="plusIcon8" src="./images/plus.png" width="30px" />
              <img className="plus-img" id="minusIcon8" src="./images/minus.png" width="30px"
                style={{display: 'none'}} />
            </a>
          </p>
        </div>
      </div>
      <div className="collapse" id="collapseExample8">
       <hr />
        <div className="card card-body show" id="collapsibleParagraph8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.
        </div>
      </div>
    </div>
    <br />
  </div>

  <section className="have-any-q-div">
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-8 offset-md-2">
          <div className="headings text-center my-5">
            <h3 className="ourtxt">HAVE ANY <span className="colltxt">QUESTIONS</span></h3>
          </div>
          <div className="mt-5">
            <form>
              <div className="row">

                <div className="col-md-6 mt-3">

                  <input type="text" className="form-control" placeholder="First name" required />
                </div>
                <div className="col-md-6 mt-3">
                  <input type="email" className="form-control faq-input-email" placeholder="Email Address" required />
                </div>

                <div className="col-md-12">
                  <input type="text" className="form-control mt-3" placeholder="Subject" required />
                </div>

                <div className="col-md-12">
                  <textarea className="form-control mt-3" id="exampleFormControlTextarea1" required placeholder="Message"
                    rows="5"></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <button type="submit" className="btn  btn-primary mt-5 mb-5 modal-btn-login">
                    Send Now
                  </button>
                </div>

              </div>

            </form>
          </div>

        </div>
      </div>
    </div>


  </section>
    </>
  )
}

export default Faqs