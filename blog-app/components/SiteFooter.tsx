import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';
import React, { FC } from 'react';
import Link from 'next/link';
import { SiteContacts, Strings } from '../public/Const';
import ContactsStage from './ContactsStage';
import Spacer from './spacer';

const SiteFooter: FC = () => {
    return (
        <div className={styles.siteFooter}>
            <div className={styles.horizontalContainer}>
                <Link className={`${utilStyles.footerText} ${utilStyles.paddingHorizontal8px}`} href={"/owner"}>{Strings.aboutOwner}</Link>
                <Spacer axis="horizontal" size={16} />
                <ContactsStage contacts={SiteContacts}/> 
            </div>
        </div>
    )
};
export default SiteFooter;