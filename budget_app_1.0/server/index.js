const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middlew

app.use(cors());
app.use(express.json());


app.post("/budget", async(req,res) =>{
    try {
     const {notes} = req.body;
     const newTransaction = await pool.query(
         "INSERT INTO transactions (notes) VALUES($1) RETURNING *",
          [notes]);
    res.json(newTransaction.rows[0]);
    }

    catch (error) {
     console.error(error.message);  
    }
})

// GET

app.get("/budget", async(req, res) => {
    try {
        const allTransactions = await pool.query("SELECT * FROM transactions");
        res.json(allTransactions.rows);
    } catch (error) {
        console.error(error.message);  
    }
})

app.get("/budget/:id", async(req, res) => {
    try {
        const {id} = req.params; //console.log(req.params);
        const transaction = await pool.query("SELECT * FROM transactions WHERE user_id = $1", [id])

        res.json(transaction.rows[0]);
    } catch (error) {
        console.error(error.message);  
    }
})

app.put("/budget/:id", async(req, res) => {
    try {
        const {id} =  req.params;
        const {notes} = req.body;
        const updateNotes = await pool.query("UPDATE transactions SET notes =$1 WHERE user_id = $2",
         [notes, id]);
         res.json("Transaction was updated");
    } catch (error) {
        console.error(error.message);  
    }
})


//delete a todo

app.delete("/budget/:id",async(req, res) => {
    try {
        const {id} = req.params;
        const deleteTransaction = await pool.query("DELETE FROM transactions WHERE transaction_id = $1",[id]);
        res.json("Transaction was deleted");
    } catch (error) {
        console.error(error.message);  
    }
})





app.listen(5010, () => {
    console.log("server started on port 5010");
})