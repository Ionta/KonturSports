import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"

interface IEventCardProps {
    title: string;
    description: string;
    id: number;
}

export default component$<IEventCardProps>((props) => {
    return(
        <div class="card text-center mb-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <Link href={"/bootstrap/sections/" + props.id} class="btn btn-primary">Присоеденится</Link>
            </div>
        </div>
    )
})