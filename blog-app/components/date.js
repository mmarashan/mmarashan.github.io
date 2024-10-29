import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  try {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
  } catch (err) {
    console.error(err)
    return <p>{dateString}</p>
  }
}