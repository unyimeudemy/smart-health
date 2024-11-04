import React from 'react';
import styled from 'styled-components';


const LogoIcon = () => {

    return (
        <LogoContainer>
            <LogoText>A1</LogoText>
        </LogoContainer>
    );

}

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5b700;
    width: 50px;
    height: 50px;
    border-radius: 5px;
`

const LogoText = styled.div`
    color: #132639;
    font-family: Sans-serif;
`

export default LogoIcon;