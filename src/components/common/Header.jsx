import { useTheme } from "next-themes";
import useSticky from "../../hooks/use-sticky";
import Link from "next/link";
import useGlobalContext from "../../hooks/useGlobalContext";
import Sidebar from "./Sidebar";

const Header = ({ HeaderTwo, headerEight = false, homeNine }) => {
  const { theme, setTheme } = useTheme();
  const { headerSticky } = useSticky();
  const { setShowSidebar } = useGlobalContext();

  return <>
    <header>
      <div
        className={`tp-header-area ${HeaderTwo && "box-plr-85"} ${
          homeNine ? "header-style-9" : ""
        }`}>
        <div
          className={`tp-header-area-inner ${HeaderTwo ? "" : "inner-border"} 
        ${headerSticky && "header-sticky"} ${
            homeNine && "header-transparent border-0"
          }`}
          id="header-sticky">
          <div
            className={`${
              HeaderTwo ? "container-fluid" : "container"
            } p-relative`}>
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                <div className="logo-dark">
                  <Link href="/">

                    {homeNine ? (
                      <img
                        src="/public/assets/img/logo/golden-logo.png"
                        width={"100px"}
                        alt="logo"
                      />
                    ) : (
                      <img
                        src="/assets/img/logo/cv-color-logo-white.png"
                        width={"100px"}
                        alt="logo"
                      />
                    )}

                  </Link>
                </div>
                <div className="logo-white">
                  <Link href="/">

                    <img
                      src="/assets/img/logo/golden-logo.png"
                      width={"100px"}
                      alt="logo"
                    />

                  </Link>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8 d-none d-lg-block">
                <div className="tpmenu">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/notifications">Notifications</Link>
                      </li>
                      <li>
                        <Link href="/members-portal">Members Portal</Link>
                      </li>
                      <li>
                        <Link href="/blog-grid">Blogs</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {!headerEight && (
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                  <div className="tp-header-action">
                    <ul>
                      <li>
                        <button
                          onClick={() => setShowSidebar(true)}
                          className="info-toggle-btn sidebar-toggle-btn">
                          <i className="fas fa-bars"></i>
                        </button>
                      </li>
                      <li>
                        {/* dark mode button start  */}
                        {/* <div className="mode-switch-wrapper my_switcher setting-option">
                          <input
                            type="checkbox"
                            className="checkbox"
                            id="chk"
                          />
                          <label className="label" htmlFor="chk">
                            <i
                              onClick={() => setTheme("dark")}
                              className="fas fa-sun tp-dark-icon setColor dark theme__switcher-btn"
                              data-theme="dark"></i>
                            <i
                              onClick={() => setTheme("light")}
                              className="fas fa-moon tp-light-icon setColor light theme__switcher-btn"
                              data-theme="light"></i>
                          </label>
                        </div> */}
                        {/* dark mode button end  */}
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Sidebar  */}
    <Sidebar />
    {/* Sidebar  */}
  </>;
};

export default Header;
