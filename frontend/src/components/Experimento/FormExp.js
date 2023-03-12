import axios from "axios";
import React, { useEffect, useRef }  from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 20px;
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
    width: 200px;
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

const Form = ({ getExp, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const expe = ref.current;

            expe.data_experimento.value = onEdit.data_experimento;
            expe.dados_experimento.value = onEdit.dados_experimento;
            expe.classe_experimentos.value = onEdit.classe_experimentos;
            expe.problemas.value = onEdit.problemas;
            expe.tecnico_id.value = onEdit.tecnico_id;
            expe.pesquisador_id.value = onEdit.pesquisador_id;
            expe.reagente_id.value = onEdit.reagente_id;
            expe.equipamento_id.value = onEdit.equipamento_id;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const expe = ref.current;

        if (
            !expe.data_experimento.value ||
            !expe.dados_experimento.value ||
            !expe.classe_experimentos.value ||
            !expe.problemas.value ||
            !expe.tecnico_id.value ||
            !expe.pesquisador_id.value ||
            !expe.reagente_id.value ||
            !expe.equipamento_id.value 
        ) {
            return toast.warn("Preencha todos os campos!");
        }

        if (onEdit) {
            await axios
            .put("http://localhost:3001/Experimento/" + onEdit.id, {
                data_experimento: expe.data_experimento.value,
                dados_experimento: expe.dados_experimento.value,
                classe_experimentos: expe.classe_experimentos.value,
                problemas: expe.problemas.value,
                tecnico_id: expe.tecnico_id.value,
                pesquisador_id: expe.pesquisador_id.value,
                reagente_id: expe.reagente_id.value,
                equipamento_id: expe.equipamento_id.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        } else {
          await axios
            .post("http://localhost:3001/Experimento/", {
                data_experimento: expe.data_experimento.value,
                dados_experimento: expe.dados_experimento.value,
                classe_experimentos: expe.classe_experimentos.value,
                problemas: expe.problemas.value,
                tecnico_id: expe.tecnico_id.value,
                pesquisador_id: expe.pesquisador_id.value,
                reagente_id: expe.reagente_id.value,
                equipamento_id: expe.equipamento_id.value,
            })  
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        }

        expe.data_experimento.value = "";
        expe.dados_experimento.value = "";
        expe.classe_experimentos.value = "";
        expe.problemas.value = "";
        expe.tecnico_id.value = "";
        expe.pesquisador_id.value = "";
        expe.reagente_id.value = "";
        expe.equipamento_id.value = "";

        setOnEdit(null);
        getExp();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Data do Experimento</Label>
                <Input name="data_experimento" type="date" />
            </InputArea>
            <InputArea>
                <Label>Dados do Experimento</Label>
                <Input name="dados_experimento"/>
            </InputArea>
            <InputArea>
                <Label>Classe do Experimento</Label>
                <Input name="classe_experimentos" />
            </InputArea>
            <InputArea>
                <Label>Problemas</Label>
                <Input name="problemas"/>
            </InputArea>
            <InputArea>
                <Label>ID do Tecnico</Label>
                <Input name="tecnico_id"/>
            </InputArea>
            <InputArea>
                <Label>ID do Pesquisador</Label>
                <Input name="pesquisador_id"/>
            </InputArea>
            <InputArea>
                <Label>ID do Reagente</Label>
                <Input name="reagente_id"/>
            </InputArea>
            <InputArea>
                <Label>ID do Equipamento</Label>
                <Input name="equipamento_id"/>
            </InputArea>

            <Button type="submit">SALVAR</Button>
        </FormContainer>

    );
};

export default Form;