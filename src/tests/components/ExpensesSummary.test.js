import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary correctly with 1 expense', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={parseInt(expenses[0].amount)} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with multiple expenses', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={114195} />);
	expect(wrapper).toMatchSnapshot();
});
