export const Ficha  =  (propiedades) => {
    return(
        <div className="card">
            <div className="card-header">Datos Obtenidos</div>
            <ul className="list-group list-group-flush">
                {propiedades.results?.map((todo) => (
                        <li className="list-group-item">{JSON.stringify(todo)}</li>
                    ))}
            </ul>
        </div>
    );
};