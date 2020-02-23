import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
	const expensesWord =

			expenseCount === 1 ? 'expense' :
			'expenses';
	return (
		<p>
			Viewing {expenseCount} {expensesWord} totalling {numeral(expensesTotal).format('$0,0.00')}
		</p>
	);
};

const mapStateToProps = (state) => {
	const visibleExpenses = selectExpenses(state.expenses, state.filters);
	return {
		expenseCount  : visibleExpenses.length,
		expensesTotal : getExpensesTotal(visibleExpenses) / 100
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
