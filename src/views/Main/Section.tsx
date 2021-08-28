import { styled } from '@material-ui/core/styles';

type SectionProps = {
    color?: string;
};

const Section = styled('section')({
    height: '100vh',
    backgroundColor: (props: SectionProps) => props.color || '#fff',
});

export default Section;
