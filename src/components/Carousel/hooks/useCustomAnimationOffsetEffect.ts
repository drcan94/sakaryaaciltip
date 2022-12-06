import {useEffect} from 'react';
import {Embla} from "@mantine/carousel";

const useCustomAnimationOffsetEffect = (
    embla: Embla | null | undefined,
    transitionDuration: number,
    imageWidth?: number,
) => {
    useEffect(() => {
        if (embla) {
            window.setTimeout(() => {
                embla.reInit();
            }, transitionDuration);
        }
    }, [embla, transitionDuration, imageWidth]);
}

export default useCustomAnimationOffsetEffect