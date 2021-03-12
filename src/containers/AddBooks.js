import React from 'react'

const AddBooks = () => {
    return (
        <main role="main">
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4"> BOOKS </h1>
                    <p> Ajouter un livre à votre bibliothèque</p>

                    <form className="form-inline justify-content-center">
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Titre"
                                required
                                />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control ml-3"
                                placeholder="Auteur"
                                required
                                />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-outline-secondary ml-3">Ajouter un livre</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container" style={{minHeight:'300px'}}>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-light d-flex justify-content-between">
                                Livres enregistrés ici 
                            </li>
                        </ul>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-danger mt-4">Effacer tous les livres</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default AddBooks