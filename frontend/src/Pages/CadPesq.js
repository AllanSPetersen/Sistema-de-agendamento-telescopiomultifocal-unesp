import GlobalStyle from "../styles/global";
import styled from "styled-components";
import Form from "../components/Pesquisador/FormPesq.js";
import Grid from "../components/Pesquisador/GridPesq.js";
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




function Pesquisador() {
  const [pesquisador, setPesq] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getPesq = async () => {
    try {
      const res = await axios.get("http://localhost:3001/Pesquisador/");
      setPesq(res.data.sort((a,b) =>(a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
};

  useEffect(() => {
    getPesq();
  }, [setPesq]);
  

  return (
    
    <>
    
    <Navbar/>
    
    <Container>
      <Title>Pesquisador</Title>
      <Form onEdit={onEdit} setOnEdit={setOnEdit} getPesq={getPesq}/>
      <Grid pesquisador={pesquisador} setPesq={setPesq} setOnEdit={setOnEdit} />
    </Container>
    <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    <GlobalStyle/>
    </>
  );
}

export default Pesquisador;
