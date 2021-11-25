import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../../api/api";

const Edit = () => {
  const { id } = useParams();

  const [tarefa, setTarefa] = useState({});

  useEffect(() => {
      getTarefaById();
  },[])

  const getTarefaById = async () => {
    const request = await Api.fetchGetById(id);
    const tarefa = await request.json();
    setTarefa(tarefa);
  };

  const handleFieldsChange = (evento) => {
      const campos = {...tarefa}

      campos[evento.target.name] = evento.target.value;
      setTarefa(campos);

    console.log(evento);
  };
  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3">Editar Tarefa</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="titulo">Título</label>
                  <input
                    id="titulo"
                    className="form-control"
                    type="text"
                    placeholder="Título da Tarefa"
                    name="titulo"
                    value={tarefa.titulo}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="descricao">Descrição</label>
                  <input
                    id="descricao"
                    type="text"
                    className="form-control"
                    placeholder="Descrição da tarefa"
                    name="descricao"
                    value={tarefa.descricao}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <select
                  class="form-select"
                  aria-label="Prioridade"
                  name="prioridade"
                  value={tarefa.prioridade}
                  onChange={handleFieldsChange}
                >
                  <option selected>Prioridade</option>
                  <option value="Alta">Alta</option>
                  <option value="Média">Média</option>
                  <option value="Baixa">Baixa</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <select
                  class="form-select"
                  aria-label="Status da Tarefa"
                  name="status"
                  value={tarefa.status}
                  onChange={handleFieldsChange}
                >
                  <option selected>Status</option>
                  <option value="Fazer">Fazer</option>
                  <option value="Fazendo">Fazendo</option>
                  <option value="Feito">Feito</option>
                </select>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prazo">Prazo</label>
                  <input
                    id="duracao"
                    type="text"
                    className="form-control"
                    placeholder="Digite um prazo"
                    name="prazo"
                    value={tarefa.prazo}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
              <div className="col-4 d-flex align-items-end justify-content-around">
                <button type="submit" className="btn btn-success">
                  Enviar
                </button>
                <button type="button" className="btn btn-danger">
                  Voltar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
