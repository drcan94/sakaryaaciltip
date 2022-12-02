import {RefObject, useRef, useState} from "react";


export const getRefValue = <Current>(ref: RefObject<Current>) => {
    return ref.current as Current
}

export const useStateRef = <S>(defaultValue: S): [S, (value: S) => void, RefObject<S>] => {
    const ref = useRef(defaultValue)
    const [state, _setState] = useState<S>(defaultValue)
    const setState = (value: S) => {
        _setState(value);
        ref.current = value
    }
    return [state, setState, ref]
}