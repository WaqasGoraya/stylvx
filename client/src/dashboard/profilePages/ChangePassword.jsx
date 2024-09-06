import React from "react";

const ChangePassword = () => {
  return (
    <>
  <div className="col-lg-9">
          <div className="right-content mt-3 mb-5">
            <div className="user-management text-center">
              <h4 className="p-3 fw-bold text-uppercase">Change password</h4>
              <div className="frm-outer rounded-5 mx-md-5 mx-0">
                <form action="">
                  <div className="row gy-5 justify-content-center align-items-center justify-content-between p-2">
                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                      <label htmlFor="">Old password</label>
                      <input className="w-100 py-2  rounded-3 px-3 form-control" type="password"/>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                      <label htmlFor="">New password</label>
                      <input className="w-100 py-2  rounded-3 px-3 form-control" type="password"/>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                      <label htmlFor="">Confirm New password</label>
                      <input className="w-100 py-2  rounded-3 px-3 form-control" type="password" />
                    </div>
                    <div className="user-detail-submit-button text-center py-5">
                      <button className="bg-black   px-5 py-2 text-white">Submit</button>
                    </div>
                    </div>
                </form>
                <div>
                </div>
              </div>
            </div>

          </div>
        </div>
    </>
  );
};

export default ChangePassword;
