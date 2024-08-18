import { galleryImages } from "@/data";
import Image, { StaticImageData } from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const SWIPER_OPTIONS = {
  modules: [Pagination, Autoplay],
  pagination: { clickable: true },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
};

interface GalleryImageProps {
  imgSrc: StaticImageData;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ imgSrc }) => (
  <Image src={imgSrc} alt="" className="object-cover w-full h-full object-left-top" />
);

export default function Gallery() {
  return (
    <div className="h-[550px] sm:h-[650px] md:h-full 2xl:h-[750px] w-full">
      <Swiper {...SWIPER_OPTIONS} className="mySwiper rounded-2xl">
        {galleryImages.map((img) => (
          <SwiperSlide key={img.id}>
            <GalleryImage imgSrc={img.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
