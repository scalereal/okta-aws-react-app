import { format, utcToZonedTime } from 'date-fns-tz';

export const formatAsTimestamp = (timestamp: string, timestampFormat = 'MM/dd/yyyy hh:mm:ss', timeZone = 'America/New_York'): string => {
    const dateObj = new Date(timestamp);
    if (dateObj instanceof Date && !isNaN(dateObj.getTime())) {
        const usDate = utcToZonedTime(dateObj, timeZone);
        return format(usDate, timestampFormat);
    }
    return '';
};
