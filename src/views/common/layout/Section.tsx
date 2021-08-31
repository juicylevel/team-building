import { styled } from '@material-ui/core/styles';

type SectionProps = {
    color?: string;
};

const Section = styled('section')({
    backgroundColor: (props: SectionProps) => props.color || '#fff',
    '@media (min-height: 462px)': {
        height: '100vh',
    },
});

export default Section;
