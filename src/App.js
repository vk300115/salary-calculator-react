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

    return (
    <Container>
        <Banner />
        <SalaryForm 
        handleFormError={handleFormError}
        handleFormSuccess={handleFormSuccess}/>
        {error && <ErrorMessage />}
        <SalaryCard />
    </Container>

    );
};