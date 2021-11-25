import React from 'react';
import Api from '../../api/api';
import { useNavigate} from 'react-router-dom';

const Cadastro = () => {
    const navigate = useNavigate();

    const handleSubmit = async (evento) =>{
        evento.preventDefault();
       

        console.log(evento.target);

        const titulo = evento.target.titulo.value;
        const descricao = evento.target.descricao.value;
        const prioridade = evento.target.prioridade.value;
        const status = evento.target.status.value;
        const prazo = evento.target.prazo.value;

        const tarefa = {
            titulo,
            descricao,
            prioridade,
            status,
            prazo
        }

    const request = await Api.fetchPost(tarefa);
    const result = await request.json();
    alert(result.message);
    navigate('/');

    }
    return (

        <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3">Nova Tarefa</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
              <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="titulo">Título</label>
                  <input id="titulo" className="form-control" type="text" placeholder="Título da Tarefa" name="titulo"/>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="descricao">Descrição</label>
                  <input id="descricao" type="text" className="form-control" placeholder="Descrição da tarefa" name="descricao"/>
                </div>
              </div>
              <div className="col-4">
              <select class="form-select" aria-label="Prioridade" name="prioridade">
                <option selected>Prioridade</option>
                <option value="Alta">Alta</option>
                <option value="Média">Média</option>
                <option value="Baixa">Baixa</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
              <select class="form-select" aria-label="Status da Tarefa" name="status">
                <option selected>Status</option>
                <option value="Fazer">Fazer</option>
                <option value="Fazendo">Fazendo</option>
                <option value="Feito">Feito</option>
                </select>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prazo">Prazo</label>
                  <input id="duracao" type="text" className="form-control" placeholder="Digite um prazo" name="prazo"/>
                </div>
              </div>
              <div className="col-4 d-flex align-items-end justify-content-around">
                <button type="submit" className="btn btn-success">Enviar</button>
                <button type="button" className="btn btn-danger">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro;