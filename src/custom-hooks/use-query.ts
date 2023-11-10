import { useState } from 'react';


type AdditionalOptions<T> = {
    readonly requestData?: RequestInit
    readonly shouldThrow?: boolean
}

type ExtraData<T> = {
    readonly error: string | undefined
}

export function useQuery<T>(url: string, options?: AdditionalOptions<T>): readonly [(body?: string, pathParams?: string, queryParams?: string) => Promise<T | null>, boolean, ExtraData<T>] {
    const [querying, setQuerying] = useState(false);
    const [error, setError] = useState<string>();

    const query = async (body?: string, pathParams?: string, queryParams?: string) => {
        setQuerying(true);
        const reqData = options?.requestData ?? {};
        reqData.body = body;
        return fetch(`${url}${pathParams ? `/${pathParams}` : ''}${queryParams ? `?${queryParams}` : ''}`, reqData)
            .then(r => r.json().then(data => ({ status: r.status, body: data })))
            .then(({ status, body }) => {
                setQuerying(false);
                if (status === 200) {
                    return body as T;
                }
                else {
                    setError(body.message);
                    if (options?.shouldThrow) {
                        throw ({ status, message: body.message });
                    }
                }
                return null;
            }).catch(e => {
                setQuerying(false);
                throw e;
            });
    };

    return [query, querying, { error }];
};