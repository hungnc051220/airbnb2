import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";

async function fetchExploreData() {
  const response = await fetch("https://www.jsonkeeper.com/b/4G1G", {
    cache: "force-cache",
  });
  const data = await response.json();
  return data;
}

async function fetchCardData() {
  const response = await fetch("https://www.jsonkeeper.com/b/VHHT", {
    cache: "force-cache",
  });
  const data = await response.json();
  return data;
}

export default async function Page() {
  const exploreData = await fetchExploreData();
  const cardData = await fetchCardData();

  return (
    <main className="max-w-7xl mx-auto">
      <section className="pt-6">
        <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map((item) => (
            <SmallCard
              key={item.img}
              img={item.img}
              location={item.location}
              distance={item.distance}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          {cardData.map((item) => (
            <MediumCard key={item.img} img={item.img} title={item.title} />
          ))}
        </div>
      </section>

      <LargeCard
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb"
        buttonText="Get Inspired"
      />
    </main>
  );
}
