const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// middlew

app.use(cors());
app.use(express.json());

app.post('/budget', async (req, res) => {
  try {
    const { amount, type, category_id } = req.body;
    console.log('server req.body.', req.body);
    const newTransaction = await pool.query(
      'INSERT INTO transactions (amount, type, category_id) VALUES($1, $2, $3) RETURNING *',
      [amount, type, category_id]
    );
    res.json(newTransaction.rows[0]);
    //window.location = "/"; // refresh the page
  } catch (error) {
    console.error(error.message);
  }
});

// GET
// TODO: make a Join table with amount, category name and show it on the front end
app.get('/budget', async (req, res) => {
  try {
    const allTransactions = await pool.query(
      'SELECT amount, earnings_categories.category_name FROM transactions INNER JOIN earnings_categories ON transactions.category_id = earnings_categories.earn_cat_id'
    );
    res.json(allTransactions.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get total of all transactions  //
app.get('/budget/total', async (req, res) => {
  try {
    const allTransactions = await pool.query(
      'SELECT SUM(amount) FROM transactions'
    );
    res.json(allTransactions.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// get all categories   //
app.get('/budget/earnings_categories', async (req, res) => {
  try {
    const allCategories = await pool.query('SELECT * FROM earnings_categories');
    res.json(allCategories.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.get('/budget/:id', async (req, res) => {
  try {
    const { id } = req.params; //console.log(req.params);
    const transaction = await pool.query(
      'SELECT * FROM transactions WHERE user_id = $1',
      [id]
    );

    res.json(transaction.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.put('/budget/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { notes } = req.body;
    const updateNotes = await pool.query(
      'UPDATE transactions SET notes =$1 WHERE user_id = $2',
      [notes, id]
    );
    res.json('Transaction was updated');
  } catch (error) {
    console.error(error.message);
  }
});

//delete a todo

app.delete('/budget/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTransaction = await pool.query(
      'DELETE FROM transactions WHERE transaction_id = $1',
      [id]
    );
    res.json('Transaction was deleted');
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5010, () => {
  console.log('server started on port 5010');
});
