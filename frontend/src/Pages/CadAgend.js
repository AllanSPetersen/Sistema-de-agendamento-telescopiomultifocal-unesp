import GlobalStyle from "../styles/global";
import styled from "styled-components";
import Form from "../components/Agendamento/FormAgend";
import Grid from "../components/Agendamento/GridAgend";
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




function Agendamento() {
  const [agendamento, setAgend] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getAgend = async () => {
    try {
      const res = await axios.get("http://localhost:3001/Agendamento/");
      setAgend(res.data.sort((a,b) =>(a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
};

  useEffect(() => {
    getAgend();
  }, [setAgend]);
  

  return (
    
    <>
    
    <Navbar/>
    
    <Container>
      <Title>Agendamento</Title>
      <Form onEdit={onEdit} setOnEdit={setOnEdit} getAgend={getAgend}/>
      <Grid agendamento={agendamento} setAgend={setAgend} setOnEdit={setOnEdit} />
    </Container>
    <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    <GlobalStyle/>
    </>
  );
}

export default Agendamento;
