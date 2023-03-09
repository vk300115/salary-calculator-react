import Container from "react-bootstrap/Container";
import { useState } from "react";
import { Banner } from "./component/Banner";
import { ErrorMessage } from "./component/ErrorMessage";
import { SalaryCard } from "./component/SalaryCard";
import { SalaryForm } from "./component/SalaryForm";




export const App = () => {
    const [error, setError] = useState(false);
    const handleFormError = () => {
        setError(true);
    };

    const handleFormSuccess = () => {
        setError(false);
    };

    const handleCalculation = (taxYear, annualIncome) => {
        console.log(taxYear, annualIncome);
        if (annualIncome > 12500) {
            let taxPercentage;

            if(taxYear === "2021-2022") {
                if(annualIncome > 12500 && annualIncome <= 100000) {
                    taxPercentage = 20;
                } else if (annualIncome > 40000 && annualIncome <= 40000) {
                    taxPercentage = 40;
                } else {
                    taxPercentage = 45;
                }
            }

            if(taxYear === "2022-2023") {
                if(annualIncome > 12500 && annualIncome <= 100000) {
                    taxPercentage = 18;
                } else if (annualIncome > 40000 && annualIncome <= 40000) {
                    taxPercentage = 35;
                } else {
                    taxPercentage = 40;
                }
            }
          
            const taxableIncome = annualIncome - 12500;
            const tax = taxPercentage / 100;  
            const taxAmount = taxableIncome * tax;
            const takeHomeSalary = annualIncome - taxAmount;

          const salary = {
            annualIncome,
            taxableIncome,
            taxPercentage,
            taxAmount,
            takeHomeSalary,
          };

          console.log(salary);
          
        } else {

        }
    };

    return (
    <Container>
        <Banner />
        <SalaryForm 
        handleFormError={handleFormError}
        handleFormSuccess={handleFormSuccess}
        handleCalculation={handleCalculation}/>
        {error && <ErrorMessage />}
        <SalaryCard />
    </Container>

    );
};