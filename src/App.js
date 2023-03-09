import Container from "react-bootstrap/Container";

import { Banner } from "./component/Banner";
import { ErrorMessage } from "./component/ErrorMessage";
import { SalaryCard } from "./component/SalaryCard";
import { SalaryForm } from "./component/SalaryForm";




export const App = () => {
    return (
    <Container>
        <Banner />
        <SalaryForm />
        <ErrorMessage />
        <SalaryCard />
    </Container>

    );
};