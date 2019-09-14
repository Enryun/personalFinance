import React,{useState}from 'react';
import './InterestPage.styles.scss';
import InterestForm from '../../components/InterestForm/InterestForm';
import InterestResult from '../../components/InterestResult/InterestResult';
import LendingResult from '../../components/LendingResult/LendingResult';
import Alert from '../../components/Alert/Alert'

const InterestPage = () => {

    const [interest, setInterest] = useState("");
    const [amount, setAmount] = useState("");
    const [saveAmount, setSaveAmount] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [result, setResult] = useState(0);
    const [savingSuccess, setSavingSuccess] = useState(false);
    const [lendingSuccess, setLendingSuccess] = useState(false);
    const [saving, setSaving] = useState(true);
    const [principal, setPrincipal] = useState("");
    const [alert, setAlert] = useState(false);

    const handleInterest= event => {
        setInterest(event.target.value);
    }

    const handleAmount = event => {
        setAmount(event.target.value);
    }

    const handleMonth = event => {
        setMonth(event.target.value);
    }

    const handleYear = event => {
        setYear(event.target.value)
    }

    const savingCalculator = (interest, amount, month) => {
        const days = month*21;
        interest = interest/100;
        const step1 = 1 + interest/253;
        const step2 = Math.pow(step1, days)*amount;
        return step2;
    }

    const lendingCalculator = (interest, amount) => {
        interest = interest/1200;
        const interestPay = amount*interest;
        return interestPay;
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (month && year === "") {
            setResult(savingCalculator(interest, amount, month));
            setSavingSuccess(true);
            setSaveAmount(amount);
            setAlert(false);
        } else if (year && month === "") {
            setResult(lendingCalculator(interest, amount));
            setPrincipal(amount/(year*12));
            setLendingSuccess(true);
            setSaveAmount(amount);
            setAlert(false);
        } else {
           setAlert(true);
        }
    }

    const handleSaving = () => {
        setSaving(!saving);
        setInterest("");
        setAmount("");
        setSavingSuccess(false);
        setLendingSuccess(false);
        setMonth("");
        setYear("");
        setAlert(false);
      }

    return (
        <div className="costContainer">
            {alert && <Alert type="danger" text='Set the Time line!'  />}
            <h1>Interest Calculation</h1>
            <div className="costPage">
                <InterestForm 
                    interest={interest}
                    handleInterest={handleInterest}
                    amount={amount}
                    handleAmount={handleAmount}
                    month={month}
                    handleMonth={handleMonth}
                    handleSubmit={handleSubmit}
                    saving={saving}
                    handleSaving={handleSaving}
                    year={year}
                    handleYear={handleYear}
                />
            </div>

            {savingSuccess && <InterestResult
                    result={result}
                    saveAmount={saveAmount}/>
            }

            {lendingSuccess && <LendingResult 
                    result={result}
                    principal={principal}
                    year={year}
            />}
                
        </div>
    )
}

export default InterestPage
