import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ( { decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ( {countBy = 1} = {}) => ({
  type: 'SET',
  countBy
});

const resetCount = () => ({
  type: 'RESET',
  count: 0 
});

const countReducer = (state = { count: 0 }, action) => {  
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.countBy
      } 
    case 'RESET':
      return {
        count: action.count
      }
    default:
      return state  
  }
}; 
const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(incrementCount({incrementBy: 20}));

store.dispatch(incrementCount({incrementBy: 20}));

store.dispatch(decrementCount({decrementBy: 20}));


store.dispatch(setCount({countBy: 40}));

store.dispatch(resetCount());

