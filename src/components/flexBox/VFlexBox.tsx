import BaseFlexBox, { BaseFlexBoxProps } from './BaseFlexBox';

const VFlexBox: React.FC<BaseFlexBoxProps> = (props) => (
    <BaseFlexBox flexDirection="column" {...props} />
);

export default VFlexBox;
