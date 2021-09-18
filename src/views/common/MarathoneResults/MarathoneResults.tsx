import { Table } from 'components';
import { VFlexBox } from 'components/flexBox';
import { ContentSectionTitle } from 'views/common';
import { Section } from 'views/common/layout';
import { MarathonResult } from 'types';
import { ReactNode } from 'react';
import { Typography } from '@material-ui/core';

const columns = [
    {
        field: 'order',
    },
    {
        field: 'name',
    },
    {
        field: 'result',
    },
];

type MarathoneResultsProps = {
    title: ReactNode | string;
    data: MarathonResult[];
    note?: ReactNode | string;
};

const MarathoneResults: React.FC<MarathoneResultsProps> = ({
    title,
    data,
    note,
}) => (
    <Section>
        <VFlexBox
            spacing={10}
            height="100%"
            alignItems="center"
            justifyContent="center"
        >
            <ContentSectionTitle variant="h2">{title}</ContentSectionTitle>
            <Table<MarathonResult> columns={columns} data={data} />
            {note && (
                <Typography variant="body1" color="textSecondary">
                    * {note}
                </Typography>
            )}
        </VFlexBox>
    </Section>
);

export default MarathoneResults;
