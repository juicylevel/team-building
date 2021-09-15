import { CssSize, Size } from 'types';

const getImageSize = (origin: Size, requestWidth: number): CssSize => {
    return {
        width: requestWidth + 'px',
        height: (requestWidth * origin.height) / origin.width + 'px',
    };
};

export default getImageSize;
