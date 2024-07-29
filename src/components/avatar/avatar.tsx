import { component$ } from "@builder.io/qwik";

interface IImageProps {
    src: string;
    alt: string;
}

export default component$<IImageProps>((props) => {
    return (
        <div style="width: 300px; height: 300px">
            <img
                class="rounded-circle"
                src={props.src}
                alt={props.alt}
                width="300"
                height="300"
            />
        </div>
        
    );
})