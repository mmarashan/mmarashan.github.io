import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';
import React, { FC } from 'react';
import { SiteContacts, Strings } from '../public/Const';
import ContactsStage from './ContactsStage';

const SiteFooter: FC = () => {
    return (
        <div className={styles.siteFooter}>
            <div className={styles.horizontalContainer}>
                <ContactsStage contacts={SiteContacts}/> 
            </div>
        </div>
    )
};
export default SiteFooter;