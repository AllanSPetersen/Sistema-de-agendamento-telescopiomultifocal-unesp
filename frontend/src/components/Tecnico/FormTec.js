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

const Form = ({ getTec, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const tecn = ref.current;

            tecn.nome_tecnico.value = onEdit.nome_tecnico;
            tecn.telefone.value = onEdit.telefone;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const tecn = ref.current;

        if (
            !tecn.nome_tecnico.value ||
            !tecn.telefone.value 
        ) {
            return toast.warn("Preencha todos os campos!");
        }

        if (onEdit) {
            await axios
            .put("http://localhost:3001/Tecnico/" + onEdit.id, {
                nome_tecnico: tecn.nome_tecnico.value,
                telefone: tecn.telefone.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        } else {
          await axios
            .post("http://localhost:3001/Tecnico/", {
                nome_tecnico: tecn.nome_tecnico.value,
                telefone: tecn.telefone.value,
            })  
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        }

        tecn.nome_tecnico.value = "";
        tecn.telefone.value = "";

        setOnEdit(null);
        getTec();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome do Tecnico</Label>
                <Input name="nome_tecnico" />
            </InputArea>
            <InputArea>
                <Label>Telefone do Tecnico</Label>
                <Input name="telefone" title="Digite um telefone" placeholder="(99) 99999-9999"/>
            </InputArea>
    
            <Button type="submit">SALVAR</Button>
        </FormContainer>

    );
};

export default Form;