import { Link } from "react-router-dom"

const  ErrorPage = () => {

    return(
        <div>
            <h1>Oh no, this route seems to be down!</h1>
            <Link to="/">
                You can go back to the main page and try again later
            </Link>
        </div>
    )
}

export default ErrorPage;