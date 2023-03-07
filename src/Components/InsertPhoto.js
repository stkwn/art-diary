import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function InsertPhoto() {
  return (
    <Wrapper>
      <section className="section section-center">
        <h3>Insert a Photo</h3>
        <form action="url" method="post">
          <div className="form__box">
            <lable>ArtWork Name</lable>
            <input type="text"></input>
          </div>
          <div className="form__box">
            <lable>Creator</lable>
            <input type="text"></input>
          </div>
          <div className="form__box">
            <lable>Type</lable>
            <input type="text"></input>
          </div>
          <div className="form__box">
            <lable>Type</lable>
            <input type="textarea"></input>
          </div>
          <button>upload a file</button>
        </form>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
