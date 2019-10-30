import * as React from 'react';
import AddTask from '../containers/AddTask';
import Tasks from '../containers/Tasks';

const App: React.FC<{}> = () => {
  return (
    <div>
      <AddTask />
      <Tasks />
    </div>
  );
};

export default App;
