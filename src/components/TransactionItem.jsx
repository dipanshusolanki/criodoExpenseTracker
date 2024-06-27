import React from "react";
import "./TransactionItem.css";
import { PiPizzaThin } from "react-icons/pi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GoPencil } from "react-icons/go";

const TransactionItem = ({ transaction }) => {
  return (
    <>
      <div className="transactionItem">
        <div className="transactionDetails">
          <div className="transactionIcon">
            <PiPizzaThin />
          </div>
          <div className="transactionTitle">
            <h3 className="transactionName">{transaction.title}</h3>
            <p className="transactionDate">{transaction.date}</p>
          </div>
        </div>
        <div className="transactionActions">
          <p className="transactionAmount">&#8377;{transaction.amount}</p>
          <div className="actionButtons">
            <button className="removeTransaction">
              <IoIosCloseCircleOutline />
            </button>
            <button className="editTransaction">
              <GoPencil />
            </button>
          </div>
        </div>
      </div>
      <div className="transactionDivider" />
    </>
  );
};

export default TransactionItem;
