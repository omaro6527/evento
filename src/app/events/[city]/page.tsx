import { EventoEvent } from "@/lib/types";
import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { sleep } from "@/lib/utils";

type EventPageProps = {
  params: {
    city: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const city = params.city;
  await sleep(2000);
  const response = await fetch(
   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events: EventoEvent[] = await response.json();

  console.log(events);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <EventsList events={events} />
    </main>
  );
}
