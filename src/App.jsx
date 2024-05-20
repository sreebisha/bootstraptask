import { Container, Row } from "react-bootstrap";
// import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MainRoute } from "./routes/mainRoute";
import IndexPage from "./pages/IndexPage";

function App() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Sidebar />
                </Row>
            </Container>
            <Container fluid>
                <MainRoute />
            </Container>
            <IndexPage/>
        </>
    );
}

export default App;
