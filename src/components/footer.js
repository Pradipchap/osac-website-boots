import React from "react";
import { House } from "@mui/icons-material";
import { Phone } from "react-feather";
import { Email } from "@mui/icons-material";
import { Laptop } from "@mui/icons-material";
export default function Footer() {
  return (
    <footer
      class="text-center text-lg-start text-white mt-10"
      style={{ backgroundColor: "#28282B" }}
    >
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-1">
            <div class="col-md-6 col-lg-3 col-xl-4 mx-auto mb-0 d-flex-column ">
              <h6 class="text-uppercase fw-bold">Feedback</h6>
              <hr
                class="mb-1 mt-0 d-inline-block mx-auto"
                style={{
                  backgroundColor: "#7c4dff",
                  width: "60px",
                  height: "2px",
                }}
              />
              <input type="text" class="form-control" placeholder="Email" />

              <textarea
                class="form-control mt-2"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Write feedback"
              ></textarea>
              <button type="button" class="btn btn-info mt-3">
                Submit
              </button>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-0">
              <h6 class="text-uppercase fw-bold">Contact</h6>
              <hr
                class="mb-1 mt-0 d-inline-block mx-auto"
                style={{
                  backgroundColor: "#7c4dff",
                  width: "60px",
                  height: "2px",
                }}
              />
              <p className="d-flex justify-content-center align-items-center mt-2">
                <House className="mr-2"/> Lainchair,kathmandu
              </p>
              <p className="d-flex justify-content-center align-items-center mt-2">
                <Email className="mr-2" />
                info@example.com
              </p>
              <p className="d-flex justify-content-center align-items-center mt-2">
                <Phone className="mr-2"/>9800712107
              </p>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://pradipchapagain.web.app"
        class="text-center p-3 d-flex justify-content-center align-items-center mt-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          textDecoration: "none",
          color: "white",
        }}
      >
        {"Developed By "}
        <Laptop className="ml-2 mr-2" />
        {"Pradip Chapagain"}
      </a>
    </footer>
  );
}
