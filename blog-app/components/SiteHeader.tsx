import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';
import React, { FC } from 'react';
import Link from 'next/link';
import { Strings, Resources } from '../public/Const';
import Image from 'next/image';
import Spacer from './spacer';

interface SiteHeaderProps {
    showTitle: string;
    showSubitleWithTitle: string;
}

const SiteHeader: FC = (props: SiteHeaderProps) => {
    return (
        <h1>
            {props.showTitle && 
            <div className={`${utilStyles.textAlignCenter}`}>
                <div className={styles.horizontalContainer}>
                    <Image
                        priority
                        src={Resources.siteIcon}
                        alt={Strings.siteHost}
                        className={utilStyles.borderCircle}
                        height={40}
                        width={40}/>
                    <Spacer axis="horizontal" size={16} /> 
                    <Link href='/' className={`${utilStyles.siteTitle}`}>{Strings.siteTitle}</Link>
                </div>
                {props.showSubitleWithTitle && <p className={utilStyles.siteDescription}>{Strings.siteDescription}</p>}
            </div>
            }
        </h1>
    )
};
export default SiteHeader;