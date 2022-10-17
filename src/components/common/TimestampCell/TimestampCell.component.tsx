import { TableColumnConfig, Text } from '@medly-components/core';
import { formatAsTimestamp } from '@utils';
import React from 'react';

export const TimestampCell: Required<TableColumnConfig>['component'] = React.memo(({ data }) => <Text>{formatAsTimestamp(data)}</Text>);
TimestampCell.displayName = 'TimestampCell';
