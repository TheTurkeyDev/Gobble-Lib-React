
import styled, { ThemeProps } from 'styled-components';
import { BaseTheme } from '../theme';
import { Label } from './label';


const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
`;

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.color};
    transition: .4s;
    border-radius: 34px;

    &:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.on};
        transition: .4s;
        border-radius: 50%;
    }
`;

const SliderInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked+${Slider} {
        background-color: ${({ theme }: ThemeProps<BaseTheme>) => theme.primary.color};
    }
        
    &:focus+${Slider} {
        box-shadow: 0 0 1px ${({ theme }: ThemeProps<BaseTheme>) => theme.primary.color};
    }

    &:checked+${Slider}:before {
        transform: translateX(26px);
    }
`;

type ToggleSwitchProps = {
    readonly label: string
    readonly checked: boolean
    readonly onClick: () => void
}

export const ToggleSwitch = ({ label, checked, onClick }: ToggleSwitchProps) => {
    return (
        <>
            <Label>
                {label}
            </Label>
            <Switch>
                <SliderInput type='checkbox' checked={checked} onChange={() => { }} />
                <Slider onClick={onClick} />
            </Switch>
        </>
    );
};