const Expense = require("../model/expenseModel");

//creation of a new expense
const createExpense = async (req, res) => {
  try {
    const {
      category,
      billDate,
      expense,
      payTo,
      payeeID,
      vendorDescription,
      paymentDate,
      paymentAmount,
      reference,
      description,
    } = req.body;

    const newExpense = new Expense({
      category,
      billDate: new Date(billDate),
      expense: parseFloat(expense),
      payTo,
      payeeID,
      vendorDescription,
      transactions: [
        {
          paymentDate: new Date(paymentDate),
          paymentAmount: parseFloat(paymentAmount),
          reference,
          description,
        },
      ],
    }).save();

    res.status(201).send(true);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createExpense,
};
