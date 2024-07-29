import { $, component$, event$, useSignal } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { useGetSection } from "~/api/sections-api";
import Avatar from "~/components/avatar/avatar";
import Chart from "~/components/chart/chart";
import SportResultSender from "~/components/sport-result-sender/sport-result-sender";

export default component$(() => {
    const loc = useLocation();
    const data = useGetSection(Number(loc.params.pageid))!;
    
    return (
        <div class="container">
            <div class="row mb-2 mt-4 text-center">
                <h1>{data.section.title}</h1>
            </div>
            <div class="row mb-2 mt-4">
                <div class="col-6">
                    <img src={data.section.promo} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-6">
                    <div class="row g-0 h-100">
                        <div class="col-12">
                            <p class="card-text">{data.section.description}</p>
                        </div>
                        <div class="col-12 align-self-end">
                            <button type="button" class="btn btn-primary btn-lg w-100" style={{width: "400px"}}>Присоеденится</button>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Общая информация</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Профиль</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false" disabled>Управление [Совсем скоро]</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                    <h2>Учаники</h2>
                    <div class="row mb-2 mt-4 overflow-x-auto gap-3 flex-nowrap" style={{width: "100%"}}>
                        {data.section.people.map(avatar => <Avatar src={avatar} alt="..."/>)}
                    </div>
                    <hr/>
                    <h2>Общая прогрессия</h2>
                    <Chart data={data.section.sportActivity} labels={['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль']}/>
                </div>
                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                    <div class="row mb-2 mt-4">
                        <h2>прогрессия</h2>
                        <Chart data={data.self.sportActivity} labels={['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль']}/>
                        <hr/>
                        <h2>Награды</h2>
                        <p class="card-text mb-0">Возможно награды в будущем</p>
                        <hr/>
                        <h2>Добавить результат</h2>
                        <SportResultSender in={data.forma}/>
                    </div>
                </div>
                <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
            </div>
        </div>
    );
})