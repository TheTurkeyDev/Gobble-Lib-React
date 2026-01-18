import { Meta, StoryObj } from '@storybook/react-vite';
import { Input, InputsWrapper } from '../../form';
import { useState } from 'react';

export default {
    title: 'GobbleLib/Form/Input',
    component: Input,
} as Meta<typeof Input>;

export const Template: StoryObj<typeof Input> = {

    render: args => {
        const [value, setValue] = useState('');
        return (
            <InputsWrapper>
                <Input label={args.label ?? 'Default'} disabled={args.disabled} value={args.value ?? value} onChange={e => setValue(e.target.value)} />
                <Input label={args.label ?? 'Default'} disabled={args.disabled} value={args.value ?? value} onChange={e => setValue(e.target.value)} style={{width: '35px'}} />
            </InputsWrapper>
        );
    }
};

