import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';
import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Strings, Resources } from '../public/Const';
import Image from 'next/image';
import Spacer from './spacer';
import IconButton from './iconButton.js';

interface SiteHeaderProps {
    showTitle: boolean;
    showSubitleWithTitle: boolean;
}

const SiteHeader: FC<SiteHeaderProps> = (props) => {
    const router = useRouter();
    const currentPath = router.pathname;

    const isBlogActive = currentPath === '/' || currentPath.startsWith('/blog');
    const isOwnerActive = currentPath === '/owner' || currentPath.startsWith('/owner') || currentPath.startsWith('/portfolio');

    // Determine if we should show the title (always show for consistency)
    const showTitle = true; // Override prop to always show title per requirement
    const showSubtitle = props.showSubitleWithTitle;

    return (
        <header className={styles.siteHeader}>
            <div className={showSubtitle ? styles.siteHeaderLeftColumn : styles.siteHeaderLeft}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* <Image
                        priority
                        src={Resources.siteIcon}
                        alt={Strings.siteHost}
                        className={utilStyles.borderCircle}
                        height={40}
                        width={40}
                    />
                    <Spacer axis="horizontal" size={16} /> */}
                    <Link href="/" className={utilStyles.siteTitle}>
                        {Strings.siteTitle}
                    </Link>
                </div>
                {showSubtitle && (
                    <p className={styles.siteSubtitle}>
                        {Strings.siteDescription}
                    </p>
                )}
            </div>
            <nav className={styles.siteHeaderRight}>
                <Link
                    href="/"
                    className={`${styles.navLink} ${isBlogActive ? styles.navLinkActive : ''}`}
                >
                    Блог
                </Link>
                <Link
                    href="/owner"
                    className={`${styles.navLink} ${isOwnerActive ? styles.navLinkActive : ''}`}
                >
                    Об авторе
                </Link>
                <IconButton
                    icon="/images/telegram_icon.svg"
                    backgroundColor="transparent"
                    alt="Telegram-канал 'Атмосфера Ботаника'"
                    onClick={() => window.open('https://t.me/nerd_vibe')}
                />
            </nav>
        </header>
    );
};

export default SiteHeader;