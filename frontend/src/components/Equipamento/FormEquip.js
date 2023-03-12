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

const Form = ({ getEquip, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const equip = ref.current;

            equip.dados_equipamento.value = onEdit.dados_equipamento;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const equip = ref.current;

        if (
            !equip.dados_equipamento.value 
        ) {
            return toast.warn("Preencha todos os campos!");
        }

        if (onEdit) {
            await axios
            .put("http://localhost:3001/Equipamento/" + onEdit.id, {
                dados_equipamento: equip.dados_equipamento.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        } else {
          await axios
            .post("http://localhost:3001/Equipamento/", {
                dados_equipamento: equip.dados_equipamento.value,
            })  
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        }

        equip.dados_equipamento.value = "";

        setOnEdit(null);
        getEquip();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Dados do Equipamento</Label>
                <Input name="dados_equipamento" />
            </InputArea>

            <Button type="submit">SALVAR</Button>
        </FormContainer>

    );
};

export default Form;