import React from "react";
import { Button } from "primereact/button";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__colContainer">
          <div className="footer__contact">
            <h3 className="footer__colContentTitle">Contact</h3>
            <p>
              IT Dept - JNTU Vizainagaram AB2 Block <br /> Vizainagaram, AP -
              201313, India
            </p>
            <p>Email: hod.it@jntukucev.ac.in</p>
          </div>
          <div className="footer__about">
            <h3 className="footer__colContentTitle">About</h3>
            <p>
              ACM, The world&apos;s largest educational and scientific computing
              society, delivers resources that advance computing as a science
              and profession.
            </p>
          </div>
          <div className="footer__social">
            <h3 className="footer__colContentTitle">Social</h3>
            <div className="footer__socialBtns">
              <div className="footer__socialBtnsRow">
                <Button
                  className="footer__socialBtn p-button-outlined"
                  label="Youtube"
                  icon="pi pi-youtube"
                />
                <Button
                  className="footer__socialBtn p-button-outlined"
                  label="Facebook"
                  icon="pi pi-facebook"
                />
              </div>
              <div className="footer__socialBtnsRow">
                <Button
                  className="footer__socialBtn p-button-outlined"
                  label="Twitter"
                  icon="pi pi-twitter"
                />
                <Button
                  className="footer__socialBtn p-button-outlined"
                  label="Instagram"
                  icon="pi pi-instagram"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__topper">
          Copyright ©{new Date().getFullYear()}, JNTUK UCEV ACM Student Chapter.
          Designed by Srujan and Yaswanth
        </div>
      </div>
      <style jsx global>{`
        .footer {
          background-color: #495057;
          color: #eeeeee;
        }
        .footer__topper {
          padding: 20px;
          background-color: #3c434b;
          text-align: center;
          color: #b1b1b1;
        }
        .footer__colContainer {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 30px;
          padding: 50px 20px 20px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer__colContentTitle {
          margin-bottom: 10px;
          font-size: 19px;
          color: #eeeeee;
        }
        .footer__about,
        .footer__contact,
        .footer__social {
          flex: 1;
        }
        .footer__contact p,
        .footer__about p {
          line-height: 1.2;
          color: #bbbbbb;
        }
        .footer__socialBtns {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer__socialBtnsRow {
          display: flex;
          justify-content: space-evenly;
          align-items: stretch;
          flex-wrap: wrap;
          min-width: 300px;
          gap: 10px;
        }
        .footer__socialBtn {
          flex: 1;
          color: #bbbbbb !important;
          max-width: 40vw;
          height: 40px;
        }
        @media only screen and (max-width: 400px) {
          .footer__colContainer {
            flex-direction: column;
            gap: 15px;
          }
          .footer__colContentTitle {
            font-size: 17px;
            text-align: center;
          }
          .footer__contact p,
          .footer__about p {
            text-align: center;
          }
          .footer__socialBtnsRow {
            min-width: unset;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;
