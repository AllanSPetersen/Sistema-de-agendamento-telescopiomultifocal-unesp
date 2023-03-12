import axios from "axios";
import React, { useEffect, useRef }  from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0 px 5px #ccc;
    border-radius: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;''
`; 

const Input = styled.input`
    width: 230px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;    
` 

const Label = styled.label``;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: nome;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`;

const Form = ({ getAgend, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const agend = ref.current;

            agend.dados_agendamentos.value = onEdit.dados_agendamentos;
            agend.data_agendamento.value = onEdit.data_agendamento;
            agend.pesquisador_id.value = onEdit.pesquisador_id;
            agend.experimento_id.value = onEdit.experimento_id;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const agend = ref.current;

        if (
            !agend.dados_agendamentos.value ||
            !agend.data_agendamento.value ||
            !agend.pesquisador_id.value ||
            !agend.experimento_id.value
        ) {
            return toast.warn("Preencha todos os campos!");
        }

        if (onEdit) {
            await axios
            .put("http://localhost:3001/Agendamento/" + onEdit.id, {
                dados_agendamentos: agend.dados_agendamentos.value,
                data_agendamento: agend.data_agendamento.value,
                pesquisador_id: agend.pesquisador_id.value,
                experimento_id: agend.experimento_id.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        } else {
          await axios
            .post("http://localhost:3001/Agendamento/", {
                dados_agendamentos: agend.dados_agendamentos.value,
                data_agendamento: agend.data_agendamento.value,
                pesquisador_id: agend.pesquisador_id.value,
                experimento_id: agend.experimento_id.value,
            })  
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        }

        agend.dados_agendamentos.value = "";
        agend.data_agendamento.value = "";
        agend.pesquisador_id.value = "";
        agend.experimento_id.value = "";

        setOnEdit(null);
        getAgend();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Dados do Agendamento</Label>
                <Input name="dados_agendamentos" />
            </InputArea>
            <InputArea>
                <Label>Data do Agendamento</Label>
                <Input name="data_agendamento" type="date"/>
            </InputArea>
            <InputArea>
                <Label>Nome do Pesquisador</Label>
                <Input name="pesquisador_id" />
            </InputArea>
            <InputArea>
                <Label>ID do Experimento</Label>
                <Input name="experimento_id"/>
            </InputArea>

            <Button type="submit">SALVAR</Button>
        </FormContainer>

    );
};

export default Form;