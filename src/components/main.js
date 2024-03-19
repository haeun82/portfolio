import React from 'react';
import styled from 'styled-components';
  const TopWrapper = styled.div`
    max-width: 100%;
    height: 800px;
    background-color: gray;
  `;

  const TopText = styled.div`
    max-width: 100%;
    height: 90%;
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    h1 {
      font-size: 50px;
    }

    h5 {
      font-size: 25px;
      text-align: right;
      align-self: flex-end;
    }

    .border {
      width: 100px;
      height: 35px;
      /* padding: 5px; */
      border: 1px solid black;
      border-radius: 20px;

      p {
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        text-align: center;
        line-height: 1.6;
      }
    }
  `;

function Main(props) {
  return (
    <TopWrapper>
      <TopText>
        <h1>FRONTEND <br />PORTFOLIO</h1>
        <h5>HAN HA EUN</h5>
        <div className='border'>
          <p>2024</p>
        </div>
      </TopText>
    </TopWrapper>
  );
}

export default Main;