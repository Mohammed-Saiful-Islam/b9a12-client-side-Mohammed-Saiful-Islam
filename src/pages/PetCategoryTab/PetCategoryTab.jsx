import PetDetails from '../PetList/PetDetails';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const PetCategoryTab = ({pets}) => {

    const pagination={
        clickable:true,
        renderBullet:function(index,className){
            return  '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    }

    return (
        <div>
    <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {
    pets.map(pet=><PetDetails key={pet._id} pet={pet}></PetDetails>)
    }
                </div></SwiperSlide>
        
      </Swiper>            
        </div>
    );
};

export default PetCategoryTab;