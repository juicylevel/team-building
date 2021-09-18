import { useMemo } from 'react';
import { map } from 'lodash';
import { getKeyValue } from 'helpers';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

type Column = {
    field: string;
};

type TableProps<TData> = {
    columns: Column[];
    data: TData[];
};

const useStyles = makeStyles({
    table: {
        width: '100%',
        '& td': {
            padding: '25px 10px 20px 0',
        },
        '& > tbody > tr:not(:last-child) > td': {
            borderBottom: '1px solid #eeeeee',
        },
    },
});

const Table = function <TData>({ columns, data }: TableProps<TData>) {
    const classes = useStyles();

    const rows = useMemo(() => {
        return map(data, (item: TData) => {
            const cells = map(columns, (column: Column) => {
                const cell = getKeyValue(item, column.field);
                return (
                    <td key={column.field}>
                        <Typography variant="h5">{cell}</Typography>
                    </td>
                );
            });
            const id = getKeyValue(item, 'id');
            return <tr key={id}>{cells}</tr>;
        });
    }, [columns, data]);

    return (
        <table className={classes.table}>
            <tbody>{rows}</tbody>
        </table>
    );
};

export default Table;
