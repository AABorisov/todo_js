import * as React from "react";
import debounce from 'lodash-es/debounce';
import {TaskFilterState} from "../store/taskFilter/types";

const FILTER_DEBOUNCE_TIME = 1000

interface FilterProps {
  taskFilter: TaskFilterState
  setTaskFilter: Function
}

export default function Filter( { taskFilter: { titleFilter, importanceFilter }, setTaskFilter } : FilterProps ) {
  let title = titleFilter
  let importance = importanceFilter

  const filterCallback = debounce( () => {
    if ( titleFilter !== title || importanceFilter !== importance ) {
      setTaskFilter({ titleFilter: title, importanceFilter: importance})
    }
  }, FILTER_DEBOUNCE_TIME)

  function onTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    title = event.target.value
    filterCallback()
  }

  function onImportanceChange(event: React.ChangeEvent<HTMLInputElement>) {
    importance = Math.min( Math.max( +event.target.value, 0 ), 5 )
    filterCallback()
  }

  return <div>
    <input
      type="text"
      defaultValue={ titleFilter }
      onChange={ onTitleChange }
    />
    <input
      type="number"
      min={0}
      max={5}
      defaultValue={ importanceFilter }
      onChange={ onImportanceChange }
    />
  </div>
}