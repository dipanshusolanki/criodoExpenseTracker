import "./App.css";
import WalletDetail from "./components/WalletDetail";

function App() {
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
                amount={"4500"}
                theme={"green"}
                buttontext={"+ Add Income"}
                clickHandler={handleWalletButtonClick}
                type={"addincome"}
              />
              <WalletDetail
                title={"Expenses"}
                amount={"500"}
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
              <div className="transactioncontent"></div>
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
