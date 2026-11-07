import ContentCard from "../components/ContentCard";

export default function Home() {
  return (
    <>
      <ul className="flex flex-col gap-6 mt-4">
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </ul>
    </>
  );
}
