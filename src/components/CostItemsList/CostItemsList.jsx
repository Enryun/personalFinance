import React from "react";
import CostItem from "../CostItem/CostItem";
import "./CostItemList.styles.scss";
import { MdDelete } from "react-icons/md";

const CostItemsList = ({ expenses, handleDelete, handleEdit, clearAll }) => {
  return (
    <>
      <ul className="list">
        {expenses.map(expense => {
          return (
            <CostItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>

      {expenses.length > 0 && (
        <button className="btn" onClick={clearAll}>
          clear all expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default CostItemsList;
