import { db } from "../db.js";

export const getRelat = (_, res) => {
    const q = "SELECT * FROM pesquisador, tecnico, reagente, equipamento, experimento WHERE experimento.pesquisador_id = pesquisador.id AND experimento.tecnico_id = tecnico.id AND experimento.reagente_id = reagente.id AND experimento.equipamento_id = equipamento.id";
    

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        console.log(data);
        return res.status(200).json(data);
    })
};


// Const do pesquisador
export const getPesq = (_, res) => {
    const q = "SELECT * FROM pesquisador";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
};

export const addPesq = (req, res) => {
    const q =
        "INSERT INTO pesquisador(`nome`, `cpf`, `instituição`, `dados_pesquisador`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.cpf,
        req.body.instituição,
        req.body.dados_pesquisador,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Pesquisador criado com sucesso.");
    });
};

export const updatePesq = (req, res) => {
    const q =
        "UPDATE pesquisador SET  `nome` = ?, `cpf` = ?, `instituição` = ?, `dados_pesquisador` = ? WHERE `id` = ?";
        const values = [
            req.body.nome,
            req.body.cpf,
            req.body.instituição,
            req.body.dados_pesquisador,
        ];
    
        db.query(q, [...values, req.params.id], (err) => {
            if (err) return res.json(err);
    
            return res.status(200).json("Pesquisador atualizado com sucesso.");
        });
    };

    export const deletePesq = (req, res) => {
        const q = "DELETE FROM pesquisador WHERE `id` =?";

        db.query(q, [req.params.id], (err) => {
            if (err) return res.json(err);

            return res.status(200).json("Pesquisador deletado com sucesso.");
        });
    };

    // Fim const do pesquisador

    //Inicio const do Reagente
    export const getRea = (_, res) => {
        const q = "SELECT * FROM reagente";
    
        db.query(q, (err, data) => {
            if (err) return res.json(err);
    
            return res.status(200).json(data);
        })
    };
    
    export const addRea = (req, res) => {
        const q =
            "INSERT INTO reagente(`concentracao_reagente`, `tipo_reagente`, `nome_reagente`) VALUES(?)";
    
        const values = [
            req.body.concentracao_reagente,
            req.body.tipo_reagente,
            req.body.nome_reagente,
        ];
    
        db.query(q, [values], (err) => {
            if (err) return res.json(err);
    
            return res.status(200).json("Reagente criado com sucesso.");
        });
    };
    
    export const updateRea = (req, res) => {
        const q =
            "UPDATE reagente SET  `concentracao_reagente` = ?, `tipo_reagente` = ?, `nome_reagente` = ? WHERE `id` = ?";
            const values = [
                req.body.concentracao_reagente,
                req.body.tipo_reagente,
                req.body.nome_reagente,
            ];
        
            db.query(q, [...values, req.params.id], (err) => {
                if (err) return res.json(err);
        
                return res.status(200).json("Reagente atualizado com sucesso.");
            });
        };
    
        export const deleteRea = (req, res) => {
            const q = "DELETE FROM reagente WHERE `id` =?";
    
            db.query(q, [req.params.id], (err) => {
                if (err) return res.json(err);
    
                return res.status(200).json("Reagente deletado com sucesso.");
            });
        };

    //Fim const do Reagente

    //Inicio const do Tecnico
    export const getTec = (_, res) => {
        const q = "SELECT * FROM tecnico";
    
        db.query(q, (err, data) => {
            if (err) return res.json(err);
    
            return res.status(200).json(data);
        })
    };
    
    export const addTec = (req, res) => {
        const q =
            "INSERT INTO tecnico(`nome_tecnico`, `telefone`) VALUES(?)";
    
        const values = [
            req.body.nome_tecnico,
            req.body.telefone,
        ];
    
        db.query(q, [values], (err) => {
            if (err) return res.json(err);
    
            return res.status(200).json("Tecnico criado com sucesso.");
        });
    };
    
    export const updateTec = (req, res) => {
        const q =
            "UPDATE tecnico SET  `nome_tecnico` = ?, `telefone` = ? WHERE `id` = ?";
            const values = [
                req.body.nome_tecnico,
                req.body.telefone,
            ];
        
            db.query(q, [...values, req.params.id], (err) => {
                if (err) return res.json(err);
        
                return res.status(200).json("Tecnico atualizado com sucesso.");
            });
        };
    
        export const deleteTec = (req, res) => {
            const q = "DELETE FROM tecnico WHERE `id` =?";
    
            db.query(q, [req.params.id], (err) => {
                if (err) return res.json(err);
    
                return res.status(200).json("Tecnico deletado com sucesso.");
            });
        };

