import { component$ } from "@builder.io/qwik";
import AddSectionModal from "~/components/add-section-modal/add-section-modal";
import SectionCard from "~/components/section-card/section-card";
import {useGetSections} from "~/api/sections-api";

export default component$(() => {
    const data = useGetSections();
    return (
        <div class="container">
            <div class="justify-content-center align-items-center col-12 gap-10">
                <div class="d-flex align-items-end w-100 justify-content-end mb-3">
                    <AddSectionModal/>
                </div>
                {data.sections.map((section) => (
                    <SectionCard
                        title={section.title}
                        description={section.description}
                        id={section.id}
                        promo={section.promo}
                    />
                ))}
            </div>
        </div>
    );
})