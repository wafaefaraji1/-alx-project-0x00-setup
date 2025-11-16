import Image from "next/image";

interface CardProps {
  title: string;
  desc: string;
  rating: string;
}

const Card: React.FC<CardProps> = ({ title, desc, rating }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-[300px] p-0">
      <Image
        src="/assets/images/house.png"
        alt="house"
        width={300}
        height={180}
        className="w-full h-[180px] object-cover"
      />

      <div className="p-4">
        <div className="flex items-center mb-2">
          <Image
            src="/assets/images/star.png"
            alt="star"
            width={20}
            height={20}
          />
          <span className="ml-2 text-sm font-semibold">{rating}</span>
        </div>

        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
