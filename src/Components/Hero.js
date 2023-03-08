import React, { useEffect, useState } from "react";
import styled from "styled-components";
import image01 from "../assets/image01.jpg";
import image02 from "../assets/image02.jpg";
import image03 from "../assets/image03.jpg";
import { useAuth0 } from "@auth0/auth0-react";

export default async function Hero() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
 
  const domain = "dev-dt5w73xr4ennm0m8.us.auth0.com";

  try {
    const accessToken = await getAccessTokenSilently({
      authorizationParams: {
        audience: `https://${domain}/api/v2/`,
        scope: "read:current_user",
      },
    });

    const userDetailsByIdUrl = `https://rbm7x5e9gl.execute-api.us-east-1.amazonaws.com/dev/items}`;

    const metadataResponse = await fetch(userDetailsByIdUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const { user_metadata } = await metadataResponse.json();

    setUserMetadata(user_metadata);
  } catch (e) {
    console.log(e.message);
  }
;
  return (
    <Wrapper>
      <div className="section section-center">
        <div className="hero">
          <div className="text__box">
            <h2>AMAZING ART</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              pariatur obcaecati adipisci, corrupti alias rem blanditiis
              necessitatibus et magni excepturi ea. Culpa modi ea nostrum
              laborum sed vero. Provident, omnis.
            </p>
          </div>
          <div className="image__box">
            <img src={image03} alt="" className="image03" />
            <img src={image02} alt="" className="image02" />
            <img src={image01} alt="" className="image01" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  background-color: var(--clr-primary-9);
  height: 20rem;
  .hero {
    display: flex;
    /* flex-direction: column-reverse; */
  }
  .text__box {
    margin-right: 3rem;
    width: 50%;
  }
  .image__box {
    position: relative;
    width: 50%;
    /* width: 90%; */
    img {
      position: absolute;
      width: 10rem;
    }
    .image01 {
      top: 50%;
      left: 50%;
      transform: translateX(-70%) translateY(-80%);
    }
    .image02 {
      top: 50%;
      left: 50%;
    }
    .image03 {
      top: 50%;
      left: 50%;
      transform: translateX(40%) translateY(-50%);
    }
  }

  @media (max-width: 620px) {
    .hero {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
    }
    .text__box {
      margin-right: 0;
      width: 100%;
    }
    .image__box {
      display: none;
    }
  }
`;
