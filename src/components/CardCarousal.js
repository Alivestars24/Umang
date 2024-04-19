import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CourseCard from './CourseCard';
import './Slider.css'

const CardCarousal=({data})=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: (
            <div>
              <div className="next-slick-arrow"> ⫸ </div>
            </div>
          ),
          prevArrow: (
            <div>
              <div className="prev-slick-arrow"> ⫷ </div>
            </div>
          ),
      };

    return (
        <div>
           <Slider {...settings}>
                {data.map((obj) => (
                    <CourseCard
                        key={obj.id} id={obj.id} name={obj.name} description={obj.description} time={obj.time}
                    />
                ))}
            </Slider>
        </div>
    )
}
export default CardCarousal;