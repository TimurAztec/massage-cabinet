import {useNavigate} from "react-router-dom";
import './notFound.css'

export default function NotFound(props: any) {
    const navigate = useNavigate()

    return (
        <main>
            <section>
                <h1>Sorry, but it seems that there`s no such page!</h1>
                <button onClick={() => {navigate(-1)}}><h2>Go back</h2></button>
            </section>
        </main>
    )
}