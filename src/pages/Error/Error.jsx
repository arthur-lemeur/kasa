import './_error.scss';
import Layout from "../../layout/layout";

function Error() {
    return(
        <div className="App">
            <Layout>
                <div className="error-page-body">
                    <h2>404</h2>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <a href="/">Retourner à la page d'accueil</a>
                </div>
            </Layout>
        </div>
    )
}

export default Error