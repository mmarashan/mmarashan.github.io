import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';
import IconButton from './iconButton.js'

interface ContactsStageProps {
    contacts: Contact[]
}

export default function ContactsStage({ contacts }: ContactsStageProps) {
    return (
    <div className={styles.horizontalContainer}>
        {
            contacts.map((contact) => (
                <div key={contact.title} className={utilStyles.paddingHorizontal16px}>
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