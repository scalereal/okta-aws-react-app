import { Table } from '@medly-components/core';
import { GetComponentProps } from '@medly-components/utils';

export type ComponentType = GetComponentProps<typeof Table>['columns'][0]['component'];
