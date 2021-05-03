import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/compoments/imgslider.module.scss"
import Slider from 'react-slick'
const prefix: string = process.env.NEXT_PUBLIC_BASE_PATH || '';
const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Slider {...settings} className={styles.slide}>
            <div className={styles.wrap}>
                <img src={prefix+'/images/slider-badag.jpg'} alt={"hay"} />
            </div>
            <div className={styles.wrap}>
                <img src={prefix+'/images/slider-badging.jpg'} alt={"hay"} />
            </div>
            <div className={styles.wrap}>
                <img src={prefix+'/images/slider-scale.jpg'} alt={"hay"} />
            </div>
            <div className={styles.wrap}>
                <img src={prefix+'/images/slider-scales.jpg'} alt={"hay"} />
            </div>
        </Slider>
    )
}

export default ImgSlider
