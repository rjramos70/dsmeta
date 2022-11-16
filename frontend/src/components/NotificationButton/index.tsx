import bt_notification from '../../assets/img/notification-icon.svg'

import './styles.css'

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={bt_notification} alt="Notificar" />
        </div>    
    )
}

export default NotificationButton