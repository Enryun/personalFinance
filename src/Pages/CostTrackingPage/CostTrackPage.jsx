import React from "react";
import CostForm from "../../components/CostForm/CostForm";
import CostItemsList from "../../components/CostItemsList/CostItemsList";
import Alert from "../../components/Alert/Alert";
import uuid from "uuid/v4";
import "./CostTrackPage.styles.scss";

const initialExpense = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) :  []

class CostTrackPage extends React.Component {

  state = {
    id: "",
    costName: "",
    costAmount: "",
    expenses: initialExpense,
    alert: {
      show: false,
      type: "",
      text: ""
    },
    edit: false
  };

  componentDidUpdate() {
    localStorage.setItem('expenses', JSON.stringify(this.state.expenses));
  }

  handleCost = event => {
    this.setState({ costName: event.target.value });
  };

  handleAmount = event => {
    this.setState({ costAmount: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { id, costName, costAmount, expenses, edit } = this.state;

    if (costName !== "" && costAmount > 0) {
      if (edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ? { ...item, costName, costAmount } : item;
        });
        this.setState({
          expenses: tempExpenses,
          edit: false
        });
        this.handleAlert("success", "item edited");
      } else {
        const singleExpense = {
          id: uuid(),
          costName: costName,
          costAmount: costAmount
        };

        this.setState({
          expenses: [...expenses, singleExpense]
        });
        this.handleAlert("success", "item added");
      }

      this.setState({
        costName: "",
        costAmount: ""
      });
       
    } else {
      this.handleAlert(
        "danger",
        `Cost can't be empty or amount value has to be bigger than 0`
      );
    }
  };

  handleDelete = id => {
    const { expenses } = this.state;
    this.setState({ expenses: expenses.filter(expense => expense.id !== id) });
    this.handleAlert("danger", `Item deleted`);
  };

  handleAlert = (type, text) => {
    this.setState({
      alert: {
        show: true,
        type,
        text
      }
    });

    setTimeout(() => {
      this.setState({
        alert: { show: false }
      });
    }, 3000);
  };

  handleEdit = id => {
    const { expenses } = this.state;
    const editItem = expenses.find(expense => expense.id === id);
    const { costName, costAmount } = editItem;
    this.setState({
      costName: costName,
      costAmount: costAmount,
      edit: true,
      id
    });
  };

  clearAll = () => {
    this.setState({
      expenses: []
    });
    this.handleAlert({type: 'danger', text: 'all item deleted'});
  }

  render() {
    const { costName, costAmount, expenses, alert, edit } = this.state;
    return (
      <div className="costContainer">
        {alert.show && <Alert type={alert.type} text={alert.text} />}
        <h1>Cost Management</h1>
        <div className="costPage">
          <CostForm
            costAmount={costAmount}
            costName={costName}
            handleAmount={this.handleAmount}
            handleCost={this.handleCost}
            handleSubmit={this.handleSubmit}
            edit={edit}
          />
          <CostItemsList
            expenses={expenses}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            clearAll={this.clearAll}
          />
        </div>
        <h2>
          total spending:{" "}
          <span className="total">
            ${" "}
            {expenses.reduce((acc, curr) => {
              return acc + parseInt(curr.costAmount);
            }, 0)}
          </span>
        </h2>
      </div>
    );
  }
}

export default CostTrackPage;
