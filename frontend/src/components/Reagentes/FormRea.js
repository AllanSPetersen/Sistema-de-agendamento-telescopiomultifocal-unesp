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
    flex-direction: column;
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

const Form = ({ getRea, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const reag = ref.current;

            reag.concentracao_reagente.value = onEdit.concentracao_reagente;
            reag.tipo_reagente.value = onEdit.tipo_reagente;
            reag.nome_reagente.value = onEdit.nome_reagente;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reag = ref.current;

        if (
            !reag.concentracao_reagente.value ||
            !reag.tipo_reagente.value ||
            !reag.nome_reagente.value 
        ) {
            return toast.warn("Preencha todos os campos!");
        }

        if (onEdit) {
            await axios
            .put("http://localhost:3001/Reagente/" + onEdit.id, {
                concentracao_reagente: reag.concentracao_reagente.value,
                tipo_reagente: reag.tipo_reagente.value,
                nome_reagente: reag.nome_reagente.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        } else {
          await axios
            .post("http://localhost:3001/Reagente/", {
                concentracao_reagente: reag.concentracao_reagente.value,
                tipo_reagente: reag.tipo_reagente.value,
                nome_reagente: reag.nome_reagente.value,
            })  
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        }

        reag.concentracao_reagente.value = "";
        reag.tipo_reagente.value = "";
        reag.nome_reagente.value = "";

        setOnEdit(null);
        getRea();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Concentração do Reagente</Label>
                <Input name="concentracao_reagente" placeholder="(mg/L)"/>
            </InputArea>
            <InputArea>
                <Label>Tipo do Reagente</Label>
                <Input name="tipo_reagente"/>
            </InputArea>
            <InputArea>
                <Label>Nome do Reagente</Label>
                <Input name="nome_reagente" />
            </InputArea>

            <Button type="submit">SALVAR</Button>
        </FormContainer>

    );
};

export default Form;