import { Meta, StoryObj } from '@storybook/react-vite';
import { InputsWrapper, ToggleSwitch } from '../form';
import { useState } from 'react';

export default {
    title: 'GobbleLib/Form/ToggleSwitch',
    component: ToggleSwitch,
} as Meta<typeof ToggleSwitch>;

export const Template: StoryObj<typeof ToggleSwitch> = {

    render: args => {
        const [checked, setChecked] = useState(false);
        return (
            <InputsWrapper>
                <ToggleSwitch label={args.label ?? 'Default'} disabled={args.disabled} checked={args.checked ?? checked} onClick={() => setChecked(!checked)} />
            </InputsWrapper>
        );
    }
};

