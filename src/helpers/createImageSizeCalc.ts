import { getImageSize } from 'helpers';
import { Size } from 'types';

const createImageSizeCalc = (origin: Size) => {
    return (requestWidth: number) => getImageSize(origin, requestWidth);
};

export default createImageSizeCalc;
