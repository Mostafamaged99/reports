import React from "react";
import TypeCount from "./TypeCount";
import LanguageCount from "./LanguageCount";
import { Container } from "react-bootstrap";

export default function Interviews() {
  return (
    <>
      <Container>
        <div className="row my-3">
          <div className="col-md-6 justify-content-center d-flex text-center">
            <div className="type-count text-center mb-3">
              <h3>Interview Types</h3>
              <div className="card py-3 ">
                <TypeCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center">
            <div className="language-count text-center ">
              <h3>Interview Setup Language</h3>
              <div className="card py-3 ">
                <LanguageCount />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
