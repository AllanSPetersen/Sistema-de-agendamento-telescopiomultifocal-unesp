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

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`;


const Grid = ({ pesquisador, setPesq, setOnEdit }) => {
    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:3001/Pesquisador/" + id)
            .then(({ data }) => {
                const newArray = pesquisador.filter((user) => user.id !==id);

                setPesq(newArray);
                toast.success(data);
            })
            .catch(({ data }) => toast.error (data));

            setOnEdit(null);
    };
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>ID Pesquisador</Th>
                    <Th>Nome</Th>
                    <Th>CPF</Th>
                    <Th>instituição</Th>
                    <Th>Dados Pesquisador</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {pesquisador.map((item, i) =>(
                    <Tr key={i}>
                        <Td width="30%">{item.id}</Td>
                        <Td width="30%">{item.nome}</Td>
                        <Td width="30%">{item.cpf}</Td>
                        <Td width="30%">{item.instituição}</Td>
                        <Td width="30%">{item.dados_pesquisador}</Td>
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