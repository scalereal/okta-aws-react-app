import { format, utcToZonedTime } from 'date-fns-tz';

export const formatAsNYZonedDate = (timestamp: string | Date | number, dateFormat = 'MM/dd/yyyy'): string => {
    const nyTimeZone = 'America/New_York';
    const dateObj = new Date(timestamp);
    if (dateObj instanceof Date && !isNaN(dateObj.getTime())) {
        const usDate = utcToZonedTime(dateObj, nyTimeZone);
        return format(usDate, dateFormat);
    }
    return '';
};
