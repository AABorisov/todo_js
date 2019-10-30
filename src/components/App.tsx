import * as React from 'react';
import AddTask from '../containers/AddTask';
import Tasks from '../containers/Tasks';

import style = require('./style.scss');

const App: React.FC<{}> = () => {
  return (
    <div className={style.app}>
      <header className={style.header}>ToDo List</header>
      <main className={style.main}>
        <AddTask />
        <Tasks />
      </main>
      <footer className={style.footer}>©2019</footer>
    </div>
  );
};

export default App;
