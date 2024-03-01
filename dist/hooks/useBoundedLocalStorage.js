import { createSignal, onMount, onCleanup } from "solid-js";
export default function useBoundedLocalStorage(key, initialValue) {
    const [value, setValue] = createSignal(initialValue);
    onMount(() => {
        localStorage.setItem(key, JSON.stringify(initialValue));
    });
    onCleanup(() => {
        localStorage.removeItem(key);
    });
    function wrappedSetValue(setter) {
        setValue(setter);
        localStorage.setItem("key", JSON.stringify(value));
    }
    return [value, wrappedSetValue];
}
