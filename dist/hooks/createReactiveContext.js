import { createContext, createSignal } from "solid-js";
export default function createReactiveContext(initialValue, reducer) {
    const [state, setState] = createSignal(initialValue);
    const Context = createContext(state);
    function dispatch(action) {
        setState((prev) => reducer(prev, action));
    }
    return [Context, dispatch, state];
}
