import * as React from 'react';
import {CommonActions} from '@react-navigation/native';

export const isMountedRef = React.createRef();

export const navigationRef = React.createRef();

export function navigate(name, params) {
    if (isMountedRef.current && navigationRef.current) {
        setTimeout(() => navigationRef.current?.navigate(name, params));
    }
}

export function dispatch(route) {
    if (isMountedRef.current && navigationRef.current) {
        navigationRef.current?.dispatch(route);
    }
}

export function getCurrentRoute() {
    let rootState = navigationRef.current.getRootState();
    let route = rootState.routes[rootState.index];

    while (route.state) {
        route = route.state.routes[route.state.index];
    }
    return route;
}

export function navigateRoute(route) {
    dispatch(CommonActions.navigate(route));
}

export function dangerouslyGetState() {
    return navigationRef.current?.dangerouslyGetState();
}
