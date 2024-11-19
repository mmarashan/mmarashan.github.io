import { parseISO, format } from 'date-fns';
import utilStyles from '../styles/utils.module.css';

export default function Date({ dateString }) {
  try {
    const date = parseISO(dateString);
    return <time className={utilStyles.date} dateTime={dateString}>{format(date, 'dd.MM.yyyy')}</time>;
  } catch (err) {
    console.error(err)
    return <p>{dateString}</p>
  }
}
