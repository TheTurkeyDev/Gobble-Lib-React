import styled, { keyframes } from 'styled-components';

const SpinnerSpin = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const SpinnerFade = keyframes`
    20% {
        opacity: .1;
    }
    40% {
        opacity: 1;
    }
    60% {
        opacity: .1;
    }
`;

export const Loading = styled.div`
    position: relative;
    margin: auto;
    margin-bottom: 50px;
    box-sizing: border-box;
    background-clip: padding-box;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    border: 4px solid rgba(255, 255, 255, 0.1);
    mask: linear-gradient(rgba(0, 0, 0, 0.1), #000000 90%);
    transform-origin: 50% 60%;
    transform: perspective(200px) rotateX(66deg);

    &:before, &:after {
        content: "";
        position: absolute;
        margin: -4px;
        box-sizing: inherit;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        opacity: .05;
        border: inherit;
        border-color: transparent;
        animation: ${SpinnerSpin} 1.2s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, ${SpinnerFade} 1.2s linear infinite;
    }

    &:before {
        border-top-color: #66e6ff;
    }

    &:after {
        border-top-color: #f0db75;
        animation-delay: 0.3s;
    }
`;