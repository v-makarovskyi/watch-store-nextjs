import { Carousel } from "react-bootstrap"
import Image from "next/image"
import styles from './slider.module.css'
import slide1 from '../../public/images/slider/slider1.webp'
import slide2 from '../../public/images/slider/slider2.webp'
import slide3 from '../../public/images/slider/slider3.webp'
import slide4 from '../../public/images/slider/slider4.webp'
import slide5 from '../../public/images/slider/slider5.webp'

export default function Slider() {
  return (
    <Carousel fade className={styles.carousel}>
        <Carousel.Item>
            <Image src={slide1} style={{objectFit:'contain', height:'auto'}} />
        </Carousel.Item>
        <Carousel.Item>
            <Image src={slide2} style={{objectFit:'contain', height:'auto'}} />
        </Carousel.Item>
        <Carousel.Item>
            <Image src={slide3} style={{objectFit:'contain', height:'auto'}} />
        </Carousel.Item>
        <Carousel.Item>
            <Image src={slide4} style={{objectFit:'contain', height:'auto'}} />
        </Carousel.Item>
        <Carousel.Item>
            <Image src={slide5} style={{objectFit:'contain', height:'auto'}} />
        </Carousel.Item>
    </Carousel>
  )
}
