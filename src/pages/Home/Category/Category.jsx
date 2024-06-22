import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
       
        <section>
          <SectionTitle subHeading={'Please look at'} heading={'More Pet Pictures'}>
          </SectionTitle>
          <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        >
          <SwiperSlide><img src="https://img.freepik.com/free-photo/photorealistic-pig-farm_23-2151462544.jpg?t=st=1717485686~exp=1717489286~hmac=e0751da8fb8052ea8c8be80862d9b2cf69ff824a4783ac5ea1f58a0fc390eedc&w=360" alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pig</h3>
          </SwiperSlide>
          <SwiperSlide><img src="https://img.freepik.com/free-photo/close-up-hen-with-chick_23-2150741635.jpg?t=st=1717485805~exp=1717489405~hmac=f275e1030041a4673dc10b72299696e505c5c29c71ff40bdacb43366c9012d6c&w=360" alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-orange-500'>Chicken</h3>
          </SwiperSlide>
          <SwiperSlide><img src="https://img.freepik.com/free-photo/cute-rat-studio_23-2150841055.jpg?t=st=1717485948~exp=1717489548~hmac=9864af8d2ee0dd07e0b77c6b3809462daf02ef3ca68f28348c1821fc0dd17e6b&w=360" alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Rat</h3>
          </SwiperSlide>
          <SwiperSlide><img src="https://img.freepik.com/free-photo/horses-running-through-water_23-2150690931.jpg?t=st=1717486068~exp=1717489668~hmac=4f20d75d37b5a80feef4505b1d22f7fc3d8c41df45f2df3d196931ac60ab7d30&w=360" alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Horse</h3>
          </SwiperSlide>
          <SwiperSlide><img src="https://img.freepik.com/free-photo/photorealistic-view-cow-barn_23-2151294261.jpg?t=st=1717486191~exp=1717489791~hmac=9e2d93d51efd2dc2678d76b3ee4b1b7092d1e06906e73ab3874d79c2d4aedf04&w=740" alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Cow</h3>
          </SwiperSlide>
          
        </Swiper>
        </section>       
        
    );
};

export default Category;