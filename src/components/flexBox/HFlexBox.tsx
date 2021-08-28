import BaseFlexBox, { BaseFlexBoxProps } from './BaseFlexBox';

const HFlexBox: React.FC<BaseFlexBoxProps> = (props) => (
    <BaseFlexBox flexDirection="row" {...props} />
);

export default HFlexBox;
