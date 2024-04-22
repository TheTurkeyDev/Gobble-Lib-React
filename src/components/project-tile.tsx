import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Headline6, Subtitle2 } from '../typography/typography';

const SlideInFromBot = keyframes`
    0% {
        opacity: 0;
        transform: translate(0px, 600px);
    }
    50% {
        opacity: 0.25;
    }
    100% {
        opacity: 1;
        transform: translate(0px, 0px);
    }
`;

type ProjectWrapperProps = {
    readonly $size: number
};
const ProjectWrapper = styled.div<ProjectWrapperProps>`
    width: ${({ $size }) => $size + 10}px;
    min-width: ${({ $size }) => $size + 10}px;
    max-width: ${({ $size }) => $size + 10}px;
    height: ${({ $size }) => $size + 10}px;
    min-height: ${({ $size }) => $size + 10}px;
    max-height:${({ $size }) => $size + 10}px;
    position: relative;
    animation: ${SlideInFromBot} 1.5s ease-out;

    &:hover {
        cursor: pointer;
    }
`;

type ProjectNameProps = {
    readonly backgroundColor?: string
};
const ProjectName = styled.div<ProjectNameProps>`
    background-color: ${({ backgroundColor }) => backgroundColor ?? ''};
    position: absolute;
    z-index: 1;
    width: 100%;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition-duration: 0.5s;
    color: #ffffff;
    ${ProjectWrapper}:hover & {
        opacity: 1;
        bottom: 40px;
    }
    
    display: grid;
    grid-template-rows: auto auto;
`;

const ProjectImage = styled.img`
    opacity: 1;
    transition-duration: 0.5s;
    object-fit: contain;
    ${ProjectWrapper}:hover & {
        opacity: 0.2;
    }
`;

type ProjectTileProps = {
    readonly link: string
    readonly image: string
    readonly title: string
    readonly subtitle: string
    readonly size?: number
    readonly backgroundColor?: string
    readonly textBackgroundColor?: string
}

export const ProjectTile = ({ link, image, title, subtitle, size, backgroundColor, textBackgroundColor }: ProjectTileProps) => {
    const navigate = useNavigate();

    const onClick = () => {
        if (link.startsWith('http'))
            window.open(link, '_blank');
        else
            navigate(link);
    };

    const sizeToUse = size ?? 190;

    return (
        <ProjectWrapper onClick={onClick} $size={sizeToUse} style={{ backgroundColor: backgroundColor ?? '' }}>
            <ProjectImage loading='lazy' src={image} width={sizeToUse} height={sizeToUse} />
            <ProjectName backgroundColor={textBackgroundColor}>
                <Headline6>{title}</Headline6>
                <Subtitle2>{subtitle}</Subtitle2>
            </ProjectName>
        </ProjectWrapper>
    );
};