import * as React from 'react';
import debounce from 'lodash-es/debounce';
import { TaskFilterState } from '../store/taskFilter/types';

import style = require('./style.scss');

const FILTER_DEBOUNCE_TIME = 1000;

interface FilterProps {
  taskFilter: TaskFilterState;
  setTaskFilter: Function;
}

const Filter: React.FC<FilterProps> = ({
  taskFilter: { filterTitle, filterImportance },
  setTaskFilter,
}) => {
  let title = filterTitle;
  let importance = filterImportance;

  const filterCallback = debounce(() => {
    if (filterTitle !== title || filterImportance !== importance) {
      setTaskFilter({ titleFilter: title, importanceFilter: importance });
    }
  }, FILTER_DEBOUNCE_TIME);

  function onTitleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    title = event.target.value;
    filterCallback();
  }

  function onImportanceChange(event: React.ChangeEvent<HTMLInputElement>): void {
    importance = Math.min(Math.max(+event.target.value, 0), 5);
    filterCallback();
  }

  return (
    <div className={style.filter}>
      <input
        type="text"
        defaultValue={filterTitle}
        placeholder="Filter by title"
        title="Filter by title"
        onChange={onTitleChange}
        className={style.filterTitleInput}
      />
      <input
        type="number"
        min={0}
        max={5}
        defaultValue={filterImportance}
        placeholder="priority"
        title="Filter by priority"
        onChange={onImportanceChange}
        className={style.filterImportanceInput}
      />
    </div>
  );
};

export default Filter;
