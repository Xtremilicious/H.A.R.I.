import React, { Component } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    height: 12vh;
    background: #2E2E2E;
    color: white;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    font-size: 2rem;
`;


export default class Navbar extends Component {
    render() {
        return (
            <Wrapper className="">
                H.A.R.I. - Health Assurance for Rural India
            </ Wrapper>
        )
    }
}
