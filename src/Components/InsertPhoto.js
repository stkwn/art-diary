import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function InsertPhoto() {
  return (
    <Wrapper>
      <section className="section section-center">
        <h3>Insert a Photo</h3>
        <form
          action="https://rbm7x5e9gl.execute-api.us-east-1.amazonaws.com/dev/manageItems"
          method="post"
        >
          <div className="form__box">
            <lable htmlFor="itemname">ArtWork Name</lable>
            <input type="text" id="itemname" name="itemname"></input>
          </div>
          <div className="form__box">
            <lable htmlFor="artist">Artist Name</lable>
            <input type="text" id="artist" name="artist"></input>
          </div>
          <div className="form__box">
            <lable htmlFor="type">Type</lable>
            <input type="text" id="type" name="type"></input>
          </div>
          <div className="form__box">
            <lable htmlFor="description">Description</lable>
            <textarea
              type="textarea"
              name="description"
              id="description"
            ></textarea>
          </div>
          <div className="form__box">
            <lable htmlFor="attachment">Upload a photo of the artwork</lable>
            <input name="attachement" id="attachment" type="file"></input>
          </div>
          <div className="btn__box">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;

    .form__box {
      padding: 1rem 2rem;
      display: flex;
      flex-direction: column;
    }

    .btn__box {
      padding: 1rem 2rem;
      align-self: center;
    }

    lable {
      color: var(--clr-primary-5);
      font-weight: 500;
    }

    input,
    textarea {
      padding: 0.5rem 1rem;
      outline: none;
      /* border: none; */
      border: 1px solid var(--clr-primary-5);
      color: var(--clr-primary-5);
      margin-top: 0.8rem;
    }

    textarea {
      line-height: 2rem;
    }
  }
`;
