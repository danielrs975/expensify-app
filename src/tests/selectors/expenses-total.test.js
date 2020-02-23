import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
	const total = getExpensesTotal([]);
	expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
	const total = getExpensesTotal([ expenses[0] ]);
	expect(total).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
	const total = getExpensesTotal(expenses);
	const realTotal = parseInt(expenses[0].amount) + parseInt(expenses[1].amount) + parseInt(expenses[2].amount);
	expect(total).toBe(realTotal);
});
