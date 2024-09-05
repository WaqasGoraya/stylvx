import React from 'react'

const UserDashboard = () => {
  return (
    <>
        <div className="col-lg-9">
          <div className="right-content mt-3 mb-5">
            <div className="user-management text-center">
              <div className="profileimgage-outer p-3 position-relative">
                <img className="img-fluid" src="/images/change-profile-img.png" alt="" />
                <div className="upload-image-outer position-absolute mb-3">
                  <input className="file-input" type="file" id="formFile" />
                  <label for="formFile" className="file-label">
                    <img className="w-100" src="/images/image-upload-icon.png" alt="Upload Icon" />
                  </label>
                </div>

              </div>
              <div className="frm-outer rounded-5 mx-md-5 mx-0">
                <form action="">
                  <div className="row gy-5 justify-content-center align-items-center justify-content-between p-2">
                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                      <label for="">FirstName</label>
                      <input className="w-100 py-2 border-0 rounded-3 px-3" type="text" />
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                      <label for="">LastName</label>
                      <input className="w-100 py-2 border-0 rounded-3 px-3" type="text" />
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                      <label for="">Email ID</label>
                      <input className="w-100 py-2 border-0 rounded-3 px-3" type="email" />
                    </div>
                  </div>
                  <div className="user-detail-submit-button text-center py-5">
                    <button className="bg-black border-0  px-5 py-2 text-white">Submit</button>
                  </div>
                </form>
                <div>
                </div>
              </div>
            </div>

          </div>
        </div>
    </>
  )
}

export default UserDashboard