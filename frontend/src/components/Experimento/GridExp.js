import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";


const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 1000px;
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


const Grid = ({ experimento, setExp, setOnEdit }) => {
    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:3001/Experimento/" + id)
            .then(({ data }) => {
                const newArray = experimento.filter((user) => user.id !==id);

                setExp(newArray);
                toast.success(data);
            })
            .catch(({ data }) => toast.error (data));

            setOnEdit(null);
    };
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>ID Experimento</Th>
                    <Th>Data do Experimento</Th>
                    <Th>Dados do Experimento</Th>
                    <Th>Classe do Experimento</Th>
                    <Th>Problemas</Th>
                    <Th>Nome do Tecnico</Th>
                    <Th>Nome do Pesquisador</Th>
                    <Th>Nome do Reagente</Th>
                    <Th>Dados do Equipamento</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {experimento.map((item, i) =>(
                    <Tr key={i}>
                        <Td width="30%">{item.id}</Td>
                        <Td width="30%" type="date">{item.data_experimento}</Td>
                        <Td width="50%">{item.dados_experimento}</Td>
                        <Td width="50%">{item.classe_experimentos}</Td>
                        <Td width="50%">{item.problemas}</Td>
                        <Td width="50%">{item.nome_tecnico}</Td>
                        <Td width="50%">{item.nome}</Td>
                        <Td width="50%">{item.nome_reagente}</Td>
                        <Td width="50%">{item.dados_equipamento}</Td>
                        <Td alignCenter width="5%">
                            <FaEdit onClick={() => handleEdit(item)}/>
                        </Td>
                        <Td alignCenter width="5%">
                            <FaTrash onClick={() => handleDelete(item.id)}/>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}

export default Grid;