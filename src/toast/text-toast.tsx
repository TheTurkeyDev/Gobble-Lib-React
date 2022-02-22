import { Body2 } from '../typography';

type TextToastProps = {
    readonly text: string
}

export const TextToast = ({ text }: TextToastProps) => {
    return (
        <div>
            <Body2>{text}</Body2>
        </div>
    );
};