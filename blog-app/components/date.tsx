import { parseISO, format } from 'date-fns';
import utilStyles from '../styles/utils.module.css';
import React, { FC } from 'react';

interface DateProps {
  dateString: string;
}

const Date: FC<DateProps> = ({ dateString }) => {
  try {
    const date = parseISO(dateString);
    return <time className={utilStyles.date} dateTime={dateString}>{format(date, 'dd.MM.yyyy')}</time>;
  } catch (err) {
    console.error(err)
    return <p>{dateString}</p>
  }
};
export default Date;