import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function InsertPhoto() {
  const initialState = {
    itemName: "",
    artist: "",
    type: "",
    isPublic: true,
    description: "",
  };
  const [input, setInput] = useState(initialState);

  const handleChange = () => {
    
  }


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <section className="section section-center">
        <h3>Insert a Photo</h3>
        <form>
          <div className="form__box">
            <lable htmlFor="itemname">ArtWork Name</lable>
            <input
              type="text"
              id="itemname"
              name="itemname"
              value={input.itemName}
            ></input>
          </div>
          <div className="form__box">
            <lable htmlFor="artist">Artist Name</lable>
            <input
              type="text"
              id="artist"
              name="artist"
              value={input.artist}
            ></input>
          </div>
          <div className="form__box">
            <lable htmlFor="type">Type</lable>
            <input type="text" id="type" name="type" value={input.type}></input>
          </div>
          <div className="form__box__check">
            <lable htmlFor="isPublic">
              Status: Is this artwork public or private{" "}
            </lable>
            <input
              type="checkbox"
              id="isPublic"
              name="isPublic"
              checked={input.isPublic}
            ></input>
          </div>
          <div className="form__box">
            <lable htmlFor="description">Description</lable>
            <textarea
              type="textarea"
              name="description"
              id="description"
              value={input.description}
            ></textarea>
          </div>
          <div className="form__box">
            <lable htmlFor="attachment">Upload a photo of the artwork</lable>
            <input name="attachement" id="attachment" type="file"></input>
          </div>
          <div className="btn__box">
            <button
              className="btn"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
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

    .form__box__check {
      padding: 1rem 2rem;
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
