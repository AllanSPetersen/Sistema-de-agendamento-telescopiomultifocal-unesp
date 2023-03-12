import GlobalStyle from "../styles/global";
import styled from "styled-components";
import Form from "../components/Experimento/FormExp.js";
import Grid from "../components/Experimento/GridExp.js";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";
import Navbar from "./Navbar";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 90px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;




function Experimento() {
  const [experimento, setExp] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getExp = async () => {
    try {
      const res = await axios.get("http://localhost:3001/Experimento/");
      setExp(res.data.sort((a,b) =>(a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
};

  useEffect(() => {
    getExp();
  }, [setExp]);
  

  return (
    
    <>
    
    <Navbar/>
    
    <Container>
      <Title>Experimento</Title>
      <Form onEdit={onEdit} setOnEdit={setOnEdit} getExp={getExp}/>
      <Grid experimento={experimento} setExp={setExp} setOnEdit={setOnEdit} />
    </Container>
    <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    <GlobalStyle/>
    </>
  );
}

export default Experimento;
