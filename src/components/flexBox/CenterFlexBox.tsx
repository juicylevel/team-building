import BaseFlexBox, { BaseFlexBoxProps } from './BaseFlexBox';

const CenterFlexBox: React.FC<BaseFlexBoxProps> = (props) => (
    <BaseFlexBox
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        {...props}
    />
);

export default CenterFlexBox;
