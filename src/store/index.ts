import { combineReducers, createStore, Store } from 'redux';
import { taskListReducer as taskList } from './taskList/reducer';
import { taskFilterReducer as taskFilter } from './taskFilter/reducer';

export const rootReducer = combineReducers({
  taskList,
  taskFilter,
});

export type AppState = ReturnType<typeof rootReducer>;

const initialStore: AppState = {
  taskList: [
    {
      title: 'Title 1',
      description: 'Description 1',
      importance: 1,
      addDate: Date.now() - 1e8,
      startDate: Date.now() - 1e5,
      completeDate: Date.now(),
    },
    {
      title: 'Title 2',
      description: 'Description 2',
      importance: 2,
      addDate: Date.now() - 1e7,
      startDate: Date.now(),
    },
    {
      title: 'Title 3',
      description: 'Description 3',
      importance: 3,
      addDate: Date.now() - 1e6,
      startDate: Date.now(),
    },
    {
      title: 'Title 4',
      description: 'Description 4',
      importance: 4,
      addDate: Date.now() - 1e5,
      startDate: Date.now(),
    },
    {
      title: 'Title 5',
      description: 'Description 5',
      importance: 5,
      addDate: Date.now() - 1e4,
    },
  ],
  taskFilter: {
    titleFilter: '',
    importanceFilter: 0,
  },
};
const configureStore = (): Store<AppState> => {
  const store = createStore(rootReducer, initialStore);

  return store;
};

export default configureStore;
