import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';
import IconButton from './iconButton.js'

export default function ContactsStage({ email, githubUrl }) {
    return (
    <div className={styles.horizontalContainer}>
        <div className={utilStyles.paddingHorizontal8px}>
            <IconButton
                icon="/images/yandex_mail_icon.svg"
                backgroundColor="transparent"
                onClick={ () => window.open("mailto:"+{email}) }
            />
        </div>
        <div className={utilStyles.paddingHorizontal8px}>
            <IconButton
                icon="/images/github-mark.svg"
                backgroundColor="transparent"
                onClick={ () => window.open(githubUrl) }
            />
        </div>
    </div>
  )
}