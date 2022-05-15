import { Routes, Route } from "react-router-dom";
import NavBar from './components/Menu/NavBar';
import DashBoard from "./components/Dashboard/DashBoard";
import Orders from "./components/Orders/Orders";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Customers from "./components/Customers/Customers";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CreateCustomers from "./components/CreateCUstomers/CreateCustomers";
function App() {
  return (
    <div>
      <NavBar/>
      <Container maxWidth="xl">
      <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)',height: '100%', minHeight:'90vh', padding:'15px',borderRadius:'10px 10px 0 0'}} >
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="DashBoard" element={<DashBoard />} />
            <Route path="Orders" element={<Orders />} />
            <Route path="Customers" element={<Customers/>} />
            <Route path="CreateCustomers" element={<CreateCustomers/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </Box>
      </Container>
      
    </div>
  );
}

export default App;
