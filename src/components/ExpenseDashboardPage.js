import React from "react";
import ExpenseList from "./ExpensesList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
