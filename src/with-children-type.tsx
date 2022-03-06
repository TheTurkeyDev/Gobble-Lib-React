import { ReactChild } from 'react';

export type WithChildren = {
    readonly children?: ReactChild | readonly ReactChild[]
}