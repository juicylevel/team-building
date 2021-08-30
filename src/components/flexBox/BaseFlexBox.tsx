import { Box, BoxProps } from '@material-ui/core';
import { styled, Theme } from '@material-ui/core/styles';

export type BaseFlexBoxProps = BoxProps & {
    spacing?: number;
};

const defaultProps: BaseFlexBoxProps = {
    spacing: 0,
    display: 'flex',
};

const getMarginSide = (flexDirection: string): string =>
    flexDirection === 'column' ? 'marginBottom' : 'marginRight';

const BaseFlexBox = styled(({ spacing, ...other }) => <Box {...other} />)(
    ({
        theme,
        flexDirection,
        spacing,
    }: { theme: Theme } & BaseFlexBoxProps) => ({
        '& > *:not(:last-child)': {
            [getMarginSide(flexDirection)]: theme.spacing(spacing!),
        },
    })
);

BaseFlexBox.defaultProps = defaultProps;

export default BaseFlexBox;
