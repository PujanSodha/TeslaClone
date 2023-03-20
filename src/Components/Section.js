import React from 'react'
import styled from "styled-components"
import Fade from "react-reveal/Fade";


function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap >
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/images/model-s.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;  //vertical alignment
    align-items: center;  //horizing alignment
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    text-align: center;
    padding-top: 15vh;
    
    h1 {
        font-size: 40px;
        font-family: 'Poppins', sans-serif;
    }

    p {
        font-size: 20px;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(30, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    
`

const RightButton = styled(LeftButton)`
    background: white;
    color: black;
    opacity: 0.85;
`


const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`

