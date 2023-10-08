import React from 'react';
import { OrderType } from '../../types';
import { getEventColumnColor } from '../../helpers/getRowColor';
import styles from './styles.module.scss';

type Props = {
    order: OrderType;
}

export const TableRow = ({ order }: Props) => {
    return (
        <tr>
            <td
                className={styles['event-name']}
                style={{ color: getEventColumnColor(order.event_name) }}
            >
                {order.event_name}
            </td>
            <td className={styles['item-name']}>{order.item}</td>
            <td className={styles['customer']}>{order.customer}</td>
            <td className={styles['price']}>${order.price.toFixed(2)}</td>
            <td className={styles['destination']}>{order.destination}</td>
        </tr>
    );
};