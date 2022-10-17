import { TimestampCell } from '@components/common';
import { TableColumnConfig } from '@medly-components/core';
import FileNameAndDownloader from './FileNameAndDownloader';

export const columns: TableColumnConfig[] = [
    { title: 'File name', field: 'fileName', component: FileNameAndDownloader },
    { title: 'Description', field: 'description' },
    { title: 'Uploaded by', field: 'uploaded-by-user-name' },
    { title: 'Upload date & time', field: 'uploaded-timestamp', component: TimestampCell }
];
