import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from "react-redux";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpense from "./selectors/expenses";
import 'react-dates/lib/css/_datepicker.css';s

const store = configureStore();

store.dispatch(addExpense({description: "Water bill", amount: 4500, createdAt: 4500}));
store.dispatch(addExpense({description: "Gas bill" , createdAt: 1000}));
store.dispatch(addExpense({description: "Rent bill", amount: 18900, createdAt: 200}));


const state = store.getState();

const visibleExpense = getVisibleExpense(state.expenses, state.filters);
console.log(visibleExpense);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
