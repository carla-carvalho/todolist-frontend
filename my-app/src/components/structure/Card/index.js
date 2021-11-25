import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const tarefa = props.data;
    return (
        <Link to={`/view/${tarefa._id}`} className="col" key={tarefa._id}>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{tarefa.titulo}</h5>
                <span className="badge bg-secondary">{tarefa.prioridade}</span>
            </div>
        </div>
    </Link>
    )
}

export default Card;
