import { data } from "../Data/imagedata";

const BannerScroll: React.FC = () => {
  return (
    <div className="overflow-x-auto scrollbar-hide py-6 hover:  ">
      <div className="flex space-x-6 px-6">
        {data.map((banner) => (
          <div key={banner.Id} className="flex shrink-0 w-150 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img src={banner.img} alt={`Banner ${banner.Id}`} className="w-full h-full object-cover"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerScroll;