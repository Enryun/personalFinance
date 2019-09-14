import React from "react";
import { MdSend } from "react-icons/md";
import "./InterestForm.styles.scss";

const InterestForm = ({
  handleInterest,
  interest,
  amount,
  handleAmount,
  month,
  handleMonth,
  handleSubmit,
  saving,
  handleSaving,
  year,
  handleYear
}) => {

  return (
    <form onSubmit={handleSubmit}>

      <div className="tg-list-item">
        <input className="tgl tgl-skewed" id="cb3" type="checkbox" />
        <label
          className="tgl-btn"
          data-tg-off={saving ? "Saving" : ""}
          data-tg-on={saving ? "" : "Lending"}
          htmlFor="cb3"
          onClick={handleSaving}
        ></label>
      </div>

      <div className="form-center">
        <div className="form-group interestForm">
          <label htmlFor="interest">interest rate % / year</label>
          <input
            type="number"
            placeholder="ex: 7 for 7%"
            id="interest"
            className="form-control"
            autoComplete="off"
            step="0.01"
            min="0"
            value={interest}
            onChange={handleInterest}
            required
          />
        </div>

        <div className="form-group interestForm">
          <label htmlFor="amount">amount $:</label>
          <input
            type="number"
            placeholder="ex: 100"
            id="amount"
            className="form-control"
            autoComplete="off"
            min="1"
            value={amount}
            onChange={handleAmount}
            required
          />
        </div>

        {saving ? 
        <div className="form-group interestForm">
          <label htmlFor="month"> months: {month} </label>
          <input
            type="range"
            min="1"
            max="36"
            className="form-control"
            id="month"
            value={month}
            onChange={handleMonth}
          />
        </div> : 
        <div className="form-group interestForm">
          <label htmlFor="year"> years: {year} </label>
          <input
            type="range"
            min="1"
            max="30"
            className="form-control"
            id="year"
            value={year}
            onChange={handleYear}
          />
        </div>
        }
        
      </div>

      <button type="submit" className="btn">
        submit
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default InterestForm;
