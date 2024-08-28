import './Products.css'

const Products = () => {
  return (
    <>
      <div className="col-lg-9">
          <div className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-sm-between gy-4 pt-5">
            <h5 className="fw-bold text-uppercase">Product Management</h5>
            <div className="position-relative">
            <input className="border-0 rounded-0 border-bottom border border-dark form-control"  type="search" placeholder="Search Products" />
            <span className="position-absolute fa fa-search "></span>
          </div>
          </div>
          <div className="right-content mt-3 mb-5">
            <div className="bg-white user-management">
             <button className="px-3 py-1 border-0  rounded-2 bg-black text-white m-3 fs-6">Add Product</button>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr className="bg-gray">
                      <th>image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><img className="img-fluid me-2" src="/images/product-img.png" width="25px" height="25px" alt=""/> </td>
                      <td>LOREAM IPSUM</td>
                      <td>$600</td>
                      <td><button className="green-btn">Active</button></td>
                      <td><a href="#"><img className="img-fluid me-2" src="/images/bxs_edit.png" width="22px" height="auto" alt=""/></a>
                        <a href="#"><img className="img-fluid" src="/images/delete-icon.png" width="22px" height="auto" alt=""/></a></td>
                    </tr>
                    <tr>
                      <td><img className="img-fluid me-2" src="/images/product-img.png" width="25px" height="25px" alt=""/> </td>
                      <td>LOREAM IPSUM</td>
                      <td>$600</td>
                      <td><button className="golden-btn">Active</button></td>
                      <td><a href="#"><img className="img-fluid me-2" src="/images/bxs_edit.png" width="22px" height="auto" alt=""/></a>
                        <a href="#"><img className="img-fluid" src="/images/delete-icon.png" width="22px" height="auto" alt=""/></a></td>
                    </tr>
                    <tr>
                      <td><img className="img-fluid me-2" src="/images/product-img.png" width="25px" height="25px" alt=""/> </td>
                      <td>LOREAM IPSUM</td>
                      <td>$600</td>
                      <td><button className="dark-red">Active</button></td>
                      <td><a href="#"><img className="img-fluid me-2" src="/images/bxs_edit.png" width="22px" height="auto" alt=""/></a>
                        <a href="#"><img className="img-fluid" src="/images/delete-icon.png" width="22px" height="auto" alt=""/></a></td>
                    </tr>
                    <tr>
                      <td><img className="img-fluid me-2" src="/images/product-img.png" width="25px" height="25px" alt=""/> </td>
                      <td>LOREAM IPSUM</td>
                      <td>$600</td>
                      <td><button className="green-btn">Active</button></td>
                      <td><a href="#"><img className="img-fluid me-2" src="/images/bxs_edit.png" width="22px" height="auto" alt=""/></a>
                        <a href="#"><img className="img-fluid" src="/images/delete-icon.png" width="22px" height="auto" alt=""/></a></td>
                    </tr>
                    <tr>
                      <td><img className="img-fluid me-2" src="/images/product-img.png" width="25px" height="25px" alt=""/> </td>
                      <td>LOREAM IPSUM</td>
                      <td>$600</td>
                      <td><button className="golden-btn">Active</button></td>
                      <td><a href="#"><img className="img-fluid me-2" src="/images/bxs_edit.png" width="22px" height="auto" alt=""/></a>
                        <a href="#"><img className="img-fluid" src="/images/delete-icon.png" width="22px" height="auto" alt=""/></a></td>
                    </tr>
                    <tr>
                      <td><img className="img-fluid me-2" src="/images/product-img.png" width="25px" height="25px" alt=""/> </td>
                      <td>LOREAM IPSUM</td>
                      <td>$600</td>
                      <td><button className="dark-red">Active</button></td>
                      <td><a href="#"><img className="img-fluid me-2" src="/images/bxs_edit.png" width="22px" height="auto" alt=""/></a>
                        <a href="#"><img className="img-fluid" src="/images/delete-icon.png" width="22px" height="auto" alt=""/></a></td>
                    </tr>
                    <tr>
                      <td><img className="img-fluid me-2" src="/images/product-img.png" width="25px" height="25px" alt=""/> </td>
                      <td>LOREAM IPSUM</td>
                      <td>$600</td>
                      <td><button className="green-btn">Active</button></td>
                      <td><a href="#"><img className="img-fluid me-2" src="/images/bxs_edit.png" width="22px" height="auto" alt=""/></a>
                        <a href="#"><img className="img-fluid" src="/images/delete-icon.png" width="22px" height="auto" alt=""/></a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Products