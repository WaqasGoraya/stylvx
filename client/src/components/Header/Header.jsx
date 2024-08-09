import { useState } from "react"
import { Link } from "react-router-dom"
import LoginModal from "../../pages/LoginModal"
const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
<header className="header-main">
    <div className="topbar">
      <div className="container">
        <div className="d-flex align-items-center gap-2 gap-md-5 justify-content-center justify-content-lg-end flex-wrap">
          <div className="d-flex align-items-center gap-3">
            <div className="flag-sec">
              <img className="img-fluid me-3" src="/images/Ellipse_14.png" width="22px" height="auto" alt="usFlag" />
            </div>
            <span>AUS</span>
          </div>
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <Link className="text-decoration-none text-white"  to="/register">
              <div className="d-flex align-items-center gap-2">
                <svg width="18" className="user-svg" height="18" viewBox="0 0 22 23" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.25"
                    d="M15.9487 16.4714C15.0394 16.0893 13.907 15.611 13.907 15.2442V12.8449C14.5681 12.3419 15.1048 11.6938 15.4757 10.9505C15.8467 10.2073 16.042 9.38879 16.0465 8.55814V5.34884C16.0465 2.39934 13.6472 0 10.6977 0C7.74817 0 5.34884 2.39934 5.34884 5.34884V8.55814C5.35327 9.38903 5.54849 10.2078 5.91945 10.9513C6.2904 11.6948 6.82718 12.3432 7.48837 12.8464V15.2442C7.48837 15.5896 6.36664 16.0694 5.46651 16.4546C3.28877 17.3853 0 18.7912 0 22.4651V23H21.3953V22.4651C21.3953 18.7668 18.1188 17.3853 15.9487 16.4714Z"
                    fill="white" />
                  <path
                    d="M5.34884 8.40532V5.34884C5.34884 4.64642 5.48719 3.95088 5.75599 3.30193C6.0248 2.65298 6.41879 2.06332 6.91548 1.56664C7.41216 1.06995 8.00181 0.675961 8.65076 0.407156C9.29972 0.138352 9.99526 0 10.6977 0C11.4001 0 12.0956 0.138352 12.7446 0.407156C13.3935 0.675961 13.9832 1.06995 14.4799 1.56664C14.9766 2.06332 15.3706 2.65298 15.6394 3.30193C15.9082 3.95088 16.0465 4.64642 16.0465 5.34884V8.40532C16.0465 10.2239 15.1403 11.8286 13.7542 12.7959V14.2478C13.7543 14.5532 13.846 14.8515 14.0174 15.1043C14.1887 15.357 14.4318 15.5527 14.7154 15.666L17.1392 16.6364C18.3956 17.1391 19.4727 18.0068 20.2313 19.1274C20.9899 20.2481 21.3954 21.5703 21.3953 22.9236H7.73727e-10C-2.04517e-05 21.5703 0.405436 20.2481 1.16407 19.1274C1.9227 18.0068 2.9997 17.1391 4.25615 16.6364L6.67993 15.666C6.96352 15.5527 7.20665 15.357 7.37799 15.1043C7.54933 14.8515 7.641 14.5532 7.6412 14.2478V12.7959C6.93306 12.3035 6.35468 11.6469 5.95549 10.8823C5.55629 10.1177 5.34814 9.26785 5.34884 8.40532Z"
                    fill="white" />
                </svg>
                <span>REGISTER</span>
              </div>
            </Link>
            <div className="btn-sec">
              <button  className="sign-in-btn" onClick={handleShowModal}>
                <svg className="sign-in-svg" width="20" height="20" viewBox="0 0 27 23" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.7394 11.5C20.7394 11.8115 20.6322 12.081 20.4178 12.3086L11.2095 22.0836C10.9951 22.3112 10.7412 22.425 10.4478 22.425C10.1544 22.425 9.90044 22.3112 9.68604 22.0836C9.47163 21.856 9.36442 21.5865 9.36442 21.275V16.1H1.78109C1.48768 16.1 1.23378 15.9862 1.01937 15.7586C0.804959 15.531 0.697754 15.2615 0.697754 14.95V8.05C0.697754 7.73854 0.804959 7.46901 1.01937 7.24141C1.23378 7.0138 1.48768 6.9 1.78109 6.9H9.36442V1.725C9.36442 1.41354 9.47163 1.14401 9.68604 0.916406C9.90044 0.688802 10.1544 0.575 10.4478 0.575C10.7412 0.575 10.9951 0.688802 11.2095 0.916406L20.4178 10.6914C20.6322 10.919 20.7394 11.1885 20.7394 11.5ZM26.6978 5.175V17.825C26.6978 19.2505 26.221 20.4694 25.2674 21.4816C24.3139 22.4939 23.1656 23 21.8228 23H16.4061C16.2594 23 16.1324 22.9431 16.0252 22.8293C15.918 22.7155 15.8644 22.5807 15.8644 22.425C15.8644 22.3771 15.8588 22.2573 15.8475 22.0656C15.8362 21.874 15.8334 21.7152 15.839 21.5895C15.8447 21.4637 15.8616 21.3229 15.8898 21.1672C15.918 21.0115 15.9744 20.8947 16.0591 20.8168C16.1437 20.7389 16.2594 20.7 16.4061 20.7H21.8228C22.5675 20.7 23.2051 20.4185 23.7355 19.8555C24.2659 19.2924 24.5311 18.6156 24.5311 17.825V5.175C24.5311 4.38438 24.2659 3.70755 23.7355 3.14453C23.2051 2.58151 22.5675 2.3 21.8228 2.3H16.5415L16.3468 2.28203L16.1522 2.22812L16.0168 2.1293L15.8983 1.96758L15.8644 1.725C15.8644 1.67708 15.8588 1.55729 15.8475 1.36563C15.8362 1.17396 15.8334 1.01523 15.839 0.889453C15.8447 0.763672 15.8616 0.622917 15.8898 0.467187C15.918 0.311458 15.9744 0.194661 16.0591 0.116797C16.1437 0.0389323 16.2594 0 16.4061 0H21.8228C23.1656 0 24.3139 0.50612 25.2674 1.51836C26.221 2.5306 26.6978 3.74948 26.6978 5.175Z"
                    fill="white" />
                </svg>
                SIGN IN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="navigation-bar-frist mt-3 d-none d-lg-block">
      <div className="container">
        <div className="main-sec d-flex align-items-center justify-content-between">
          <ul className="left-links list-unstyled d-flex align-items-center gap-4">
            <li className="nav-item">
              <a className="nav-link" href="women.html">womens</a>
            </li>
            <li>
              <a className="text-decoration-none text-dark" href="#">Mens</a>
            </li>
            <li>
              <a className="text-decoration-none text-dark" href="#">Kids</a>
            </li>
            <li>
              <a className="text-decoration-none text-dark" href="#">Style Hub</a>
            </li>
          </ul>
          <div className="logo-sec">
            <Link to="/">
              <svg width="220" height="30" viewBox="0 0 253 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24.5573 0.268228L24.8724 13.2161H23.6979C23.1441 9.96962 21.7786 7.36285 19.6016 5.39583C17.4436 3.40972 15.1042 2.41667 12.5833 2.41667C10.6354 2.41667 9.08854 2.94184 7.94271 3.99219C6.81597 5.02344 6.2526 6.21701 6.2526 7.57292C6.2526 8.43229 6.45313 9.19618 6.85417 9.86458C7.40799 10.7622 8.29601 11.6502 9.51823 12.5286C10.4158 13.1589 12.4878 14.276 15.7344 15.8802C20.2795 18.1146 23.3446 20.2248 24.9297 22.2109C26.4957 24.197 27.2786 26.4696 27.2786 29.0286C27.2786 32.2752 26.0087 35.0729 23.4688 37.4219C20.9479 39.7517 17.7396 40.9167 13.8438 40.9167C12.6215 40.9167 11.4661 40.7925 10.3776 40.5443C9.28906 40.296 7.92361 39.8281 6.28125 39.1406C5.36458 38.7587 4.61024 38.5677 4.01823 38.5677C3.5217 38.5677 2.99653 38.7587 2.44271 39.1406C1.88889 39.5226 1.4401 40.105 1.09635 40.888H0.0364584V26.2214H1.09635C1.93663 30.3464 3.55035 33.4974 5.9375 35.6745C8.34375 37.8325 10.9314 38.9115 13.7005 38.9115C15.8394 38.9115 17.5391 38.329 18.7995 37.1641C20.079 35.9991 20.7188 34.6432 20.7188 33.0964C20.7188 32.1797 20.4705 31.2917 19.974 30.4323C19.4965 29.5729 18.7613 28.7613 17.7682 27.9974C16.7752 27.2144 15.0182 26.2023 12.4974 24.9609C8.96441 23.2231 6.42448 21.7431 4.8776 20.5208C3.33073 19.2986 2.13715 17.9332 1.29688 16.4245C0.475695 14.9158 0.0651042 13.2543 0.0651042 11.4401C0.0651042 8.34635 1.20139 5.71094 3.47396 3.53385C5.74653 1.35677 8.61111 0.268228 12.0677 0.268228C13.3281 0.268228 14.5503 0.421006 15.7344 0.726562C16.6319 0.955728 17.7205 1.38542 19 2.01562C20.2986 2.62674 21.2057 2.93229 21.7214 2.93229C22.2179 2.93229 22.6094 2.77951 22.8958 2.47396C23.1823 2.1684 23.4497 1.43316 23.6979 0.268228H24.5573ZM66.6667 1.15625V11.6693H65.6354C65.0243 9.24392 64.3464 7.50608 63.6016 6.45573C62.8568 5.38628 61.8351 4.53646 60.5365 3.90625C59.8108 3.5625 58.5408 3.39062 56.7266 3.39062H53.8333V33.3542C53.8333 35.3403 53.9384 36.5816 54.1484 37.0781C54.3776 37.5747 54.8073 38.0139 55.4375 38.3958C56.0868 38.7587 56.9653 38.9401 58.0729 38.9401H59.362V40H39.0234V38.9401H40.3125C41.4392 38.9401 42.3464 38.7396 43.0339 38.3385C43.5304 38.0712 43.9219 37.6128 44.2083 36.9635C44.4184 36.5052 44.5234 35.3021 44.5234 33.3542V3.39062H41.7161C39.0998 3.39062 37.1997 3.94444 36.0156 5.05208C34.3542 6.59896 33.3038 8.80469 32.8646 11.6693H31.776V1.15625H66.6667ZM110.495 1.15625V2.21615C109.215 2.38802 108.232 2.76042 107.544 3.33333C106.589 4.13542 105.081 6.32205 103.018 9.89323L94.5964 23.9583V33.3542C94.5964 35.3594 94.7014 36.6102 94.9115 37.1068C95.1215 37.5842 95.5321 38.0139 96.1432 38.3958C96.7734 38.7587 97.6042 38.9401 98.6354 38.9401H100.813V40H79.013V38.9401H81.0469C82.1927 38.9401 83.0998 38.7396 83.7682 38.3385C84.2648 38.0712 84.6563 37.6128 84.9427 36.9635C85.1528 36.5052 85.2578 35.3021 85.2578 33.3542V25.5625L76.1198 8.91927C74.3056 5.63455 73.026 3.70573 72.2813 3.13281C71.5365 2.5408 70.5434 2.23524 69.3021 2.21615V1.15625H87.9219V2.21615H87.0911C85.9644 2.21615 85.1719 2.37847 84.7135 2.70312C84.2743 3.02778 84.0547 3.37153 84.0547 3.73437C84.0547 4.42187 84.8186 6.15017 86.3464 8.91927L93.3646 21.7812L100.354 10.0651C102.092 7.20052 102.961 5.30035 102.961 4.36458C102.961 3.84896 102.713 3.41927 102.216 3.07552C101.567 2.59809 100.373 2.31163 98.6354 2.21615V1.15625H110.495ZM148.221 26.3646L146.76 40H112.271V38.9401H113.56C114.687 38.9401 115.594 38.7396 116.281 38.3385C116.778 38.0712 117.16 37.6128 117.427 36.9635C117.637 36.5052 117.742 35.3021 117.742 33.3542V7.80208C117.742 5.81597 117.637 4.57465 117.427 4.07812C117.217 3.5816 116.787 3.15191 116.138 2.78906C115.508 2.40712 114.648 2.21615 113.56 2.21615H112.271V1.15625H132.982V2.21615H131.292C130.165 2.21615 129.258 2.41667 128.57 2.81771C128.074 3.08507 127.682 3.5434 127.396 4.19271C127.186 4.65104 127.081 5.85417 127.081 7.80208V32.5521C127.081 34.5382 127.195 35.8082 127.424 36.362C127.654 36.8967 128.102 37.2977 128.771 37.5651C129.248 37.737 130.404 37.8229 132.237 37.8229H135.474C137.536 37.8229 139.255 37.4601 140.63 36.7344C142.005 36.0087 143.189 34.8628 144.182 33.2969C145.194 31.7309 146.149 29.4201 147.047 26.3646H148.221ZM186.693 1.15625V2.21615C185.28 2.44531 184.019 3.19965 182.911 4.47917C182.109 5.43403 180.916 7.67795 179.331 11.2109L165.953 40.888H165.008L151.688 10.0078C150.083 6.28385 149.004 4.09722 148.451 3.44792C147.916 2.79861 146.894 2.38802 145.385 2.21615V1.15625H164.005V2.21615H163.375C161.694 2.21615 160.549 2.42621 159.938 2.84635C159.498 3.13281 159.279 3.55295 159.279 4.10677C159.279 4.45052 159.355 4.86111 159.508 5.33854C159.661 5.79687 160.176 7.04774 161.055 9.09115L169.333 28.4271L177.01 11.2109C177.927 9.12934 178.49 7.73524 178.701 7.02865C178.911 6.32205 179.016 5.72049 179.016 5.22396C179.016 4.65104 178.863 4.14496 178.557 3.70573C178.252 3.26649 177.803 2.93229 177.211 2.70312C176.39 2.37847 175.301 2.21615 173.945 2.21615V1.15625H186.693ZM208.807 38.9401V40H188.497V38.9401H189.786C190.913 38.9401 191.82 38.7396 192.508 38.3385C193.004 38.0712 193.386 37.6128 193.654 36.9635C193.864 36.5052 193.969 35.3021 193.969 33.3542V7.80208C193.969 5.81597 193.864 4.57465 193.654 4.07812C193.444 3.5816 193.014 3.15191 192.365 2.78906C191.734 2.40712 190.875 2.21615 189.786 2.21615H188.497V1.15625H208.807V2.21615H207.518C206.391 2.21615 205.484 2.41667 204.797 2.81771C204.3 3.08507 203.909 3.5434 203.622 4.19271C203.412 4.65104 203.307 5.85417 203.307 7.80208V33.3542C203.307 35.3403 203.412 36.5816 203.622 37.0781C203.852 37.5747 204.281 38.0139 204.911 38.3958C205.561 38.7587 206.43 38.9401 207.518 38.9401H208.807ZM234.961 17.2266L245.674 33.125C247.451 35.7604 248.711 37.3646 249.456 37.9375C250.22 38.4913 251.117 38.8255 252.148 38.9401V40H233.214V38.9401C234.722 38.8255 235.696 38.5964 236.135 38.2526C236.575 37.9089 236.794 37.4887 236.794 36.9922C236.794 36.6484 236.727 36.3429 236.594 36.0755C236.326 35.5026 235.658 34.4332 234.589 32.8672L228.917 24.474L222.987 31.7214C221.211 33.9175 220.323 35.4071 220.323 36.1901C220.323 36.7439 220.552 37.2595 221.01 37.737C221.469 38.2144 222.147 38.5582 223.044 38.7682C223.445 38.8828 224.266 38.9401 225.508 38.9401V40H210.583V38.9401C212.283 38.6918 213.62 38.2335 214.594 37.5651C215.873 36.6866 217.659 34.8533 219.951 32.0651L227.656 22.6693L217.773 8.14583C216.15 5.75868 215.224 4.43142 214.995 4.16406C214.479 3.53385 213.973 3.08507 213.477 2.81771C212.98 2.55035 212.293 2.34983 211.414 2.21615V1.15625H230.693V2.21615H229.719C228.611 2.21615 227.838 2.39757 227.398 2.76042C226.959 3.10417 226.74 3.5434 226.74 4.07812C226.74 4.49826 226.806 4.86111 226.94 5.16667L228.917 8.14583L233.729 15.4792L237.826 10.4661C239.926 7.88802 240.977 6.08333 240.977 5.05208C240.977 4.53646 240.824 4.05903 240.518 3.61979C240.232 3.18055 239.812 2.8368 239.258 2.58854C238.704 2.34028 237.845 2.21615 236.68 2.21615V1.15625H250.974V2.21615C249.847 2.23524 248.94 2.37847 248.253 2.64583C247.565 2.8941 246.83 3.37153 246.047 4.07812C245.55 4.53646 244.309 5.9592 242.323 8.34635L234.961 17.2266Z"
                  fill="black" />
              </svg>
            </Link>
          </div>
          <div className="d-flex align-items-center gap-4">
            <div className="search-icons position-relative">
              <input type="text" className="form-control" placeholder="search" />
              <svg className="top-search-icon" width="15" height="15" viewBox="0 0 20 21" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M8.89605 0.444336C7.47736 0.444457 6.07928 0.78383 4.81844 1.43414C3.5576 2.08445 2.47056 3.02684 1.64802 4.18269C0.825473 5.33853 0.291278 6.67432 0.0899992 8.0786C-0.111279 9.48287 0.0261946 10.9149 0.490952 12.2553C0.955709 13.5956 1.73427 14.8054 2.76169 15.7836C3.7891 16.7619 5.03557 17.4803 6.3971 17.8789C7.75864 18.2775 9.19575 18.3447 10.5886 18.0749C11.9813 17.8052 13.2894 17.2063 14.4037 16.3282L18.2262 20.1505C18.4236 20.3412 18.688 20.4467 18.9624 20.4443C19.2368 20.4419 19.4994 20.3318 19.6934 20.1378C19.8875 19.9437 19.9976 19.6812 20 19.4068C20.0023 19.1324 19.8968 18.868 19.7062 18.6706L15.8837 14.8482C16.9178 13.5364 17.5617 11.9599 17.7417 10.2992C17.9216 8.63856 17.6304 6.96076 16.9013 5.45785C16.1722 3.95495 15.0347 2.68766 13.619 1.80103C12.2033 0.91439 10.5665 0.444224 8.89605 0.444336ZM2.09261 9.3408C2.09261 7.53649 2.8094 5.80607 4.08529 4.53023C5.36118 3.25438 7.09166 2.53762 8.89605 2.53762C10.7004 2.53762 12.4309 3.25438 13.7068 4.53023C14.9827 5.80607 15.6995 7.53649 15.6995 9.3408C15.6995 11.1451 14.9827 12.8755 13.7068 14.1514C12.4309 15.4272 10.7004 16.144 8.89605 16.144C7.09166 16.144 5.36118 15.4272 4.08529 14.1514C2.8094 12.8755 2.09261 11.1451 2.09261 9.3408Z"
                  fill="black" />
              </svg>

            </div>
            <a href="#" className="position-relative">
              <svg width="18" height="18" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.8293 0.0975342C9.26246 0.0975342 6.80078 1.07899 4.98577 2.826C3.17076 4.573 2.1511 6.94245 2.1511 9.41309V14.3845L0.0767452 19.3797C0.0115498 19.5368 -0.0126601 19.7068 0.00623396 19.875C0.025128 20.0432 0.08655 20.2043 0.185126 20.3443C0.283702 20.4843 0.416428 20.599 0.57169 20.6782C0.726952 20.7574 0.900019 20.7988 1.07575 20.7988H7.52786C7.52786 23.0935 9.44522 24.939 11.8293 24.939C14.2133 24.939 16.1307 23.0935 16.1307 20.7988H22.5828C22.7585 20.7988 22.9316 20.7574 23.0869 20.6782C23.2421 20.599 23.3748 20.4843 23.4734 20.3443C23.572 20.2043 23.6334 20.0432 23.6523 19.875C23.6712 19.7068 23.647 19.5368 23.5818 19.3797L21.5074 14.3845V9.41309C21.5074 6.94245 20.4878 4.573 18.6728 2.826C16.8578 1.07899 14.3961 0.0975342 11.8293 0.0975342ZM13.98 20.7988C13.98 21.9497 13.0251 22.8689 11.8293 22.8689C10.6335 22.8689 9.67857 21.9497 9.67857 20.7988H13.98ZM4.3018 9.41309C4.3018 7.49148 5.09488 5.64858 6.50655 4.28979C7.91822 2.93101 9.83286 2.16766 11.8293 2.16766C13.8257 2.16766 15.7403 2.93101 17.152 4.28979C18.5637 5.64858 19.3567 7.49148 19.3567 9.41309V14.5832C19.3566 14.7147 19.3825 14.8451 19.4331 14.9672L20.9945 18.7286H2.66404L4.22545 14.9672C4.27588 14.8454 4.30179 14.7154 4.3018 14.5843V9.41309Z"
                  fill="black" />
              </svg>
              <span className="position-absolute translate-middle badge rounded-pill bg-dark">
                0
                <span className="visually-hidden">unread messages</span>
              </span>
            </a>
            <a href="#" className="position-relative">
              <svg width="20" height="20" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.8369 0.0975342C18.2197 0.0975342 15.9282 1.24672 14.4998 3.18922C13.0714 1.24672 10.7799 0.0975342 8.1627 0.0975342C6.07935 0.0999319 4.082 0.946045 2.60884 2.45025C1.13569 3.95445 0.307036 5.99389 0.304688 8.12115C0.304688 17.1801 13.4593 24.5126 14.0195 24.8155C14.1671 24.8966 14.3322 24.939 14.4998 24.939C14.6675 24.939 14.8325 24.8966 14.9802 24.8155C15.5404 24.5126 28.6949 17.1801 28.6949 8.12115C28.6926 5.99389 27.8639 3.95445 26.3908 2.45025C24.9176 0.946045 22.9203 0.0999319 20.8369 0.0975342ZM14.4998 22.719C12.1855 21.342 2.33256 15.0693 2.33256 8.12115C2.33457 6.54295 2.94947 5.02997 4.04239 3.91401C5.13532 2.79805 6.61707 2.1702 8.1627 2.16815C10.6278 2.16815 12.6975 3.50887 13.5619 5.6623C13.6383 5.85219 13.7683 6.0146 13.9353 6.1289C14.1023 6.2432 14.2988 6.30422 14.4998 6.30422C14.7009 6.30422 14.8974 6.2432 15.0644 6.1289C15.2314 6.0146 15.3613 5.85219 15.4377 5.6623C16.3021 3.50498 18.3718 2.16815 20.8369 2.16815C22.3826 2.1702 23.8643 2.79805 24.9572 3.91401C26.0502 5.02997 26.6651 6.54295 26.6671 8.12115C26.6671 15.059 16.8116 21.3407 14.4998 22.719Z"
                  fill="black" />
              </svg>

              <span className="position-absolute translate-middle badge rounded-pill bg-dark">
                0
                <span className="visually-hidden">unread messages</span>
              </span>
            </a>
          </div>
        </div>
        <hr className="frist-navbar-border" />
      </div>
    </div>
    <div className="navigation-bar-second py-2">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light flex-wrap">
          <a className="navbar-brand d-block d-lg-none" href="#"><svg width="220" className="second-navbar-logo" height="30"
              viewBox="0 0 253 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.5573 0.268228L24.8724 13.2161H23.6979C23.1441 9.96962 21.7786 7.36285 19.6016 5.39583C17.4436 3.40972 15.1042 2.41667 12.5833 2.41667C10.6354 2.41667 9.08854 2.94184 7.94271 3.99219C6.81597 5.02344 6.2526 6.21701 6.2526 7.57292C6.2526 8.43229 6.45313 9.19618 6.85417 9.86458C7.40799 10.7622 8.29601 11.6502 9.51823 12.5286C10.4158 13.1589 12.4878 14.276 15.7344 15.8802C20.2795 18.1146 23.3446 20.2248 24.9297 22.2109C26.4957 24.197 27.2786 26.4696 27.2786 29.0286C27.2786 32.2752 26.0087 35.0729 23.4688 37.4219C20.9479 39.7517 17.7396 40.9167 13.8438 40.9167C12.6215 40.9167 11.4661 40.7925 10.3776 40.5443C9.28906 40.296 7.92361 39.8281 6.28125 39.1406C5.36458 38.7587 4.61024 38.5677 4.01823 38.5677C3.5217 38.5677 2.99653 38.7587 2.44271 39.1406C1.88889 39.5226 1.4401 40.105 1.09635 40.888H0.0364584V26.2214H1.09635C1.93663 30.3464 3.55035 33.4974 5.9375 35.6745C8.34375 37.8325 10.9314 38.9115 13.7005 38.9115C15.8394 38.9115 17.5391 38.329 18.7995 37.1641C20.079 35.9991 20.7188 34.6432 20.7188 33.0964C20.7188 32.1797 20.4705 31.2917 19.974 30.4323C19.4965 29.5729 18.7613 28.7613 17.7682 27.9974C16.7752 27.2144 15.0182 26.2023 12.4974 24.9609C8.96441 23.2231 6.42448 21.7431 4.8776 20.5208C3.33073 19.2986 2.13715 17.9332 1.29688 16.4245C0.475695 14.9158 0.0651042 13.2543 0.0651042 11.4401C0.0651042 8.34635 1.20139 5.71094 3.47396 3.53385C5.74653 1.35677 8.61111 0.268228 12.0677 0.268228C13.3281 0.268228 14.5503 0.421006 15.7344 0.726562C16.6319 0.955728 17.7205 1.38542 19 2.01562C20.2986 2.62674 21.2057 2.93229 21.7214 2.93229C22.2179 2.93229 22.6094 2.77951 22.8958 2.47396C23.1823 2.1684 23.4497 1.43316 23.6979 0.268228H24.5573ZM66.6667 1.15625V11.6693H65.6354C65.0243 9.24392 64.3464 7.50608 63.6016 6.45573C62.8568 5.38628 61.8351 4.53646 60.5365 3.90625C59.8108 3.5625 58.5408 3.39062 56.7266 3.39062H53.8333V33.3542C53.8333 35.3403 53.9384 36.5816 54.1484 37.0781C54.3776 37.5747 54.8073 38.0139 55.4375 38.3958C56.0868 38.7587 56.9653 38.9401 58.0729 38.9401H59.362V40H39.0234V38.9401H40.3125C41.4392 38.9401 42.3464 38.7396 43.0339 38.3385C43.5304 38.0712 43.9219 37.6128 44.2083 36.9635C44.4184 36.5052 44.5234 35.3021 44.5234 33.3542V3.39062H41.7161C39.0998 3.39062 37.1997 3.94444 36.0156 5.05208C34.3542 6.59896 33.3038 8.80469 32.8646 11.6693H31.776V1.15625H66.6667ZM110.495 1.15625V2.21615C109.215 2.38802 108.232 2.76042 107.544 3.33333C106.589 4.13542 105.081 6.32205 103.018 9.89323L94.5964 23.9583V33.3542C94.5964 35.3594 94.7014 36.6102 94.9115 37.1068C95.1215 37.5842 95.5321 38.0139 96.1432 38.3958C96.7734 38.7587 97.6042 38.9401 98.6354 38.9401H100.813V40H79.013V38.9401H81.0469C82.1927 38.9401 83.0998 38.7396 83.7682 38.3385C84.2648 38.0712 84.6563 37.6128 84.9427 36.9635C85.1528 36.5052 85.2578 35.3021 85.2578 33.3542V25.5625L76.1198 8.91927C74.3056 5.63455 73.026 3.70573 72.2813 3.13281C71.5365 2.5408 70.5434 2.23524 69.3021 2.21615V1.15625H87.9219V2.21615H87.0911C85.9644 2.21615 85.1719 2.37847 84.7135 2.70312C84.2743 3.02778 84.0547 3.37153 84.0547 3.73437C84.0547 4.42187 84.8186 6.15017 86.3464 8.91927L93.3646 21.7812L100.354 10.0651C102.092 7.20052 102.961 5.30035 102.961 4.36458C102.961 3.84896 102.713 3.41927 102.216 3.07552C101.567 2.59809 100.373 2.31163 98.6354 2.21615V1.15625H110.495ZM148.221 26.3646L146.76 40H112.271V38.9401H113.56C114.687 38.9401 115.594 38.7396 116.281 38.3385C116.778 38.0712 117.16 37.6128 117.427 36.9635C117.637 36.5052 117.742 35.3021 117.742 33.3542V7.80208C117.742 5.81597 117.637 4.57465 117.427 4.07812C117.217 3.5816 116.787 3.15191 116.138 2.78906C115.508 2.40712 114.648 2.21615 113.56 2.21615H112.271V1.15625H132.982V2.21615H131.292C130.165 2.21615 129.258 2.41667 128.57 2.81771C128.074 3.08507 127.682 3.5434 127.396 4.19271C127.186 4.65104 127.081 5.85417 127.081 7.80208V32.5521C127.081 34.5382 127.195 35.8082 127.424 36.362C127.654 36.8967 128.102 37.2977 128.771 37.5651C129.248 37.737 130.404 37.8229 132.237 37.8229H135.474C137.536 37.8229 139.255 37.4601 140.63 36.7344C142.005 36.0087 143.189 34.8628 144.182 33.2969C145.194 31.7309 146.149 29.4201 147.047 26.3646H148.221ZM186.693 1.15625V2.21615C185.28 2.44531 184.019 3.19965 182.911 4.47917C182.109 5.43403 180.916 7.67795 179.331 11.2109L165.953 40.888H165.008L151.688 10.0078C150.083 6.28385 149.004 4.09722 148.451 3.44792C147.916 2.79861 146.894 2.38802 145.385 2.21615V1.15625H164.005V2.21615H163.375C161.694 2.21615 160.549 2.42621 159.938 2.84635C159.498 3.13281 159.279 3.55295 159.279 4.10677C159.279 4.45052 159.355 4.86111 159.508 5.33854C159.661 5.79687 160.176 7.04774 161.055 9.09115L169.333 28.4271L177.01 11.2109C177.927 9.12934 178.49 7.73524 178.701 7.02865C178.911 6.32205 179.016 5.72049 179.016 5.22396C179.016 4.65104 178.863 4.14496 178.557 3.70573C178.252 3.26649 177.803 2.93229 177.211 2.70312C176.39 2.37847 175.301 2.21615 173.945 2.21615V1.15625H186.693ZM208.807 38.9401V40H188.497V38.9401H189.786C190.913 38.9401 191.82 38.7396 192.508 38.3385C193.004 38.0712 193.386 37.6128 193.654 36.9635C193.864 36.5052 193.969 35.3021 193.969 33.3542V7.80208C193.969 5.81597 193.864 4.57465 193.654 4.07812C193.444 3.5816 193.014 3.15191 192.365 2.78906C191.734 2.40712 190.875 2.21615 189.786 2.21615H188.497V1.15625H208.807V2.21615H207.518C206.391 2.21615 205.484 2.41667 204.797 2.81771C204.3 3.08507 203.909 3.5434 203.622 4.19271C203.412 4.65104 203.307 5.85417 203.307 7.80208V33.3542C203.307 35.3403 203.412 36.5816 203.622 37.0781C203.852 37.5747 204.281 38.0139 204.911 38.3958C205.561 38.7587 206.43 38.9401 207.518 38.9401H208.807ZM234.961 17.2266L245.674 33.125C247.451 35.7604 248.711 37.3646 249.456 37.9375C250.22 38.4913 251.117 38.8255 252.148 38.9401V40H233.214V38.9401C234.722 38.8255 235.696 38.5964 236.135 38.2526C236.575 37.9089 236.794 37.4887 236.794 36.9922C236.794 36.6484 236.727 36.3429 236.594 36.0755C236.326 35.5026 235.658 34.4332 234.589 32.8672L228.917 24.474L222.987 31.7214C221.211 33.9175 220.323 35.4071 220.323 36.1901C220.323 36.7439 220.552 37.2595 221.01 37.737C221.469 38.2144 222.147 38.5582 223.044 38.7682C223.445 38.8828 224.266 38.9401 225.508 38.9401V40H210.583V38.9401C212.283 38.6918 213.62 38.2335 214.594 37.5651C215.873 36.6866 217.659 34.8533 219.951 32.0651L227.656 22.6693L217.773 8.14583C216.15 5.75868 215.224 4.43142 214.995 4.16406C214.479 3.53385 213.973 3.08507 213.477 2.81771C212.98 2.55035 212.293 2.34983 211.414 2.21615V1.15625H230.693V2.21615H229.719C228.611 2.21615 227.838 2.39757 227.398 2.76042C226.959 3.10417 226.74 3.5434 226.74 4.07812C226.74 4.49826 226.806 4.86111 226.94 5.16667L228.917 8.14583L233.729 15.4792L237.826 10.4661C239.926 7.88802 240.977 6.08333 240.977 5.05208C240.977 4.53646 240.824 4.05903 240.518 3.61979C240.232 3.18055 239.812 2.8368 239.258 2.58854C238.704 2.34028 237.845 2.21615 236.68 2.21615V1.15625H250.974V2.21615C249.847 2.23524 248.94 2.37847 248.253 2.64583C247.565 2.8941 246.83 3.37153 246.047 4.07812C245.55 4.53646 244.309 5.9592 242.323 8.34635L234.961 17.2266Z"
                fill="black" />
            </svg>
          </a>
          <div className="d-block d-lg-none d-flex align-items-center flex-wrap justify-content-center gap-4">
            <div>
              <a href="#" className="position-relative me-4">
                <svg width="18" height="18" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.8293 0.0975342C9.26246 0.0975342 6.80078 1.07899 4.98577 2.826C3.17076 4.573 2.1511 6.94245 2.1511 9.41309V14.3845L0.0767452 19.3797C0.0115498 19.5368 -0.0126601 19.7068 0.00623396 19.875C0.025128 20.0432 0.08655 20.2043 0.185126 20.3443C0.283702 20.4843 0.416428 20.599 0.57169 20.6782C0.726952 20.7574 0.900019 20.7988 1.07575 20.7988H7.52786C7.52786 23.0935 9.44522 24.939 11.8293 24.939C14.2133 24.939 16.1307 23.0935 16.1307 20.7988H22.5828C22.7585 20.7988 22.9316 20.7574 23.0869 20.6782C23.2421 20.599 23.3748 20.4843 23.4734 20.3443C23.572 20.2043 23.6334 20.0432 23.6523 19.875C23.6712 19.7068 23.647 19.5368 23.5818 19.3797L21.5074 14.3845V9.41309C21.5074 6.94245 20.4878 4.573 18.6728 2.826C16.8578 1.07899 14.3961 0.0975342 11.8293 0.0975342ZM13.98 20.7988C13.98 21.9497 13.0251 22.8689 11.8293 22.8689C10.6335 22.8689 9.67857 21.9497 9.67857 20.7988H13.98ZM4.3018 9.41309C4.3018 7.49148 5.09488 5.64858 6.50655 4.28979C7.91822 2.93101 9.83286 2.16766 11.8293 2.16766C13.8257 2.16766 15.7403 2.93101 17.152 4.28979C18.5637 5.64858 19.3567 7.49148 19.3567 9.41309V14.5832C19.3566 14.7147 19.3825 14.8451 19.4331 14.9672L20.9945 18.7286H2.66404L4.22545 14.9672C4.27588 14.8454 4.30179 14.7154 4.3018 14.5843V9.41309Z"
                    fill="black" />
                </svg>
                <span className="position-absolute translate-middle badge rounded-pill bg-dark">
                  0
                  <span className="visually-hidden">unread messages</span>
                </span>
              </a>
              <a href="#" className="position-relative">
                <svg width="20" height="20" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.8369 0.0975342C18.2197 0.0975342 15.9282 1.24672 14.4998 3.18922C13.0714 1.24672 10.7799 0.0975342 8.1627 0.0975342C6.07935 0.0999319 4.082 0.946045 2.60884 2.45025C1.13569 3.95445 0.307036 5.99389 0.304688 8.12115C0.304688 17.1801 13.4593 24.5126 14.0195 24.8155C14.1671 24.8966 14.3322 24.939 14.4998 24.939C14.6675 24.939 14.8325 24.8966 14.9802 24.8155C15.5404 24.5126 28.6949 17.1801 28.6949 8.12115C28.6926 5.99389 27.8639 3.95445 26.3908 2.45025C24.9176 0.946045 22.9203 0.0999319 20.8369 0.0975342ZM14.4998 22.719C12.1855 21.342 2.33256 15.0693 2.33256 8.12115C2.33457 6.54295 2.94947 5.02997 4.04239 3.91401C5.13532 2.79805 6.61707 2.1702 8.1627 2.16815C10.6278 2.16815 12.6975 3.50887 13.5619 5.6623C13.6383 5.85219 13.7683 6.0146 13.9353 6.1289C14.1023 6.2432 14.2988 6.30422 14.4998 6.30422C14.7009 6.30422 14.8974 6.2432 15.0644 6.1289C15.2314 6.0146 15.3613 5.85219 15.4377 5.6623C16.3021 3.50498 18.3718 2.16815 20.8369 2.16815C22.3826 2.1702 23.8643 2.79805 24.9572 3.91401C26.0502 5.02997 26.6651 6.54295 26.6671 8.12115C26.6671 15.059 16.8116 21.3407 14.4998 22.719Z"
                    fill="black" />
                </svg>

                <span className="position-absolute translate-middle badge rounded-pill bg-dark">
                  0
                  <span className="visually-hidden">unread messages</span>
                </span>
              </a>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse justify-content-center align-items-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 text-center mt-4 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">CLOTHING</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">SHOES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ACCESSORIES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">BAGS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">JEWELLERY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">BEAUTY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">BRANDS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">SALES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">TRENDING</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog.html">BLOGS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="wikiprofile.html">WIKI</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="collection.html">COLLECTIONS</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <LoginModal show={showModal} handleClose={handleCloseModal} />
    </>
  )
}

export default Header