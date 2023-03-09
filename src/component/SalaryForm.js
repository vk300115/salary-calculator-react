import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export const SalaryForm = () => {
    return (
        <Form className="border p-3 rounded-3">
            <Form.Group className="mb-3">
                <Form.Label>Select Tax Year</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option disabled>Select Tax Year</option>
                    <option value="2021-2022">2021-2022</option>
                    <option value="2022-2023">2022-2023</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Gross Annual Salary</Form.Label>
                <Form.Control type="number" placeholder="Enter your gross annual salary" />
            </Form.Group>
            <Form.Group className="mb-3 text-center">
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form.Group>
            
    </Form>
    );
};