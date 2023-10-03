import { useParams, Link } from "react-router-dom";

function Trailer() {
    const { movieId } = useParams();

    return (
        <>
            <div>{movieId}</div>
            <Link to={'/'}>
                <button>back</button>
            </Link>

        </>
    )
}

export default Trailer;

