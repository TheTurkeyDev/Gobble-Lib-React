import { Headline1, Headline4 } from '../typography/typography';

export const NotFound = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Headline1>404!</Headline1>
            <Headline4>Sorry! That page could not be found!</Headline4>
        </div>
    );
};