//Fim const Tecnico

//Inicio const Equipamento

export const getEquip = (_, res) => {
    const q = "SELECT * FROM equipamento";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
};

export const addEquip = (req, res) => {
    const q =
        "INSERT INTO equipamento(`dados_equipamento`) VALUES(?)";

    const values = [
        req.body.dados_equipamento,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Equipamento criado com sucesso.");
    });
};

export const updateEquip = (req, res) => {
    const q =
        "UPDATE equipamento SET  `dados_equipamento` = ? WHERE `id` = ?";
        const values = [
            req.body.dados_equipamento,
        ];
    
        db.query(q, [...values, req.params.id], (err) => {
            if (err) return res.json(err);
    
            return res.status(200).json("Equipamento atualizado com sucesso.");
        });
    };

    export const deleteEquip = (req, res) => {
        const q = "DELETE FROM equipamento WHERE `id` =?";

        db.query(q, [req.params.id], (err) => {
            if (err) return res.json(err);

            return res.status(200).json("Equipamento deletado com sucesso.");
        });
    };

//Fim const equipamento

//Inicio const Experimento
export const getExp = (_, res) => {
    const q = "SELECT * FROM pesquisador, tecnico, reagente, equipamento, experimento WHERE experimento.pesquisador_id = pesquisador.id AND experimento.tecnico_id = tecnico.id AND experimento.reagente_id = reagente.id AND experimento.equipamento_id = equipamento.id";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
};

export const addExp = (req, res) => {
    const q =
        "INSERT INTO experimento(`data_experimento`, `dados_experimento`,`classe_experimentos`,`problemas`,`tecnico_id`,`pesquisador_id`,`reagente_id`,`equipamento_id`) VALUES(?)";

    const values = [
        req.body.data_experimento,
        req.body.dados_experimento,
        req.body.classe_experimentos,
        req.body.problemas,
        req.body.tecnico_id,
        req.body.pesquisador_id,
        req.body.reagente_id,
        req.body.equipamento_id,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Experimento criado com sucesso.");
    });
};

export const updateExp = (req, res) => {
    const q =
        "UPDATE experimento SET  `data_experimento` = ?, `dados_experimento` = ?, `classe_experimentos` = ?, `problemas` = ?, `tecnico_id` = ?, `pesquisador_id` = ?, `reagente_id` = ?, `equipamento_id` = ? WHERE `id` = ?";
        const values = [
        req.body.data_experimento,
        req.body.dados_experimento,
        req.body.classe_experimentos,
        req.body.problemas,
        req.body.tecnico_id,
        req.body.pesquisador_id,
        req.body.reagente_id,
        req.body.equipamento_id,
        ];
    
        db.query(q, [...values, req.params.id], (err) => {
            if (err) return res.json(err);
    
            return res.status(200).json("Experimento atualizado com sucesso.");
        });
    };

    export const deleteExp = (req, res) => {
        const q = "DELETE FROM experimento WHERE `id` =?";

        db.query(q, [req.params.id], (err) => {
            if (err) return res.json(err);

            return res.status(200).json("Experimento deletado com sucesso.");
        });
    };

//Fim const experimento

export const getAgend = (_, res) => {
    const q = "SELECT * FROM agendamentos, pesquisador WHERE agendamentos.pesquisador_id = pesquisador.id";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
};

export const addAgend = (req, res) => {
    const q =
        "INSERT INTO agendamentos(`dados_agendamentos`, `data_agendamento`, `pesquisador_id`, `experimento_id`) VALUES(?)";

    const values = [
        req.body.dados_agendamentos,
        req.body.data_agendamento,
        req.body.pesquisador_id,
        req.body.experimento_id,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Agendado com sucesso.");
    });
};

export const updateAgend = (req, res) => {
    const q =
        "UPDATE agendamentos SET  `dados_agendamentos` = ?, `data_agendamento` = ?, `pesquisador_id` = ?, `experimento_id` = ? WHERE `id` = ?";
        const values = [
            req.body.dados_agendamentos,
            req.body.data_agendamento,
            req.body.pesquisador_id,
            req.body.experimento_id,
        ];
    
        db.query(q, [...values, req.params.id], (err) => {
            if (err) return res.json(err);
    
            return res.status(200).json("Agendamento atualizado com sucesso.");
        });
    };

    export const deleteAgend = (req, res) => {
        const q = "DELETE FROM agendamentos WHERE `id` =?";

        db.query(q, [req.params.id], (err) => {
            if (err) return res.json(err);

            return res.status(200).json("Agendamento deletado com sucesso.");
        });
    };
