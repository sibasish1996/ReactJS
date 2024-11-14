import React, { useState } from 'react';
import styles from './styles.module.css';

const Emi_Calculator = () => {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [years, setYears] = useState('');
    const [result, setResult] = useState('');

    const handleOnChange = (e) => {
        const { id, value } = e.target;
        switch (id) {
            case 'principal':
                setPrincipal(value);
                break;
            case 'rateOfInterest':
                setRate(value);
                break;
            case 'numberOfYears':
                setYears(value);
                break;
            default:
                break;
        }
    };

    const calculateEMI = () => {
        const P = parseFloat(principal);
        const R = parseFloat(rate) / 12 / 100;
        const N = parseFloat(years) * 12;

        if (isNaN(P) || isNaN(R) || isNaN(N) || P <= 0 || R <= 0 || N <= 0) {
            setResult('Invalid input');
            return;
        }

        const emi = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
        setResult(emi.toFixed(2));
    };

    const resetCalculator = () => {
        setPrincipal('');
        setRate('');
        setYears('');
        setResult('');
    };

    return (
        <div className={styles.mainContainer}>
            <h1>EMI Calculator</h1>
            <div className={styles.wrapper}>
                <div className={styles.fieldWrapper}>
                    <input
                        id="principal"
                        type="number"
                        value={principal}
                        placeholder="Enter Loan Amount"
                        className={styles.inputWrapper}
                        onChange={handleOnChange}
                    />
                    <label>Principal Amount</label>
                </div>
                <div className={styles.fieldWrapper}>
                    <input
                        id="rateOfInterest"
                        type="number"
                        value={rate}
                        placeholder="Enter Rate Of Interest"
                        className={styles.inputWrapper}
                        onChange={handleOnChange}
                    />
                    <label>Rate Of Interest</label>
                </div>
                <div className={styles.fieldWrapper}>
                    <input
                        id="numberOfYears"
                        type="number"
                        value={years}
                        placeholder="Enter the Years"
                        className={styles.inputWrapper}
                        onChange={handleOnChange}
                    />
                    <label>Number of Years</label>
                </div>
            </div>
            <div className={styles.btnWrapper}>
                <button onClick={calculateEMI} className={styles.btnCss}>Calculate</button>
                <button onClick={resetCalculator} className={styles.btnCss}>Reset</button>
            </div>
            <div>
                <input
                    type="text"
                    readOnly
                    value={result || 'EMI Result'}
                    className={styles.resultField}
                />
            </div>
        </div>
    );
};

export default Emi_Calculator;
