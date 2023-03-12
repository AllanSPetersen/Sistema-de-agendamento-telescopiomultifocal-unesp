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

const Form = ({ getPesq, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const pesq = ref.current;

            pesq.nome.value = onEdit.nome;
            pesq.cpf.value = onEdit.cpf;
            pesq.instituição.value = onEdit.instituição;
            pesq.dados_pesquisador.value = onEdit.dados_pesquisador;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const pesq = ref.current;

        if (
            !pesq.nome.value ||
            !pesq.cpf.value ||
            !pesq.instituição.value ||
            !pesq.dados_pesquisador.value
        ) {
            return toast.warn("Preencha todos os campos!");
        }

        if (onEdit) {
            await axios
            .put("http://localhost:3001/Pesquisador/" + onEdit.id, {
                nome: pesq.nome.value,
                cpf: pesq.cpf.value,
                instituição: pesq.instituição.value,
                dados_pesquisador: pesq.dados_pesquisador.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        } else {
          await axios
            .post("http://localhost:3001/Pesquisador/", {
                nome: pesq.nome.value,
                cpf: pesq.cpf.value,
                instituição: pesq.instituição.value,
                dados_pesquisador: pesq.dados_pesquisador.value,
            })  
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        }

        pesq.nome.value = "";
        pesq.cpf.value = "";
        pesq.instituição.value = "";
        pesq.dados_pesquisador.value = "";

        setOnEdit(null);
        getPesq();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome" />
            </InputArea>
            <InputArea>
                <Label>CPF ou CNPJ</Label>
                <Input name="cpf" pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" title="Digite um CPF ou CNPJ" placeholder="000.000.000-00"/>
            </InputArea>
            <InputArea>
                <Label>Instituição</Label>
                <Input name="instituição" />
            </InputArea>
            <InputArea>
                <Label>Dados Pesquisador</Label>
                <Input name="dados_pesquisador"/>
            </InputArea>

            <Button type="submit">SALVAR</Button>
        </FormContainer>

    );
};

export default Form;