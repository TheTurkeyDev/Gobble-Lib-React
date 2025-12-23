import { useRef, useEffect } from 'react';

export const usePrevious = <T,>(value: T) => {
    const ref = useRef<T>(value);

    // eslint-disable-next-line functional/immutable-data
    useEffect(() => { ref.current = value; }, [value]);

    return ref.current;
};
