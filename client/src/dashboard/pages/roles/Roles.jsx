import './Roles.css'

const Roles = () => {
  return (
    <>
          <div className="col-lg-9">
          <div className="role-permission-heading p-3">
            <h6>Role and Permissions </h6>
          </div>
          <div className="py-2">
            <div className="Role-permission-button rounded-3 text-center py-4">
              <ul className="nav nav-pills mb-3 gap-2 justify-content-center" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active px-4 py-0 border-2" id="pills-home-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                    aria-selected="true">Role</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link border-1 px-4 py-0 border-2" id="pills-profile-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                    aria-selected="false">Permission</button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div className="search-role py-2">
                    <input className="bg-transparent form-control px-2 py-1" placeholder="Search Roles by Titles, Team"
                      type="search"/>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="role-card-outer p-3 rounded-4 border mx-4 mt-4 mb-2">
                        <div className="role-card-text-img d-flex justify-content-between align-items-center pb-2">
                          <h5 className="fw-bold  text-uppercase">lorem ipsum</h5>
                          <div className="role-card-img">
                            <img src="/images/role-card-img.png" alt=""/>
                          </div>
                        </div>
                        <div className="role-card-detail">
                          <p className="text-start">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                        <div className="role-card-footer d-flex flex-row align-items-center justify-content-start gap-3">
                          <div className="card-footer-img-outer">
                            <img src="/images/role-card-footer-img.png" alt=""/>
                          </div>
                          <div className="role-card-footer-heading text-start">
                            <h5 className="fw-bold text-uppercase">james marry</h5>
                            <h6 className="text-uppercase">manager</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="role-card-outer p-3 rounded-4 border mx-4 mt-4 mb-2">
                        <div className="role-card-text-img d-flex justify-content-between align-items-center pb-2">
                          <h5 className="fw-bold  text-uppercase">lorem ipsum</h5>
                          <div className="role-card-img">
                            <img src="/images/role-card-img.png" alt=""/>
                          </div>
                        </div>
                        <div className="role-card-detail">
                          <p className="text-start">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                        <div className="role-card-footer d-flex flex-row align-items-center justify-content-start gap-3">
                          <div className="card-footer-img-outer">
                            <img src="/images/role-card-footer-img.png" alt=""/>
                          </div>
                          <div className="role-card-footer-heading text-start">
                            <h5 className="fw-bold text-uppercase">james marry</h5>
                            <h6 className="text-uppercase">manager</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="role-card-outer p-3 rounded-4 border mx-4 mt-4 mb-2">
                        <div className="role-card-text-img d-flex justify-content-between align-items-center pb-2">
                          <h5 className="fw-bold  text-uppercase">lorem ipsum</h5>
                          <div className="role-card-img">
                            <img src="/images/role-card-img.png" alt=""/>
                          </div>
                        </div>
                        <div className="role-card-detail">
                          <p className="text-start">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                        <div className="role-card-footer d-flex flex-row align-items-center justify-content-start gap-3">
                          <div className="card-footer-img-outer">
                            <img src="/images/role-card-footer-img.png" alt=""/>
                          </div>
                          <div className="role-card-footer-heading text-start">
                            <h5 className="fw-bold text-uppercase">james marry</h5>
                            <h6 className="text-uppercase">manager</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="role-card-outer p-3 rounded-4 border mx-4 mt-4 mb-2">
                        <div className="role-card-text-img d-flex justify-content-between align-items-center pb-2">
                          <h5 className="fw-bold  text-uppercase">lorem ipsum</h5>
                          <div className="role-card-img">
                            <img src="/images/role-card-img.png" alt=""/>
                          </div>
                        </div>
                        <div className="role-card-detail">
                          <p className="text-start">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                        <div className="role-card-footer d-flex flex-row align-items-center justify-content-start gap-3">
                          <div className="card-footer-img-outer">
                            <img src="/images/role-card-footer-img.png" alt=""/>
                          </div>
                          <div className="role-card-footer-heading text-start">
                            <h5 className="fw-bold text-uppercase">james marry</h5>
                            <h6 className="text-uppercase">manager</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div className="owner-admin px-4 py-4 text-start">
                    <h6>OWNER<span> (ADMIN)</span></h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. </p>
                  </div>
                  <div className="set-permission px-4 py-4 text-start">
                    <h6>SET permissions </h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. </p>
                  </div>
                 
                  <div className="text-start manager-access mx-4 my-3 border-3 rounded-4 p-4">
                    <div className="manage-access-heading-with-toogle d-flex flex-row flex-wrap justify-content-between align-items-center">
                      <h6 className="mb-0 fw-bold text-uppercase">manager access</h6>
                      <div className="form-check form-switch d-flex align-items-center justify-content-between gap-3 mt-3 mt-sm-0 ">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label fw-bold" htmlFor="flexSwitchCheckDefault">Enable All</label>
                      </div>

                    </div>
                    <div className="permission-button d-flex flex-row flex-wrap align-items-center justify-content-start justify-sm-content-center pt-3">
                      <div>
                        <div className="form-check form-switch d-flex align-items-center justify-content-center justify-md-content-between gap-4">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Lorem</label>
                        </div>
                        <div className="form-check form-switch d-flex align-items-center justify-content-between gap-4">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Lorem</label>
                        </div>
                      </div>
                      <div>
                        <div className="form-check form-switch d-flex align-items-center justify-content-between  gap-4">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Lorem</label>
                        </div>
                        <div className="form-check form-switch d-flex align-items-center justify-content-between gap-4">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Lorem</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
    </>
  )
}

export default Roles