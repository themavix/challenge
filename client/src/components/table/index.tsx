import React from 'react';
import { observer } from 'mobx-react-lite';
import { TableRow } from '../table-row';
import { appStore } from '../../store';
import styles from './styles.module.scss';

export const Table = observer(() => {
    return (
        <div className={styles['container']}>
            <table className={styles['header']}>
                <thead>
                    <tr>
                        <th className={styles['event-name']}>Event</th>
                        <th className={styles['item-name']}>Item</th>
                        <th className={styles['customer']}>Customer</th>
                        <th className={styles['price']}>Price</th>
                        <th className={styles['destination']}>Destination</th>
                    </tr>
                </thead>
            </table>

            <div className={styles['table-wrapper']}>
                <table className={styles['table']}>
                    <tbody>
                        {appStore.orders.map(order => <TableRow key={order.id} order={order} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
});