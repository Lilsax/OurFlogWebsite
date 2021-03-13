import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../MovieState';

export default function MoviesDetails() {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMoives] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMoive = movies.filter((stateMove) => stateMove.url === url);
    setMovie(currentMoive[0]);
  }, [movies, url]);
  return (
    <>
      {movie && (
        <Detalis>
          <HeadLine>
            {' '}
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
          </HeadLine>

          <Awards>
            {movie.awards.map((awad, index) => {
              return (
                <AwardStyle key={index}>
                  <h3> {awad.title}</h3>
                  <div className="line"></div>
                  <p>{awad.description}</p>
                </AwardStyle>
              );
            })}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} />
          </ImageDisplay>
        </Detalis>
      )}
    </>
  );
}

const Detalis = styled.div`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  width: 100%;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }

  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
