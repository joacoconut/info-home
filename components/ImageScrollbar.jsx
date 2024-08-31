import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';


export default function ImageSrollbar({ data }) {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
        >
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <Box width='910px' itemId={item.id} overflow='hidden' p='1'>
                        <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500} sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
                    </Box>
                </SwiperSlide>
            ))}

            <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </Swiper>
    );
}