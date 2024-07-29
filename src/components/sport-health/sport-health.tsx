import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{padding:0}}>
            <div class="progress-bar progress-bar-striped bg-success" style="width: 80%"></div>
        </div>

    );
})