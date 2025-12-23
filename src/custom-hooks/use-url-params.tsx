import { useLocation } from 'react-router-dom';

export const useUrlParams = () => {
    const location = useLocation();
    // eslint-disable-next-line functional/prefer-readonly-type
    const params: { [key: string]: string } = {};
    if (location && location.search) {
        location.search.substring(1).split('&').forEach((element: string) => {
            const keyVal = element.split('=');
            // eslint-disable-next-line functional/immutable-data
            params[keyVal[0]] = keyVal[1];
        });
    }
    return params;
};