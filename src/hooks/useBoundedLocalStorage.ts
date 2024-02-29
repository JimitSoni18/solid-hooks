import { createSignal, onMount, onCleanup, Setter } from "solid-js";

export default function useBoundedLocalStorage<T>(
	key: string,
	initialValue: T,
) {
	const [value, setValue] = createSignal<T>(initialValue);

	onMount(() => {
		localStorage.setItem(key, JSON.stringify(initialValue));
	});

	onCleanup(() => {
		localStorage.removeItem(key);
	});

	function wrappedSetValue(setter: Setter<T>) {
		setValue(setter);
		localStorage.setItem("key", JSON.stringify(value));
	}

	return [value, wrappedSetValue];
}
