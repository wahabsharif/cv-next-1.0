import Link from "next/link";
import servicesData from "../../data/servicesData";

const ServicesList = () => {
  return (
    <>
      <div className="tpservices-area pt-140 pb-110">
        <div className="container">
          <div className="tpbs-section-wrapper mb-30 text-center">
            <h3 className="tpbs-title mx-4">Amenities & Features</h3>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="tpservices tpservices-3 text-center mb-30">
                <div className="tpservices__icon mb-30">
                  <i>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 48 48">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M10 6.048s.485.85 1.122 2.138c.877 1.77 2.043 4.369 2.635 6.721c.098.389.18.77.243 1.14v15h2V25.7c-.64-1.191-1-2.608-1-4.224c0-3.585 3.175-6.189 5.836-8.37a43.516 43.516 0 0 0 1.797-1.525c.127-.117.25-.232.367-.347V8.048h2v3.186c.117.115.24.23.367.347c.533.489 1.15.995 1.797 1.525c2.66 2.181 5.836 4.785 5.836 8.37c0 1.616-.36 3.033-1 4.224v5.348h2v-15c.054-.364.131-.745.228-1.137c.56-2.273 1.755-4.92 2.652-6.726c.635-1.28 1.12-2.137 1.12-2.137s.485.85 1.122 2.138c.877 1.77 2.043 4.369 2.635 6.721c.098.389.18.77.243 1.14v26H6v-26c.054-.363.131-.744.228-1.136c.56-2.273 1.755-4.92 2.652-6.726C9.515 6.905 10 6.048 10 6.048Zm18 34v-.528a2 2 0 0 0-1.106-1.789L24 36.284l-2.894 1.447A2 2 0 0 0 20 39.52v.528h8Zm2 0h4v-7H14v7h4v-.528a4 4 0 0 1 2.211-3.578L24 34.048l3.789 1.894A4 4 0 0 1 30 39.52v.528Zm6-23.532c.808-.195 1.404-.293 2-.293c.596 0 1.192.098 2 .293v23.532h-4V16.516Zm-28 0v23.532h4V16.516c-.808-.195-1.404-.293-2-.293c-.596 0-1.192.098-2 .293Zm.456-2.142c.396-1.26.962-2.633 1.543-3.896c.563 1.232 1.122 2.597 1.528 3.893A8.591 8.591 0 0 0 10 14.223c-.508 0-1.01.054-1.544.15Zm9.475 10.674c-.582-.946-.931-2.132-.931-3.572c0-1.161.505-2.272 1.466-3.442c.98-1.193 2.278-2.266 3.638-3.381l.027-.023c.633-.519 1.29-1.057 1.869-1.589c.579.532 1.236 1.07 1.869 1.59l.027.022c1.36 1.115 2.659 2.188 3.638 3.38c.96 1.17 1.466 2.282 1.466 3.443c0 1.44-.35 2.626-.93 3.572H17.93Zm.069 2v4h1v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h1v-4H18Zm20-16.57c-.582 1.263-1.148 2.636-1.544 3.896A8.617 8.617 0 0 1 38 14.223c.502 0 1 .053 1.527.147c-.406-1.295-.965-2.66-1.528-3.892Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </i>
                </div>
                <div className="tpservices__content">
                  <h4 className="tpservices__title mb-25">
                    <a>Jamia Masjid</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="tpservices tpservices-3 text-center mb-30">
                <div className="tpservices__icon mb-30">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 15 15">
                      <path
                        fill="none"
                        stroke="currentColor"
                        d="m7.5 4.5l4 2v8h-8v-8l4-2Zm0 0V0M0 14.5h15m-13.5 0v-6h2m10 6v-6h-2m-5 6v-3h2v3m-1-14h3v2h-3m0 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
                      />
                    </svg>
                  </i>
                </div>
                <div className="tpservices__content">
                  <h4 className="tpservices__title mb-25">
                    <a>School</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="tpservices tpservices-3 text-center mb-30">
                <div className="tpservices__icon mb-30">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="currentColor"
                        d="M3.5 22v-7.961a20 20 0 0 0-1.567-7.761L1.5 5.25V5h6m13 17v-7.961a20 20 0 0 1 1.567-7.761L22.5 5.25V5h-6m0 17v-6.5h-9V22M24 23.5H0m12-21V5m0 0v2.5M12 5h2.5M12 5H9.5M12 15.5V22M7.5.5h9v9h-9v-9Z"
                      />
                    </svg>
                  </i>
                </div>
                <div className="tpservices__content">
                  <h4 className="tpservices__title mb-25">
                    <a>Hospital</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="tpservices tpservices-3 text-center mb-30">
                <div className="tpservices__icon mb-30">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M11 8.32c.57.38 1 1.03 1 1.68v5.5L8.5 19v3h-5v-3L0 15.5V10c0-1 1-2 2-2V4h2v4h4V4h2v4c.35 0 .7.12 1 .32m-3.91 9.27L10 14.67v-4.58c0-.03-.05-.09-.08-.09H2.09c-.03 0-.09.06-.09.09v4.58L5.33 18h1.34l.42-.41M12 4.04c.11-.04.22-.04.33-.04H14V2h6v2h1.67C22.4 4 23 4.6 23 5.33v15.34c0 .33-.14.69-.39.94s-.61.39-.94.39h-9.34c-.73 0-1.33-.6-1.33-1.33v-1.34l2-2V20h8V6h-9V4.04Z"
                      />
                    </svg>
                  </i>
                </div>
                <div className="tpservices__content">
                  <h4 className="tpservices__title mb-25">
                    <a>Power Backup</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="tpservices tpservices-3 text-center mb-30">
                <div className="tpservices__icon mb-30">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 256 256">
                      <path
                        fill="currentColor"
                        d="M232 194h-34v-28h26a6 6 0 0 0 5.82-7.46l-32-128a6 6 0 0 0-11.64 0l-32 128A6 6 0 0 0 160 166h26v28h-68v-20h10a6 6 0 0 0 0-12h-10v-20h10a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12h10v20H40a6 6 0 0 0 0 12h10v20H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12ZM192 56.74L216.32 154h-48.64ZM62 142h44v20H62Zm0 32h44v20H62Zm54-80a26 26 0 1 0-26-26a26 26 0 0 0 26 26Zm0-40a14 14 0 1 1-14 14a14 14 0 0 1 14-14Z"
                      />
                    </svg>
                  </i>
                </div>
                <div className="tpservices__content">
                  <h4 className="tpservices__title mb-25">
                    <a>Parks</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="tpservices tpservices-3 text-center mb-30">
                <div className="tpservices__icon mb-30">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 20 20">
                      <path
                        fill="currentColor"
                        d="M2 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v.894l3.255-1.831a.5.5 0 0 1 .745.435V11.5a.5.5 0 0 1-.746.435L14 10.1v.9a2 2 0 0 1-2 2h-2v1a4 4 0 0 1-4 4H3.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h2A1.5 1.5 0 0 0 7 13.5V13H4a2 2 0 0 1-2-2V5Zm6 8v.5A2.5 2.5 0 0 1 5.5 16H4v1h2a3 3 0 0 0 3-3v-1H8Zm-4-1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1Zm10.005-4.96v1.914L17 10.644v-5.29l-2.995 1.685Z"
                      />
                    </svg>
                  </i>
                </div>
                <div className="tpservices__content">
                  <h4 className="tpservices__title mb-25">
                    <a>24/7 Security</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="tpservices tpservices-3 text-center mb-30">
                <div className="tpservices__icon mb-30">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 32 32">
                      <path
                        fill="currentColor"
                        d="M8 4v4H4V4h4M2 2v8h8V2zm16 5v4h-4V7h4m-6-2v8h8V5zM8 16v4H4v-4h4m-6-2v8h8v-8z"
                      />
                      <path
                        fill="currentColor"
                        d="M22 10v6h-6v6h-6v8h20V10Zm-4 8h4v4h-4Zm-2 10h-4v-4h4Zm6 0h-4v-4h4Zm6 0h-4v-4h4Zm0-6h-4v-4h4Zm-4-6v-4h4v4Z"
                      />
                    </svg>
                  </i>
                </div>
                <div className="tpservices__content">
                  <h4 className="tpservices__title mb-25">
                    <a>Quality Development</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="tpservices tpservices-3 text-center mb-30">
                <div className="tpservices__icon mb-30">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="m12 5.5l6 4.5v9H6v-9l6-4.5M12 3L4 9v12h16V9l-8-6zm-.5 6.5v3H11v-3h-1v3h-.5v-3h-1v3c0 .83.67 1.5 1.5 1.5v4h1v-4c.83 0 1.5-.67 1.5-1.5v-3h-1zm1.5 2v3h1V18h1V9.5c-1.1 0-2 .9-2 2z"
                      />
                    </svg>
                  </i>
                </div>
                <div className="tpservices__content">
                  <h4 className="tpservices__title mb-25">
                    <a>Food Court</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="tpservices tpservices-3 text-center mb-30">
                <div className="tpservices__icon mb-30">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 512 512">
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                        strokeWidth="32"
                        d="M400 320c0 88.37-55.63 144-144 144s-144-55.63-144-144c0-94.83 103.23-222.85 134.89-259.88a12 12 0 0 1 18.23 0C296.77 97.15 400 225.17 400 320Z"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="M344 328a72 72 0 0 1-72 72"
                      />
                    </svg>
                  </i>
                </div>
                <div className="tpservices__content">
                  <h4 className="tpservices__title mb-25">
                    <a>Water Resources</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="tpservices tpservices-3 text-center mb-30">
                <div className="tpservices__icon mb-30">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 26 26">
                      <path
                        fill="currentColor"
                        d="M1.313 0L0 1.313l2.313 4l1.5-.22l9.156 9.157l-.781.75c-.4.4-.4 1.006 0 1.406l.406.407c.4.4 1.012.4 1.312 0L15.094 18c-.1.6 0 1.313.5 1.813L21 25.188c1.1 1.1 2.9 1.1 4 0c1.3-1.2 1.288-2.994.188-4.094l-5.375-5.407c-.5-.5-1.213-.7-1.813-.5L16.687 14c.3-.4.3-1.012 0-1.313l-.375-.374a.974.974 0 0 0-1.406 0l-.656.656l-9.156-9.156l.218-1.5l-4-2.313zm19.5.031C18.84-.133 16.224 1.175 15 2.312c-1.506 1.506-1.26 3.475-.063 5.376l-2.124 2.125l1.5 1.687c.8-.7 1.98-.7 2.78 0l.407.406l.094.094l.875-.875c1.808 1.063 3.69 1.216 5.125-.219c1.4-1.3 2.918-4.506 2.218-6.406L23 7.406c-.4.4-1.006.4-1.406 0L18.687 4.5a.974.974 0 0 1 0-1.406L21.595.188c-.25-.088-.5-.133-.782-.157zm-11 12.469l-3.626 3.625A5.26 5.26 0 0 0 5 16c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5c0-.513-.081-1.006-.219-1.469l2.125-2.125l-.312-.406c-.8-.8-.794-2.012-.094-2.813L9.812 12.5zm7.75 4.563c.125 0 .243.024.343.125l5.907 5.906c.2.2.2.518 0 .718c-.2.2-.52.2-.72 0l-5.905-5.906c-.2-.2-.2-.518 0-.718c.1-.1.25-.125.375-.125zM5.688 18.405l1.906 1.907l-.688 2.593l-2.593.688l-1.907-1.907l.688-2.593l2.594-.688z"
                      />
                    </svg>
                  </i>
                </div>
                <div className="tpservices__content">
                  <h4 className="tpservices__title mb-25">
                    <a>Maintenance</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="tpservices tpservices-3 text-center mb-30">
                <div className="tpservices__icon mb-30">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 32 32">
                      <path
                        fill="currentColor"
                        d="M8 7a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8ZM4.5 13A2.5 2.5 0 0 0 2 15.5v.25c0 .275 0 1.845 1.054 3.36c.757 1.088 1.983 2.047 3.899 2.54a4.018 4.018 0 0 1 1.735-1.717c-2.33-.251-3.437-1.167-3.992-1.965A3.996 3.996 0 0 1 4 15.75v-.25a.5.5 0 0 1 .5-.5h6c0-.706.133-1.38.375-2H4.5Zm24.446 6.11c-.757 1.088-1.983 2.047-3.899 2.54a4.019 4.019 0 0 0-1.735-1.717c2.33-.251 3.437-1.167 3.992-1.965A3.996 3.996 0 0 0 28 15.75v-.25a.5.5 0 0 0-.5-.5h-6c0-.706-.133-1.38-.375-2H27.5a2.5 2.5 0 0 1 2.5 2.5v.25c0 .275 0 1.845-1.054 3.36ZM20 7a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm-6 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm-4 8.5a2.5 2.5 0 0 1 2.5-2.5h11a2.5 2.5 0 0 1 2.5 2.5v.25c0 .275 0 1.845-1.054 3.36C21.846 28.691 19.756 30 16 30c-3.755 0-5.846-1.309-6.946-2.89C8 25.595 8 24.026 8 23.75v-.25Zm2.5-.5a.5.5 0 0 0-.5.5v.25c0 .165.001 1.22.696 2.218c.65.935 2.06 2.032 5.304 2.032c3.245 0 4.654-1.097 5.304-2.032A3.996 3.996 0 0 0 22 23.75v-.25a.5.5 0 0 0-.5-.5h-11Z"
                      />
                    </svg>
                  </i>
                </div>
                <div className="tpservices__content">
                  <h4 className="tpservices__title mb-25">
                    <a>Eco-Community</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="tpservices tpservices-3 text-center mb-30">
                <div className="tpservices__icon mb-30">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 48 48">
                      <path
                        fill="currentColor"
                        d="M20.002 10.5a4 4 0 0 0 2.226 3.586l.492.179a3.75 3.75 0 0 0 2.566 0l.491-.179a4 4 0 1 0-5.775-3.586Zm-2.194 1.977A6.5 6.5 0 0 1 24.003 4a6.5 6.5 0 0 1 6.194 8.477l6.1-2.22a4.25 4.25 0 0 1 2.908 7.988l-8.201 2.985v4.796c0 .353.067.703.2 1.03L35.69 38.16a4.25 4.25 0 1 1-7.882 3.185l-3.807-9.422l-3.807 9.421a4.25 4.25 0 0 1-7.882-3.184l4.49-11.112c.132-.327.2-.677.2-1.03V21.23L8.8 18.245a4.25 4.25 0 1 1 2.907-7.987l6.1 2.22Zm3.444 3.914l-10.399-3.784a1.75 1.75 0 0 0-1.197 3.289l8.365 3.044a2.25 2.25 0 0 1 1.481 2.114v4.964c0 .674-.13 1.342-.382 1.967l-4.49 11.112a1.75 1.75 0 1 0 3.245 1.311l4.04-9.995c.758-1.877 3.414-1.877 4.172 0l4.04 9.995a1.75 1.75 0 0 0 3.245-1.311l-4.487-11.105a5.25 5.25 0 0 1-.382-1.966v-4.972c0-.945.592-1.79 1.481-2.114l8.365-3.044a1.75 1.75 0 1 0-1.197-3.29l-10.398 3.785a6.477 6.477 0 0 1-2.751.609a6.477 6.477 0 0 1-2.751-.609Z"
                      />
                    </svg>
                  </i>
                </div>
                <div className="tpservices__content">
                  <h4 className="tpservices__title mb-25">
                    <a>Accessibility</a>
                  </h4>
                </div>
              </div>
            </div>
            {/* {servicesData.slice(0, 8).map((item) => (
              <div
                key={item.id}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="tpservices tpservices-3 text-center mb-30">
                  <div className="tpservices__icon mb-30">
                    <i className={item.icon}></i>
                  </div>
                  <div className="tpservices__content">
                    <h4 className="tpservices__title mb-25">
                      <Link href={`/service-details/${item.id}`}>
                        <a>{item.title}</a>
                      </Link>
                    </h4>
                    <div className="tpservices__btn mt-30">
                      <Link href={`/service-details/${item.id}`}>
                        <a>
                          <span></span>
                          <span></span>
                          <span></span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesList;
