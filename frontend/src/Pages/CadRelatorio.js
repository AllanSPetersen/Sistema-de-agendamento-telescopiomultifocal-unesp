import GlobalStyle from "../styles/global";
import styled from "styled-components";
import Grid from "../components/GridRelat";
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




function Relatorio() {
  const [relatorio, setRelat] = useState([]);
  const [, setOnEdit] = useState(null);

  const getRelat = async () => {
    try {
      const res = await axios.get("http://localhost:3001/Relatorio/");
      setRelat(res.data.sort((a,b) =>(a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
};

  useEffect(() => {
    getRelat();
  }, [setRelat]);
  

  return (
    
    <>
    
    <Navbar/>
    
    <Container>
      <Title>Relatorio</Title>
      <Grid relatorio={relatorio} setRelat={setRelat} setOnEdit={setOnEdit} getRelat={getRelat} />
    </Container>
    <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    <GlobalStyle/>
    </>
  );
}

export default Relatorio;
