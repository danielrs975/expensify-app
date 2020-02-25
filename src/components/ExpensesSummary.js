import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
	const expensesWord =

			expenseCount === 1 ? 'expense' :
			'expenses';
	return (
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">
					Viewing <span>{expenseCount}</span> {expensesWord} totalling{' '}
					<span>{numeral(expensesTotal).format('$0,0.00')}</span>
				</h1>
				<div class="page-header__actions">
					<Link className="button" to="/create">
						Add Expense
					</Link>
				</div>
			</div>
		</div>
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
