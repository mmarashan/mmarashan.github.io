import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';
import React, { FC } from 'react';
import Link from 'next/link';
import { Strings } from '../public/Const';

const SiteFooter: FC = () => {
    return (
        <div className={styles.siteFooter}>
            <div className={styles.horizontalContainer}>
                <Link className={`${utilStyles.footerText} ${utilStyles.paddingHorizontal8px}`} href={"/owner"}>{Strings.aboutOwner}</Link>
            </div>
        </div>
    )
};
export default SiteFooter;