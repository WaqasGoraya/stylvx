import './Dashboard.css'

const AdminDashboard = () => {
  return (
    <>
       <div className="col-lg-9">
          <div className="right-content mt-3 mb-5">
            <div className="row gy-3">
              <div className="col-lg-4">
                <div className="latest-visitors">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="grey-color">Latest Visitors</span>
                      <h3 className="fw-bold mt-3">89,000</h3>
                    </div>
                    <img className="img-fluid" src="/images/latest-visitor-grap.png" width="55px" height="auto" alt="" />
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img className="img-fluid" src="/images/cut-arrow-down.png" alt="" />
                    <span className="ms-2 persent fw-bold">4.3%</span> &nbsp;
                    <p className="grey-color mb-0"> Down from yesterday</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="latest-visitors">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="grey-color">Latest Visitors</span>
                      <h3 className="fw-bold mt-3">10293</h3>
                    </div>
                    <img className="img-fluid" src="/images/latest-items-img.png" width="55px" height="auto" alt="" />
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img className="img-fluid" src="/images/cut-arrow-up.png" alt="" />
                    <span className="ms-2 persent fw-bold">1.3%</span> &nbsp;
                    <p className="grey-color mb-0">Up from past week</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="latest-visitors">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="grey-color">Latest Visitors</span>
                      <h3 className="fw-bold mt-3">40,689</h3>
                    </div>
                    <img className="img-fluid" src="/images/account-user-img.png" width="55px" height="auto" alt="" />
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img className="img-fluid" src="/images/cut-arrow-up.png" alt="" />
                    <span className="ms-2 persent fw-bold">8.5%</span> &nbsp;
                    <p className="grey-color mb-0">Up from yesterday</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                  <div className="main-chart-sec p-3">
                    <div className="d-flex align-items-center justify-content-between">
                    <div>
                    <span className="grey-color fw-normal">Total Revenue</span>
                    <h4  style={{color: "black"}}>$980,273.00</h4>
                  </div>
                  <div className="form-floating position-relative">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                      <option >THIS YEAR</option>
                      <option value="1">2024</option>
                      <option value="2">2023</option>
                      <option value="3">2022</option>
                      <option value="4">2021</option>
                      <option value="5">2020</option>
                    </select>
                    <img className="img-fluid drop-icon" src="/images/dropdown-icon-img.png" alt="" />
                  </div>
                </div>
                    <canvas id="liveTickChart"></canvas>
                  </div>
              </div>
              <div className="col-lg-4">
                <div className="dougnuts-main-sec p-2">
                  <div className="text-center text-lg-start">
                    <h5 className="fw-bold mb-0" style={{color: "black"}}>Customers</h5>
                    <h5 className="grey-color" style={{fontSize: "11px"}}>Information About your Customers</h5>
                  </div>
                <div className="circles-chart d-flex gap-3 flex-lg-nowrap align-items-center justify-content-lg-between justify-content-md-evenly flex-wrap justify-content-center">
                  <div>
                    <canvas id="doughnutsChart1"></canvas>
                    <p>Current Customer</p>
                  </div>
                  <div>
                    <canvas id="doughnutsChart2"></canvas>
                    <p>New Customer</p>
                  </div>
                </div>
                <div className="circles-chart d-flex gap-3 flex-lg-nowrap align-items-center justify-content-lg-between justify-content-md-evenly flex-wrap mt-3 justify-content-center">
                  <div>
                    <canvas id="doughnutsChart3"></canvas>
                    <p>Target Customer</p>
                  </div>
                  <div>
                    <canvas id="doughnutsChart4"></canvas>
                    <p>Retarget Customer</p>
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

export default AdminDashboard