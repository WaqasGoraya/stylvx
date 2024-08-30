import { useState } from "react";

const RoleModal = ({ close }) => {
  const handleOutsideClick = (e) => {
    if (e.target.className.includes("main-modal")) {
      close();
    }
  };

  return (
    <>
      <div
        className="modal fade main-modal"
        id="RoleModal"
        style={{ display: "block" }}
        onClick={handleOutsideClick} // Attach click event here
      >
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header bg-light">
              <h4 className="modal-title">Add New Role</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={close}
              ></button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <div className="py-3 text-center">
                <form action="">
                  <div className="row gy-4 justify-content-center align-items-center justify-content-between p-2">
                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start">
                      <label htmlFor="">Name</label>
                      <input
                        className="form-control w-100 py-2 rounded-3 px-3"
                        type="text"
                      />
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start">
                      <label htmlFor="">Permission</label>
                      <select
                        className="selectpicker w-100"
                        multiple
                        aria-label="Default select example"
                        data-live-search="true"
                      >
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                      </select>
                    </div>
                  </div>
                  <div className="user-detail-submit-button text-center py-5">
                    <button className="bg-black border-0  px-5 py-2 text-white">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* <!-- Modal footer --> */}
            <div className="modal-footer bg-light">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={close}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoleModal;
