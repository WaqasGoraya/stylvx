import InnerBannerWhite from "../components/InnerBanner/InnerBannerWhite"
const Collections = () => {
  return (
    <>
        <section className="collection-section container-fluid mt-5 mb-5">
    <div className="collection-section-inner container text-center">
       <InnerBannerWhite title= "Latest Collection" />
        <div
            className="row upload-collection-section flex-row justify-content-center align-items-center  mt-4 p-2">
            <div className="upload-photo-outer p-1">
                <input type="file" id="fileInput" className="custom-file-input d-none" />
                <button type="button"
                    className="custom-file-button  upload-photo-button border-0 d-flex flex-row justify-content-center align-items-center gap-2 p-1">
                    <div className="upload-img">
                        <img src="/images/upload-img.png" alt="" />
                    </div>
                    <span className="text-black fw-bold text-uppercase">upload photo</span>
                </button>
                <span id="fileName" className="file-name"></span>
            </div>
            <div className="create-collection-outer p-1">
                <input type="file" id="fileInput" className="custom-file-input d-none" />
                <button type="button"
                    className="create-collection-button border-0 d-flex flex-row justify-content-center align-items-center gap-2 p-1">
                    <div className="upload-img">
                        <img src="/images/create-collection-logo.png" alt=""/>
                    </div>
                    <span className="text-black fw-bold text-uppercase">Create Collection</span>
                </button>
                <span id="fileName" className="file-name"></span>
            </div>
            <div className="shortby-outer px-2 d-flex flex-row justify-content-between align-items-center gap-2">
                <span className="fw-bold text-uppercase">Sort By</span>
                <div className="short-drobpx d-flex flex-row justify-content-center align-items ">
                    
                    <button className="sortby-btn btn-secondary  dropdown-toggle w-100" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Populer

                        <div className="popular-dropbox-arrow">
                            <img src="/images/right-arrow.png" alt="" />
                        </div>
                        <span></span>
                    </button>


                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
    <div className="container mt-4">
        <div className="row collection-cards-section flex-row align-items-center justify-content-between">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 card-outer-box p-2">
                <div className="collection-card-img">
                    <img className="img-fluid" src="./images/collection-page-imges/col-img-1.png" alt="" />
                </div>
                <div className="collextion-card-desc d-flex flex-column align-items-center justify-content-center">
                    <div className="title text-center mt-3">
                        <span className="text-uppercase fw-bold">Spring Outfits</span>

                        <p className="p-2 fw-700" > Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>

                    </div>
                    <div
                        className="like-share-btns-outer d-flex flex-row justify-content-center align-items-center gap-3 mb-3">
                        <button
                            className="like-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/like.png" alt="img"/>
                            </div>
                            <span className="fw-bold">Like</span>
                        </button>
                        <button
                            className="share-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/share.png   " alt="img"/>
                            </div>
                            <span className="fw-bold">share</span>
                        </button>
                    </div>
                    <button className="view-collection-btn border-0 bg-transparent fw-bold mb-3 p-1">View
                        Collection</button>
                </div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 card-outer-box p-2">
                <div className="collection-card-img">
                    <img className="img-fluid" src="/images/collection-page-imges/col-img-2.png" alt="" />
                </div>
                <div className="collextion-card-desc d-flex flex-column align-items-center justify-content-center">
                    <div className="title text-center mt-3">
                        <span className="text-uppercase fw-bold">Summer Outfits</span>
                        <p className="p-2 fw-700"> Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </div>
                    <div
                        className="like-share-btns-outer d-flex flex-row justify-content-center align-items-center gap-3 mb-3">
                        <button
                            className="like-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/like.png" alt="img"/>
                            </div>
                            <span className="fw-bold">Like</span>
                        </button>
                        <button
                            className="share-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/share.png   " alt="img"/>
                            </div>
                            <span className="fw-bold">share</span>
                        </button>
                    </div>
                    <button className="view-collection-btn border-0 bg-transparent fw-bold mb-3 p-1">View
                        Collection</button>
                </div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 card-outer-box p-2">
                <div className="collection-card-img">
                    <img className="img-fluid" src="./images/collection-page-imges/col-img-3.png" alt="" />
                </div>
                <div className="collextion-card-desc d-flex flex-column align-items-center justify-content-center">
                    <div className="title text-center mt-3">
                        <span className="text-uppercase fw-bold">Autumn Outfits</span>
                        <p className="p-2 fw-700"> Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </div>
                    <div
                        className="like-share-btns-outer d-flex flex-row justify-content-center align-items-center gap-3 mb-3">
                        <button
                            className="like-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/like.png" alt="img"/>
                            </div>
                            <span className="fw-bold">Like</span>
                        </button>
                        <button
                            className="share-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/share.png   " alt="img"/>
                            </div>
                            <span className="fw-bold">share</span>
                        </button>
                    </div>
                    <button className="view-collection-btn border-0 bg-transparent fw-bold mb-3 p-1">View
                        Collection</button>
                </div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 card-outer-box p-2">
                <div className="collection-card-img">
                    <img className="img-fluid" src="./images/collection-page-imges/col-img-4.png" alt="" />
                </div>
                <div className="collextion-card-desc d-flex flex-column align-items-center justify-content-center">
                    <div className="title text-center mt-3">
                        <span className="text-uppercase fw-bold">Winter Outfits</span>
                        <p className="p-2 fw-700"> Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </div>
                    <div
                        className="like-share-btns-outer d-flex flex-row justify-content-center align-items-center gap-3 mb-3">
                        <button
                            className="like-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/like.png" alt="img"/>
                            </div>
                            <span className="fw-bold">Like</span>
                        </button>
                        <button
                            className="share-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/share.png   " alt="img"/>
                            </div>
                            <span className="fw-bold">share</span>
                        </button>
                    </div>
                    <button className="view-collection-btn border-0 bg-transparent fw-bold mb-3 p-1">View
                        Collection</button>
                </div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 card-outer-box p-2">
                <div className="collection-card-img">
                    <img className="img-fluid" src="./images/collection-page-imges/col-img-5.png" alt=""  />
                </div>
                <div className="collextion-card-desc d-flex flex-column align-items-center justify-content-center">
                    <div className="title text-center mt-3">
                        <span className="text-uppercase fw-bold">Street Outlifts</span>
                        <p className="p-2 fw-700"> Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </div>
                    <div
                        className="like-share-btns-outer d-flex flex-row justify-content-center align-items-center gap-3 mb-3">
                        <button
                            className="like-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/like.png" alt="img"/>
                            </div>
                            <span className="fw-bold">Like</span>
                        </button>
                        <button
                            className="share-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/share.png   " alt="img"/>
                            </div>
                            <span className="fw-bold">share</span>
                        </button>
                    </div>
                    <button className="view-collection-btn border-0 bg-transparent fw-bold mb-3 p-1">View
                        Collection</button>
                </div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 card-outer-box p-2">
                <div className="collection-card-img">
                    <img className="img-fluid" src="./images/collection-page-imges/col-img-6.png" alt="" />
                </div>
                <div className="collextion-card-desc d-flex flex-column align-items-center justify-content-center">
                    <div className="title text-center mt-3">
                        <span className="text-uppercase fw-bold">Airport Outfits</span>
                        <p className="p-2 fw-700"> Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </div>
                    <div
                        className="like-share-btns-outer d-flex flex-row justify-content-center align-items-center gap-3 mb-3">
                        <button
                            className="like-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/like.png" alt="img"/>
                            </div>
                            <span className="fw-bold">Like</span>
                        </button>
                        <button
                            className="share-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/share.png   " alt="img"/>
                            </div>
                            <span className="fw-bold">share</span>
                        </button>
                    </div>
                    <button className="view-collection-btn border-0 bg-transparent fw-bold mb-3 p-1">View
                        Collection</button>
                </div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 card-outer-box p-2">
                <div className="collection-card-img">
                    <img className="img-fluid" src="./images/collection-page-imges/col-img-7.png" alt=""  />
                </div>
                <div className="collextion-card-desc d-flex flex-column align-items-center justify-content-center">
                    <div className="title text-center mt-3">
                        <span className="text-uppercase fw-bold">Beach Outfits</span>
                        <p className="p-2 fw-700"> Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </div>
                    <div
                        className="like-share-btns-outer d-flex flex-row justify-content-center align-items-center gap-3 mb-3">
                        <button
                            className="like-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/like.png" alt="img"/>
                            </div>
                            <span className="fw-bold">Like</span>
                        </button>
                        <button
                            className="share-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/share.png   " alt="img"/>
                            </div>
                            <span className="fw-bold">share</span>
                        </button>
                    </div>
                    <button className="view-collection-btn border-0 bg-transparent fw-bold mb-3 p-1">View
                        Collection</button>
                </div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 card-outer-box p-2">
                <div className="collection-card-img">
                    <img className="img-fluid" src="./images/collection-page-imges/col-img-8.png" alt="" />
                </div>
                <div className="collextion-card-desc d-flex flex-column align-items-center justify-content-center">
                    <div className="title text-center mt-3">
                        <span className="text-uppercase fw-bold">Office Outfits</span>
                        <p className="p-2 fw-700"> Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </div>
                    <div
                        className="like-share-btns-outer d-flex flex-row justify-content-center align-items-center gap-3 mb-3">
                        <button
                            className="like-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/like.png" alt="img"/>
                            </div>
                            <span className="fw-bold">Like</span>
                        </button>
                        <button
                            className="share-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/share.png   " alt="img"/>
                            </div>
                            <span className="fw-bold">share</span>
                        </button>
                    </div>
                    <button className="view-collection-btn border-0 bg-transparent fw-bold mb-3 p-1">View
                        Collection</button>
                </div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 card-outer-box p-2">
                <div className="collection-card-img">
                    <img className="img-fluid" src="./images/collection-page-imges/col-img-9.png" alt="" />
                </div>
                <div className="collextion-card-desc d-flex flex-column align-items-center justify-content-center">
                    <div className="title text-center mt-3">
                        <span className="text-uppercase fw-bold">Vacation Styles</span>
                        <p className="p-2 fw-700"> Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </div>
                    <div
                        className="like-share-btns-outer d-flex flex-row justify-content-center align-items-center gap-3 mb-3">
                        <button
                            className="like-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/like.png" alt="img"/>
                            </div>
                            <span className="fw-bold">Like</span>
                        </button>
                        <button
                            className="share-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/share.png   " alt="img"/>
                            </div>
                            <span className="fw-bold">share</span>
                        </button>
                    </div>
                    <button className="view-collection-btn border-0 bg-transparent fw-bold mb-3 p-1">View
                        Collection</button>
                </div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 card-outer-box p-2">
                <div className="collection-card-img">
                    <img className="img-fluid" src="./images/collection-page-imges/col-img-10.png" alt="" />
                </div>
                <div className="collextion-card-desc d-flex flex-column align-items-center justify-content-center">
                    <div className="title text-center mt-3">
                        <span className="text-uppercase fw-bold">Casual Comfort</span>
                        <p className="p-2 fw-700"> Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </div>
                    <div
                        className="like-share-btns-outer d-flex flex-row justify-content-center align-items-center gap-3 mb-3">
                        <button
                            className="like-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/like.png" alt="img"/>
                            </div>
                            <span className="fw-bold">Like</span>
                        </button>
                        <button
                            className="share-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/share.png   " alt="img"/>
                            </div>
                            <span className="fw-bold">share</span>
                        </button>
                    </div>
                    <button className="view-collection-btn border-0 bg-transparent fw-bold mb-3 p-1">View
                        Collection</button>
                </div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 card-outer-box p-2">
                <div className="collection-card-img">
                    <img className="img-fluid" src="./images/collection-page-imges/col-img-11.png" alt="" />
                </div>
                <div className="collextion-card-desc d-flex flex-column align-items-center justify-content-center">
                    <div className="title text-center mt-3">
                        <span className="text-uppercase fw-bold">Date Night Dresses</span>
                        <p className="p-2 fw-700"> Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </div>
                    <div
                        className="like-share-btns-outer d-flex flex-row justify-content-center align-items-center gap-3 mb-3">
                        <button
                            className="like-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/like.png" alt="img"/>
                            </div>
                            <span className="fw-bold">Like</span>
                        </button>
                        <button
                            className="share-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/share.png   " alt="img"/>
                            </div>
                            <span className="fw-bold">share</span>
                        </button>
                    </div>
                    <button className="view-collection-btn border-0 bg-transparent fw-bold mb-3 p-1">View
                        Collection</button>
                </div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 card-outer-box p-2">
                <div className="collection-card-img">
                    <img className="img-fluid" src="./images/collection-page-imges/col-img-12.png" alt="" />
                </div>
                <div className="collextion-card-desc d-flex flex-column align-items-center justify-content-center">
                    <div className="title text-center mt-3">
                        <span className="text-uppercase fw-bold">Party Outfits</span>
                        <p className="p-2 fw-700"> Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </div>
                    <div
                        className="like-share-btns-outer d-flex flex-row justify-content-center align-items-center gap-3 mb-3">
                        <button
                            className="like-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/like.png" alt="img"/>
                            </div>
                            <span className="fw-bold">Like</span>
                        </button>
                        <button
                            className="share-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/share.png" alt="img"/>
                            </div>
                            <span className="fw-bold">share</span>
                        </button>
                    </div>
                    <button className="view-collection-btn border-0 bg-transparent fw-bold mb-3 p-1">View
                        Collection</button>
                </div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 card-outer-box p-2">
                <div className="collection-card-img">
                    <img className="img-fluid" src="./images/collection-page-imges/col-img-13.png" alt="" />
                </div>
                <div className="collextion-card-desc d-flex flex-column align-items-center justify-content-center">
                    <div className="title text-center mt-3">
                        <span className="text-uppercase fw-bold">Business Casual</span>
                        <p className="p-2 fw-700"> Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </div>
                    <div
                        className="like-share-btns-outer d-flex flex-row justify-content-center align-items-center gap-3 mb-3">
                        <button
                            className="like-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/like.png" alt="img"/>
                            </div>
                            <span className="fw-bold">Like</span>
                        </button>
                        <button
                            className="share-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/share.png   " alt="img"/>
                            </div>
                            <span className="fw-bold">share</span>
                        </button>
                    </div>
                    <button className="view-collection-btn border-0 bg-transparent fw-bold mb-3 p-1">View
                        Collection</button>
                </div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 card-outer-box p-2">
                <div className="collection-card-img">
                    <img className="img-fluid" src="./images/collection-page-imges/col-img-14.png" alt="" />
                </div>
                <div className="collextion-card-desc d-flex flex-column align-items-center justify-content-center">
                    <div className="title text-center mt-3">
                        <span className="text-uppercase fw-bold">Wedding Guest Wear</span>
                        <p className="p-2 fw-700"> Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </div>
                    <div
                        className="like-share-btns-outer d-flex flex-row justify-content-center align-items-center gap-3 mb-3">
                        <button
                            className="like-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/like.png" alt="img"/>
                            </div>
                            <span className="fw-bold">Like</span>
                        </button>
                        <button
                            className="share-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/share.png   " alt="img"/>
                            </div>
                            <span className="fw-bold">share</span>
                        </button>
                    </div>
                    <button className="view-collection-btn border-0 bg-transparent fw-bold mb-3 p-1">View
                        Collection</button>
                </div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 card-outer-box p-2">
                <div className="collection-card-img">
                    <img className="img-fluid" src="./images/collection-page-imges/col-img-15.png" alt="" />
                </div>
                <div className="collextion-card-desc d-flex flex-column align-items-center justify-content-center">
                    <div className="title text-center mt-3">
                        <span className="text-uppercase fw-bold">couple outfits</span>
                        <p className="p-2 fw-700"> Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </div>
                    <div
                        className="like-share-btns-outer d-flex flex-row justify-content-center align-items-center gap-3 mb-3">
                        <button
                            className="like-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/like.png" alt="img"/>
                            </div>
                            <span className="fw-bold">Like</span>
                        </button>
                        <button
                            className="share-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/share.png   " alt="img"/>
                            </div>
                            <span className="fw-bold">share</span>
                        </button>
                    </div>
                    <button className="view-collection-btn border-0 bg-transparent fw-bold mb-3 p-1">View
                        Collection</button>
                </div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 card-outer-box p-2">
                <div className="collection-card-img">
                    <img className="img-fluid" src="./images/collection-page-imges/col-img-16.png" alt=""/>
                </div>
                <div className="collextion-card-desc d-flex flex-column align-items-center justify-content-center">
                    <div className="title text-center mt-3">
                        <span className="text-uppercase fw-bold">Marching Outlifts</span>
                        <p className="p-2 fw-700"> Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </div>
                    <div
                        className="like-share-btns-outer d-flex flex-row justify-content-center align-items-center gap-3 mb-3">
                        <button
                            className="like-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/like.png" alt="img"/>
                            </div>
                            <span className="fw-bold">Like</span>
                        </button>
                        <button
                            className="share-btn  bg-transparent p-2 d-flex flex-row justify-content-center align-items-center gap-2">
                            <div className="img-outer">
                                <img src="./images/collection-page-imges/share.png" alt="img"/>
                            </div>
                            <span className="fw-bold">share</span>
                        </button>
                    </div>
                    <button className="view-collection-btn border-0 bg-transparent fw-bold mb-3 p-1">View
                        Collection</button>
                </div>

            </div>

        </div>
    </div>

</section>
    </>
  )
}

export default Collections