import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';
import IconButton from './iconButton.js'

export default function ContactsStage({ contacts }) {
    return (
    <div className={styles.horizontalContainer}>
        {
            contacts.map((contact) => (
                <div key={contact.title} className={utilStyles.paddingHorizontal8px}>
                <IconButton
                    icon={contact.icon}
                    backgroundColor="transparent"
                    alt={contact.title}
                    onClick={ () => window.open(contact.url) }
                />
            </div>
            ))
        }
    </div>
  )
}