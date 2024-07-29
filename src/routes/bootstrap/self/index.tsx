import { component$ } from "@builder.io/qwik"
import Achievement from "~/components/achievement/achievement"
import Avatar from "~/components/avatar/avatar"
import SectionCard from "~/components/section-card/section-card"
import SportHealth from "~/components/sport-health/sport-health"
import { useGetSelf } from "~/api/self-api"


export default component$(() => {

    const data = useGetSelf();

    return (
        <div class="container">
            <div class="row gap-10">
                <div class="justify-content-center align-items-center col-4">
                    <Avatar src={data.self.promo} alt={"Beast spotmen"}/>
                </div>
                <div class="justify-content-center align-items-center col-8 gap-10">
                    <h1>Профиль: {data.self.FulName}</h1>
                    <div class="mb-3">
                        <div>
                            <h5 class="card-title">Резюме:</h5>
                            <p class="card-text">{data.self.description}</p> 
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary">Редактировать</button>
                </div>
            </div>

            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title w-100">Спортивное здоровье:</h5>
                    <div class="row gap-10" id="contacts">
                        <SportHealth/>
                    </div> 
                </div>
            </div>
            
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title w-100" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" style={{cursor: "pointer"}}>Секции:</h5>
                    <div class="row gap-10 collapse" id="collapseExample">
                        {data.section.map((section) => (
                            <SectionCard
                                title={section.title}
                                description={section.description}
                                id={section.id}
                                promo={section.promo}
                            />
                        ))}
                    </div> 
                </div>
            </div>

            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title w-100" data-bs-toggle="collapse" data-bs-target="#achievements" aria-expanded="false" aria-controls="achievements" style={{cursor: "pointer"}}>Награды:</h5>
                    <div class="row gap-10 collapse" id="achievements">
                        <Achievement/>
                    </div> 
                </div>
            </div>
        </div>
    )
})