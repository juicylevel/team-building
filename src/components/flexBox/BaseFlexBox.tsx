import { Box, BoxProps } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
// import theme from 'theme';

export type BaseFlexBoxProps = BoxProps & {
    spacing?: number;
};

const defaultProps: BaseFlexBoxProps = {
    spacing: 0,
    display: 'flex',
};

// const getMarginSide = (flexDirection: string): string =>
//     flexDirection === 'column' ? 'marginBottom' : 'marginRight';

const BaseFlexBox = styled(({ spacing, ...rest }) => <Box {...rest} />)({
    '> *:not(:last-child)': {
        marginBottom: '3rem',
    },
});

// [(props: BaseFlexBoxProps) => getMarginSide(props.flexDirection)]: `${theme.spacing((props: BaseFlexBoxProps) => props.spacing)}px`;

BaseFlexBox.defaultProps = defaultProps;

export default BaseFlexBox;
