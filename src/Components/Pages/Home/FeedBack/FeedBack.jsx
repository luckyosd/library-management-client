
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '@smastrom/react-rating/style.css'
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";


const FeedBack = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('https://library-management-system-server-bay.vercel.app/review')
            .then(res => res.json())
            .then(data => {
                // console.log(data);  
                setCards(data);
            });
    }, []);

    return (
        <>
            <div className="bg-center bg-no-repeat bg-[url('https://i.ibb.co/yVstWFv/study-group-learning-library.jpg')] bg-gray-700 bg-blend-multiply">
                <h2 className="text-5xl font-bold text-center text-white space-x-8 py-8 divider">What People Say</h2>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                {
                    cards.map(review=> <SwiperSlide  >
                        <div className="flex justify-center flex-col items-center  py-10">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={review.photo} />
                            </div>
                        </div>
                            <p className="text-2xl text-yellow-500 py-4 font-semibold">{review.name}</p>

                            <p className='w-9/12 text-black dark:text-gray-400 text-center'>{review.comment}</p>
                        <div className=" flex flex-col items-center py-4 ">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                        </div>
                        </div>

                    </SwiperSlide>)
                }
                  </Swiper>
                 
            </div>
        </>
    )
}

export default FeedBack;


