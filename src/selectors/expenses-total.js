export default (expenses) => {
	const amounts = expenses.map((expense) => parseInt(expense.amount));
	return amounts.reduce((total, amount) => total + amount, 0);
};
