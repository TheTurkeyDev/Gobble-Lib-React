import { useEffect, useState } from 'react';

type AdditionalOptions<T> = {
    readonly requestData?: RequestInit
    readonly skip?: boolean
    readonly onComplete?: (data: T) => void
    readonly onError?: (message: string) => void
}

type ExtraData<T> = {
    readonly error: string | undefined
    readonly setData: (t: T) => void;
    readonly resetData: () => void;
    readonly refetch: (newData?: T) => void;
    readonly isDirty: boolean
}

export function useFetch<T>(url: string, options?: AdditionalOptions<T>): readonly [T | undefined, boolean, ExtraData<T>] {
    const [fetching, setFetching] = useState(false);
    const [responseData, setResponseData] = useState<T>();
    const [data, setCurrentData] = useState<T>();
    const [error, setError] = useState<string>();
    const [refetchToggle, doRefetch] = useState(false);
    const [isDirty, setDirty] = useState<boolean>(false);

    const refetch = () => doRefetch(old => !old);

    const resetData = (newData?: T) => {
        setCurrentData(newData ?? responseData);
        if(newData)
            setResponseData(newData)
        setDirty(false);
    };

    const setData = (d: T) => {
        setCurrentData(d);
        setDirty(true);
    };

    useEffect(() => {
        if (options?.skip)
            return;

        const controller = new AbortController();

        const init = {
            signal: controller.signal,
            ...options?.requestData
        };

        setFetching(true);
        fetch(url, init)
            .then(r => r.json().then(data => ({ status: r.status, body: data })).catch(() => ({ status: r.status, body: null })))
            .then(({ status, body }) => {
                if (status === 200) {
                    options?.onComplete && options?.onComplete(body as T);
                    setData(body as T);
                    setResponseData(body as T);
                }
                else {
                    options?.onError && options?.onError(body.message);
                    setError(body.message);
                }

                setFetching(false);
            }).catch(e => {
                if (e.name === 'AbortError') {
                    //Ignore
                    return;
                }
                console.log(e);
                setError('An error has occurred!');
                setFetching(false);
            });

        return () => {
            controller.abort();
        };
    }, [options?.skip, refetchToggle]);

    return [data, fetching, { error, setData, resetData, refetch, isDirty }];
};