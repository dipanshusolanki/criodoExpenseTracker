import { useEffect, useState } from "react";
import "./App.css";
import WalletDetail from "./components/WalletDetail";
import TransactionItem from "./components/TransactionItem";

function App() {
  const [walletBalance, setWalletBalance] = useState(0);
  const [expensesAmount, setExpensesAmount] = useState(0);
  const [transactionList, setTransactionList] = useState([
    { title: "Samosa", date: Date.now(), amount: 150 },
    { title: "Pizza", date: Date.now(), amount: 250 },
  ]);
  const [expensesList, setExpensesList] = useState([
    { category: "Entertainment" },
    { category: "Travel" },
  ]);

  useEffect(() => {
    const loadAmounts = () => {
      //Getting Wallet Balance on Initial Load
      if (localStorage.getItem("WalletBalance") === null) {
        localStorage.setItem("WalletBalance", 5000);
        setWalletBalance(localStorage.getItem("WalletBalance"));
      } else {
        setWalletBalance(localStorage.getItem("WalletBalance"));
      }

      //Getting Expenses Amount on Initial Load
      if (localStorage.getItem("ExpenseAmount") === null) {
        localStorage.setItem("ExpenseAmount", 0);
        setExpensesAmount(localStorage.getItem("ExpenseAmount"));
      } else {
        setExpensesAmount(localStorage.getItem("ExpenseAmount"));
      }
    };

    loadAmounts();
  }, []);

  const handleWalletButtonClick = (type) => {
    console.log(type);
  };

  return (
    <>
      <div className="main">
        <h1 className="heading">Expense Tracker</h1>
        <div className="tracker">
          <div className="top">
            <div className="balanceandexpenses">
              <WalletDetail
                title={"Wallet Balance"}
                amount={walletBalance}
                theme={"green"}
                buttontext={"+ Add Income"}
                clickHandler={handleWalletButtonClick}
                type={"addincome"}
              />
              <WalletDetail
                title={"Expenses"}
                amount={expensesAmount}
                theme={"red"}
                buttontext={"+ Add Expense"}
                clickHandler={handleWalletButtonClick}
                type={"addexpense"}
              />
            </div>
            <div className="piesection"></div>
          </div>
          <div className="bottom">
            <div className="transactions">
              <h2 className="secondaryheading">Recent Transactions</h2>
              <div className="transactioncontent">
                {transactionList.map((transaction) => (
                  <TransactionItem
                    key={transaction.date}
                    transaction={transaction}
                  />
                ))}
              </div>
            </div>
            <div className="expenses">
              <h2 className="secondaryheading">Top Expenses</h2>
              <div className="expensecontent"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
