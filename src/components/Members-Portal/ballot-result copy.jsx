import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver"; // Import saveAs from file-saver
import ErrorPopup from "./error-popup";

const BallotResults = () => {
  const [userId, setUserId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [currentDate, setCurrentDate] = useState("");

  const containerRef = useRef(null);

  async function temp1() {
    try {
      const data = {
        key: "portal_key", // Replace with the actual key you want to send
      };
      const response = await axios.post(
        `http://rem.creativerp.org/cv_balloting/web/ApisController.php?action=ballot_result&ms=${userId}`,
        data
      );

      console.log("API Response:", response.data);

      if (response.data.success) {
        const payloadData = response.data.payload;
        setResult(payloadData);
        setError(null);
      } else {
        setError(response.data.payload); // Set the error message from the API response
        setResult(null);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while fetching the data.");
      setResult(null);
    }
  }

  const handleKeyUp = (event) => {
    const newSearchText = event.target.value;
    setUserId(newSearchText);
  };

  const closeErrorPopup = () => {
    setError(null); // Clear the error message
  };

  // Define the exportAsImage function
  async function exportAsImage(format) {
    if (!containerRef.current) {
      return;
    }

    try {
      const canvas = await html2canvas(containerRef.current);
      canvas.toBlob((blob) => {
        if (blob) {
          saveAs(blob, `Ballot Receipt.${format}`);
        }
      }, `image/${format}`);
    } catch (error) {
      console.error("Error exporting as image:", error);
    }
  }
  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const year = today.getFullYear();

    setCurrentDate(`${day}-${month}-${year}`);
  }, []);

  return (
    <>
      <div className="tpbs-about-area pt-50 pb-50 p-relative">
        <div className="container">
          <div className="contact__form-input my-4">
            <input
              onKeyUp={handleKeyUp}
              type="text"
              placeholder="Enter Your Member Ship Number."
            />
          </div>
          <div className="d-grid my-4">
            <button type="submit" className="tp-solid-btn" onClick={temp1}>
              Submit
            </button>
          </div>
          <div>
            {error && <ErrorPopup message={error} onClose={closeErrorPopup} />}
            {result && (
              <div>
                <div className="aboutme-content text-center">
                  <h3 className="tpabout-xd-title mb-50">
                    <b>Balloting Result:</b>
                  </h3>
                </div>
                <div className="container" ref={containerRef}>
                  <div className="tp-mem-port">
                    <div className="center-image">
                      <img
                        src="/assets/img/cv-color-logo.png"
                        alt="Capital Valley Logo"
                      />
                      <img
                        src="/assets/img/cv-ballot-stamp.png"
                        alt="Capital Valley Ballot Stamp"
                      />
                    </div>
                    <div className="mem-port-line">
                      <h4>UAN: +92 311 1177 716</h4>
                    </div>
                    <div className="aboutme-content text-center">
                      <h3 className="mt-50">
                        <b>Capital Valley Islamabad</b>
                      </h3>
                    </div>
                    <div className="aboutme-content text-center">
                      <h5 className="mb-50">
                        <b>Ballot Receipt</b>
                      </h5>
                    </div>
                    <div className="text-end m-4">
                      <p>
                        Date: <u>{currentDate}</u>
                      </p>
                    </div>
                    <div className="mem-port-grid-view">
                      <p>
                        Membership No: <u>{result.membership_no}</u>
                      </p>
                      <p>
                        Name: <u>{result.name}</u>
                      </p>
                      <p>
                        CNIC: <u>{result.cnic}</u>
                      </p>
                      <p>
                        Phone: <u>{result.phone}</u>
                      </p>
                      <p>
                        Size: <u>{result.size}</u>
                      </p>
                      <p>
                        Street: <u>{result.street}</u>
                      </p>
                      <p>
                        Unit No: <u>{result.unit_no}</u>
                      </p>
                      <p>
                        Category: <u>{result.sector_name}</u>
                      </p>
                    </div>
                    <div className="text-center p-5">
                      <h4>
                        Note:
                        <u>
                          The Allotment Letter Will Be Issued Upon Completion of
                          50% Payment Of Plot.
                        </u>
                      </h4>
                    </div>
                    <div className="text-end m-3">
                      <p1 className="mem-port-p1">
                        This is System Generated Receipt.
                      </p1>
                    </div>
                  </div>
                </div>
                {/* Add export buttons here */}
                <div className="text-center">
                  <div className="export-buttons">
                    <button
                      className="tp-solid-btn m-4"
                      onClick={() => exportAsImage("png")}
                    >
                      Export as PNG
                    </button>
                    <button
                      className="tp-solid-btn m-4"
                      onClick={() => exportAsImage("jpeg")}
                    >
                      Export as JPEG
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BallotResults;
