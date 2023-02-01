import styled from 'styled-components';

const StyledIcon = styled.i`
    &:hover {
        cursor: pointer;
    }
`;
type IconProps = React.HTMLAttributes<HTMLElement> & {
    readonly className: string
}
export const Icon = ({ className, ...props }: IconProps) => (<StyledIcon className={className} {...props} />);