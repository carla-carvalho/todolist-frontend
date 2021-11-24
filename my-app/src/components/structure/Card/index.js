import React from 'react'

const Card = (props) => {
    const tarefa = props.data;
    return (
        <div className="col" key={tarefa._id}>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{tarefa.titulo}</h5>
                <span className="badge bg-secondary">{tarefa.prioridade}</span>
            </div>
        </div>
    </div>
    )
}

export default Card;
