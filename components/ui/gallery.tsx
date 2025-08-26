import { galleryImages } from "@/data";
import Image, { StaticImageData } from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const SWIPER_OPTIONS = {
  modules: [Pagination, Autoplay],
  pagination: { clickable: true },
  autoplay: { delay: 2500, disableOnInteraction: false },
  autoHeight: true,
  breakpoints: {
    0: { spaceBetween: 8 },
    640: { spaceBetween: 12 },
    1024: { spaceBetween: 16 },
  },
  // If used inside collapsible/tab containers:
  // observeParents: true,
  // resizeObserver: true,
};

interface GalleryImageProps {
  imgSrc: StaticImageData;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ imgSrc }) => (
  <Image
    src={imgSrc}
    alt=""
    className="w-full h-auto object-contain"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
  />
);

export default function Gallery() {
  return (
    <section id="gallery" className="w-full">
      <div className="mx-auto w-full max-w-7xl px-0 sm:px-2">
        <Swiper {...SWIPER_OPTIONS} className="mySwiper">
          {galleryImages.map((img) => (
            <SwiperSlide key={img.id}>
              <GalleryImage imgSrc={img.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
