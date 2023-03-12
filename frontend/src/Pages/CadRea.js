import GlobalStyle from "../styles/global";
import styled from "styled-components";
import Form from "../components/Reagentes/FormRea";
import Grid from "../components/Reagentes/GridRea";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";
import Navbar from "./Navbar";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 90px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;




function Reagente() {
  const [reagente, setRea] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getRea = async () => {
    try {
      const res = await axios.get("http://localhost:3001/Reagente/");
      setRea(res.data.sort((a,b) =>(a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
};

  useEffect(() => {
    getRea();
  }, [setRea]);
  

  return (
    
    <>
    
    <Navbar/>
    
    <Container>
      <Title>Reagente</Title>
      <Form onEdit={onEdit} setOnEdit={setOnEdit} getRea={getRea}/>
      <Grid reagente={reagente} setRea={setRea} setOnEdit={setOnEdit} />
    </Container>
    <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    <GlobalStyle/>
    </>
  );
}

export default Reagente;
