import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"

interface ISectionCardProps {
    title: string;
    description: string;
    id: number;
    promo: string;
}

export default component$<ISectionCardProps>((props) => {
    return (
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={props.promo} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                </div>
                </div>
                <div class="card-footer text-end d-flex justify-content-center">
                    <Link class="btn btn-primary btn-lg" style={{width: "400px"}} href={"/bootstrap/sections/" + props.id}>Узнать больше!</Link>
                </div>
            </div>
        </div>
    )
})