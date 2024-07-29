import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import "../../global.css";
import Chart from "~/components/chart/chart";
import EventCard from "~/components/event-card/event-card";
import Avatar from "~/components/avatar/avatar";
import useGetHomeInfo from "~/api/home-api";

export default component$(() => {
  const data = useGetHomeInfo();

  return (
    <>
      <h2>Набор на секции</h2>
      <hr />
      <div class="row mb-2 mt-4 justify-content-center align-items-center gap-3">
        {data.sections.map((section) => (
          <EventCard
            title={section.title}
            description={section.description}
            id={section.id}
          />
        ))}
      </div>
      
      <h2>Лучшие спортсмены</h2>
      <hr />
      <div class="row row-cols-4 justify-content-center align-items-center gap-3 ">
        {data.BestSpotsmens.map((spotmen) => (
          <Avatar src={spotmen} alt={"Beast spotmen"} />
        ))}
      </div>
      <h2>Спортивная активность</h2>
      <hr />
      <Chart data={data.SportActivity} labels={['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль']}/>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
