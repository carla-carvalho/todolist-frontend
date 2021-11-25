import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import Api from '../../api/api';

const View = () => {

    const [tarefa, setTarefa] = useState({});

    useEffect(() => {
        getTarefaById();
      }, [])

    const {id} = useParams();
    console.log(id);

    const getTarefaById = async ()=> {
        const request = await Api.fetchGetById(id);
        const tarefa = await request.json();
        setTarefa(tarefa);
    }

    return (
        <div className="container ">
            <div className="row">
                <div className="col-6">
                    <h3 className="text-center my-4">{tarefa.titulo}</h3>
                    <p className="text-center my-4"><b>Prioridade: </b>{tarefa.prioridade}</p>
                    <p className="text-center my-4"><b>Descrição: </b>{tarefa.descricao}</p>
                    <p className="text-center my-4"><b>Status: </b>{tarefa.status}</p>
                    <p className="text-center my-4"><b>Prazo: </b>{tarefa.prazo}</p>
                    <p className="text-center my-4"><b>Data de Criação: </b>{tarefa.dataCriacao}</p>
                <div className="btn-group">
                    <Link to={`/edit/${tarefa._id}`} className=" btn btn-warning "> Editar</Link>
                    <button className="btn btn-danger btn-sm">Excluir</button>
                </div>
                </div>

            </div>
            
        </div>
    )
}

export default View
