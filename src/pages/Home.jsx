import { useState } from "react";
import ContentCard from "../components/ContentCard";
import ToastPopup from "../components/ToastPopup";
import HomeBanner1 from "../assets/home/homeBanner1.jpeg";
import HomeBanner2 from "../assets/home/homeBanner2.jpeg";
import HomeBanner3 from "../assets/home/homeBanner3.jpeg";

const HOME_BANNERS = [
  {
    id: "banner-1",
    image: HomeBanner1,
    title: "Collect 25 stamps",
    cardDescription:
      "Get an eco-bag or 2027 diary with 25 stamps (11/23–12/31).",
    popupDescription:
      "Sip your way through the season from 11/23 to 12/31.   Once you collect 25 stamps, choose either the character eco-bag or the 2027 diary.   Available as a limited edition while stocks last. ",
  },
  {
    id: "banner-2",
    image: HomeBanner2,
    title: "Holiday Matcha Magic",
    cardDescription:
      "Celebrate the season with SMATCHA’s festive Ube Matcha and Crème Brûlée Matcha.",
    popupDescription:
      "Bring a little Christmas magic to your cup this holiday season. Enjoy earthy Ube Matcha alongside rich, velvety Crème Brûlée Matcha. Available for a limited time across SMATCHA stores.",
  },
  {
    id: "banner-3",
    image: HomeBanner3,
    title: "10% off a drink and cake after 11 am",
    cardDescription:
      "Pair any drink with a cake after 11 am for an easy afternoon treat.",
    popupDescription:
      "Treat yourself to a mid-morning or afternoon pick-me-up with any drink and cake pairing after 11 am.",
  },
];

export default function Home() {
  const [selectedBanner, setSelectedBanner] = useState(null);

  return (
    <>
      <ul className="flex flex-col gap-6 mt-4">
        {HOME_BANNERS.map((banner) => (
          <ContentCard
            key={banner.id}
            image={banner.image}
            title={banner.title}
            description={banner.cardDescription}
            onClick={() => setSelectedBanner(banner)}
          />
        ))}
      </ul>
      <ToastPopup
        isOpen={Boolean(selectedBanner)}
        onClose={() => setSelectedBanner(null)}
      >
        {selectedBanner && (
          <div className="flex flex-col gap-3">
            <img
              src={selectedBanner.image}
              alt={selectedBanner.title}
              className="w-full object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold">{selectedBanner.title}</h3>
            <p>{selectedBanner.popupDescription}</p>
          </div>
        )}
      </ToastPopup>
    </>
  );
}
