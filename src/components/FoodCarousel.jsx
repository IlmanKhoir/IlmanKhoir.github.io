import { Carousel } from 'react-bootstrap';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';

export default function FoodCarousel() {
    const style = {
        marginTop: '-100px',
        height: '100vh',
        width: '100vw',
    };

    return (
        <Carousel controls={false} indicators={false}>
            <Carousel.Item>
                <img style={style} className='' src={img1} alt='First slide' />
                <Carousel.Caption className='d-flex flex-column align-items-center justify-content-center'>
                    <h3 className='Headline'>SULAWESI SELATAN <br/> Nusantara.</h3>
                    <p className='bio'>MAKANAN DAERAH</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={style} className='' src={img2} alt='Second slide' />
                <Carousel.Caption className='d-flex flex-column align-items-center justify-content-center'>
                    <h3 className='Headline'>SULAWESI SELATAN <br /> Nusantara.</h3>
                    <p className='bio'>ADAT DAERAH</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={style} className='' src={img3} alt='Third slide' />
                <Carousel.Caption className='d-flex flex-column align-items-center justify-content-center'>
                    <h3 className='Headline'>SULAWESI SELATAN <br /> Nusantara.</h3>
                    <p className='bio'>RUMAH ADAT</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}