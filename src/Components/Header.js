/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'


function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <a>
                <img src="./images/logo.svg" alt="" />
            </a>
            {/* <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
            </Menu> */}
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Solar Roof</a></li>
                <li><a href="#">Solar Panels</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Insurance</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Investor Relation</a></li>
                <li><a href="#">Account</a></li>
                <li><a href="#">More</a></li>


            </BurgerNav>
        </Container>
    )
}

export default Header


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    justify-content: space-between;         
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1; 
`

const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    justify-content: spacee-between;
    margin-left: 100px;

    a {
        font-weight: 550;
        text-transform: uppercase;
        padding: 0 15px;
        flex-wrap: nowrap;
        
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`

    display: flex;
    align-items: center;

    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        padding: 0 8px;
    } 
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start; 
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .2s;

    li {
        padding: 15px 0;
        border-bottom:  1px solid rgba(0, 0, 0, .2);
    } 

    a{
        font-weight: 600;
    }

`

const CustomClose = styled(CloseIcon)`
    cursor: pointer
`


const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`



