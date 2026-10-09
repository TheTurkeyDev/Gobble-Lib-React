import { WithChildren } from '../with-children-type';

type HStackProps = WithChildren & {
    readonly vCenter?: boolean
    readonly hCenter?: boolean
    readonly fitWidth?: boolean
    readonly gap?: number
    readonly pad?: number
    readonly style?: React.CSSProperties
}

export const HStack = ({ children, vCenter = false, hCenter = false, fitWidth = false, gap = 8, pad = 0, style }: HStackProps) => {
    return (
        <div style={{
            width: fitWidth ? 'auto' : `calc(100% - ${pad}px)`,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: `${gap}px`,
            alignItems: vCenter ? 'center' : '',
            justifyContent: hCenter ? 'center' : '',
            padding: `${pad}px`,
            ...(style ?? {})
        }}>
            {children}
        </div>
    );
};

type VStackProps = WithChildren & {
    readonly hCenter?: boolean
    readonly hStart?: boolean
    readonly centerText?: boolean
    readonly gap?: number
    readonly pad?: number
    readonly onClick?: () => void
    readonly style?: React.CSSProperties
}

export const VStack = ({ children, hCenter = false, hStart = false, gap = 8, pad = 0, onClick, style }: VStackProps) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: `${gap}px`,
            alignItems: hCenter ? 'center' : (hStart ? 'start' : ''),
            padding: `${pad}px`,
            ...(style ?? {})
        }} onClick={onClick}>
            {children}
        </div>
    );
};

type PageStackProps = WithChildren & {
    readonly fullWidth?: boolean
    readonly width?: number
    readonly gap?: number
    readonly pad?: number
    readonly style?: React.CSSProperties
}

export const PageStack = ({ children, fullWidth = false, width = 1200, gap = 8, pad = 16, style }: PageStackProps) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: `${gap}px`,
            padding: `${pad}px`,
            maxWidth: fullWidth ? '' : `${width}px`,
            marginInline: 'auto',
            ...(style ?? {})
        }}>
            {children}
        </div>
    );
};