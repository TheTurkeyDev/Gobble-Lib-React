import { styled, useTheme } from 'styled-components';
import { Icon } from '../../components/icon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Body1, Body2 } from '../../typography';

const StyledCollapsedDropDown = styled.div`
    width: 100%;
`;

const NavLinkBase = styled.div`
    font-size: 15px;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    padding: 15px 20px;
`;

const MainOption = styled.div`
    padding: 0 16px;
    display: grid;
    grid-template-columns: 20px 1fr 20px;
    align-items: center;
    justify-items: center;
`;

const OptionsWrapper = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-left: 3px solid ${({ theme }) => theme.primary.color};
`;

const OptionLine = styled.div`
    width: calc(100% - 8px);
    height: 35px;
    padding-left: 8px;
    background-color: ${({ theme }) => theme.surface.color};
    color: ${({ theme }) => theme.surface.on};
    font-weight: 700;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
`;

const Text = styled(Body1)`
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    text-wrap: nowrap;
`;

const Text2 = styled(Body2)`
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    text-wrap: nowrap;
`;

type CollapsedDropDownProps = {
    readonly text: string
    readonly options: { readonly [key: string]: string }
    readonly closeNav: () => void
}

export const CollapsedDropDown = ({ text, options, closeNav }: CollapsedDropDownProps) => {
    const navigate = useNavigate();
    const theme = useTheme();

    const [expanded, setExpanded] = useState(false);

    const goTo = (to: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        navigate(to);
        setExpanded(false);
        closeNav();
        e.stopPropagation();
    };

    return (
        <StyledCollapsedDropDown onClick={() => setExpanded(old => !old)}>
            <MainOption>
                <div />
                <NavLinkBase style={{ color: expanded ? theme.primary.color : theme.navbar.on }}>
                    <Text>{text}</Text>
                </NavLinkBase>
                <Icon className={expanded ? 'fas fa-minus' : 'fas fa-plus'} />
            </MainOption>
            <OptionsWrapper style={{ height: expanded ? 'fit-content' : '0' }}>
                {
                    Object.keys(options).map(o => (
                        <OptionLine key={o} onClick={goTo(options[o])}>
                            <Text2>{o}</Text2>
                        </OptionLine>
                    ))
                }
            </OptionsWrapper>
        </StyledCollapsedDropDown >
    );
};