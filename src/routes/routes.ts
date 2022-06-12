import { lazy } from 'react';
import React from 'react';
import NoLazy from '../pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface RouteI {
    path: string;
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: RouteI[];
}

export const routes: RouteI[] = [
    {
        path: '/lazyload',
        Component: lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../layout/LazyLayout')),
        name: 'LazyNested'
    },
    {
        path: '/no-lazy',
        Component: NoLazy,
        name: 'NoLazy'
    }
];
