import axios from 'axios';
import bt_notification from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';

import './styles.css'

type Props = {
    saleId: number;
}

function handleClick(id : number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        console.log("SUCESSO");
    })
}

function NotificationButton( {saleId} : Props) {
    return (
        <div className="dsmeta-red-btn"n onClick={() => handleClick(saleId)}>
            <img src={bt_notification} alt="Notificar" />
        </div>    
    )
}

export default NotificationButton