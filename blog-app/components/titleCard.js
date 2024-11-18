import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import { strings } from '../public/const';

export default function TitleCard({ imageSrc, title, email }) {
    return (<li className={utilStyles.listItem}>
        <img
            src={imageSrc}
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={strings.myName}
        />
        <h1 className={utilStyles.heading2Xl}>{title}</h1>
        <br/>
        <small className={utilStyles.lightText}>
            <p><Link href={strings.emailLink}>{strings.emailTitle} {email}</Link></p>
        </small>
  </li>)
}