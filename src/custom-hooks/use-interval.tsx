import { useRef, useEffect } from 'react';

export const useInterval = (callback: () => void, delay: number) => {
    const savedCallback = useRef<() => void>(callback);

    useEffect(() => {
        // eslint-disable-next-line functional/immutable-data
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            if (savedCallback.current)
                savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};
