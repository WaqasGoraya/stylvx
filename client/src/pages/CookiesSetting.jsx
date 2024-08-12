import InnerBanner from "../components/InnerBanner/InnerBanner"

const CookiesSetting = () => {
  return (
    <>
    <InnerBanner title="Cookies Setting"/>
    <div className="container text-center text-md-start">
    <div className="row">
      <div className="col">
        <div className="mt-3 mt-md-5">
          <h5 className="txt-privacy-heading">Your Cookie Settings</h5>
          <p className="para-privacy-policy mb-4">
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
          <form>
            <div className="d-flex">
              <div>
                <h5 className="txt-privacy-heading">Essential Cookies</h5>
                <p className="para-privacy-policy mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="toggle-switch-cookies">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked
                  />
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <h5 className="txt-privacy-heading">Analytics Cookies</h5>
                <p className="para-privacy-policy mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="toggle-switch-cookies">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked
                  />
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <h5 className="txt-privacy-heading">Advertising Cookies</h5>
                <p className="para-privacy-policy mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="toggle-switch-cookies">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked
                  />
                </div>
              </div>
            </div>
            <div className="btn-cookie-save mt-1 mb-4">
            <button type="submit" className="btn btn-primary modal-btn-login">
              Save
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default CookiesSetting