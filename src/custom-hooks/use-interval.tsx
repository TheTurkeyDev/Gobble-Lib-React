import { useRef, useEffect } from 'react';

type UseIntervalProps = {
    readonly delay: number
    readonly callback: () => void
}
export const useInterval = ({ callback, delay }: UseIntervalProps) => {
    const savedCallback = useRef<() => void>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current && savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};
