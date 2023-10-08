import React from 'react';
import { observer } from 'mobx-react-lite';
import { debounce } from 'ts-debounce';
import { appStore } from '../../store';
import styles from './styles.module.scss';

export const Search = observer(() => {
    const { ordersCount, onSearch } = appStore;

    return (
        <div className={styles['container']}>
            <input
                type='number'
                placeholder='Enter price...'
                className={styles['input']}
                onChange={debounce(e => onSearch(e.target.value), 400)}
            />
            
            {ordersCount !== undefined && <span>Records found: {ordersCount}</span>}
        </div>
    );
});