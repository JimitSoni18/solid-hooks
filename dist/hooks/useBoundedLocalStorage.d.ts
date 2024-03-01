import { Setter } from "solid-js";
export default function useBoundedLocalStorage<T>(key: string, initialValue: T): ((setter: Setter<T>) => void)[];
