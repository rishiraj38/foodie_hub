import { useRouteError } from "react-router";


const Error = () => {
    const err = useRouteError();
    return (
        <div>
        <h1>Something went wrong</h1>
        <h2>Please try again later</h2>
        <h3>{err.status + " : " + err.statusText}</h3>  
        </div>
    );
}
export default Error;