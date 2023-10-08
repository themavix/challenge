import React from 'react';
import { Search } from './components/search';
import { Table } from './components/table';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles['container']}>
      <Search />
      <Table />
    </div>
  );
};