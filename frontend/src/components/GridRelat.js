import React from "react";
import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";


const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 1000px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

    @media (max-width: 1000px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`;


const Grid = ({ relatorio, setRelat, setOnEdit }) => {
    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:3001/Relatorio/" + id)
            .then(({ data }) => {
                const newArray = relatorio.filter((user) => user.id !==id);

                setRelat(newArray);
            })
            .catch(({ data }) => toast.error (data));

            setOnEdit(null);
    };

    

    
    return (
        
        <Table>
            <Thead>
                <Tr>
                    <Th>Data do Experimento</Th>
                    <Th>Pesquisador</Th>
                    <Th>Instituição</Th>
                    <Th>Nome do Técnico</Th>
                    <Th>Dados do Equipamento</Th>
                    <Th>Reagente</Th>
                </Tr>
            </Thead>
            <Tbody>
                {relatorio.map((item, i) =>(
                    <Tr key={i}>
                        <Td width="18%" type="date">{item.data_experimento}</Td>
                        <Td width="25%">{item.nome}</Td>
                        <Td width="30%">{item.instituição}</Td>
                        <Td width="25%">{item.nome_tecnico}</Td>
                        <Td width="25%">{item.dados_equipamento}</Td>
                        <Td width="30%">{item.nome_reagente}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}

export default Grid;