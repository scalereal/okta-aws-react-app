import { Pagination, Table } from '@medly-components/core';
import { FC, memo, useCallback, useEffect, useState } from 'react';
import { columns } from './columns';
import { Container } from './FileUploadHistoryTable.styled';
import { Props } from './types';

export const FileUploadHistoryTable: FC<Props> = memo(({ fileList, isLoading }) => {
    const [data, setData] = useState(fileList),
        [pageNumber, setPageNumber] = useState(1),
        onPageNumberChange = useCallback(value => {
            setPageNumber(value);
        }, []),
        itemsPerPage = 10;

    useEffect(() => {
        setData(fileList.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage));
    }, [fileList, pageNumber]);

    return (
        <Container alignItems="center" flexDirection="column">
            <Table
                totalItems={fileList.length}
                withMinimap
                width="100%"
                {...{
                    isLoading,
                    columns,
                    data
                }}
            />
            <Pagination
                activePage={pageNumber}
                totalItems={fileList.length || 0}
                itemsPerPage={itemsPerPage}
                onPageClick={onPageNumberChange}
            />
        </Container>
    );
});

FileUploadHistoryTable.displayName = 'File Upload History Table';
