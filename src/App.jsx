import { useState, useEffect } from 'react'
import './App.css'
import Slider from './Slider';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Logo from './assets/Logo.svg'
import G from './assets/G.svg'
import OffTheGrid from './assets/OffTheGrid.svg'
import G2 from './assets/G2.svg'
import About from './assets/About.jpeg'
import Service from './assets/Service.gif'
import work1 from './assets/work1.png'
import work2 from './assets/work2.png'
import work3 from './assets/work3.png'
import work4 from './assets/work4.png'
import machine1 from './assets/machine1.png'
import Services from './assets/Service.png'
import Background from './assets/Background.jpg'
import Map from './assets/map.png';
import BeforeAfterSlider from './BeforeAfterSlider';
import BeforeAfterSlider1 from './BeforeAfterSlider1';
import Header from './Header';
import { sendMessage } from './services/api/sendMessage';




function App() {

  const [choice, setChoice] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedMessage = `<b>Detailing service: </b>\n
      <b>Name: </b>${name}\n
      <b>Phone: </b>${phone}\n
      <b>Choice: </b>${choice}\n`;

    sendMessage(formattedMessage).then((res) => {
      if (res.ok) {
        setName('');
        setPhone('');
        setIsSubmitted(true);
        setChoice('');
      }
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  useEffect(() => {
    const splide = new Splide('.splide', {
      type: 'slide',
      perPage: 1,
      perMove: 1,
      pagination: true,
      arrows: true,
      breakpoints: {
        768: {
          destroy: false,
        },
      },
    });

    splide.mount();

    return () => splide.destroy();
  }, []);

  return (
    <>
     <div className="container">
      <Header />
        {/* <header className='header'>
          <div className='header__container'>
            <div className='logo__container'>
              <img src={Logo} alt="Logo" />
            </div>
            <div className="link__container">
              <a href="#">Services</a>
              <a href="#">Reviews</a>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </header> */}

        <section className='title'>
          <img className='machine' src={machine1} alt="" />
          <div className="title__container">
            <div className="title__left">
                <h1>We have been bringing vehicles to the <span className='orange'>perfect condition</span></h1>
                <div className="title__left__sup">
                  <a href="#" className='orange__btn'>Sign up</a>
                  <p>The quality of the work we perform is always impeccable, because we use the most advanced European technologies and materials that meet all safety and health requirements.</p>
                </div>
            </div>
            <div className="title__right">
                <img src={G} alt="" />
                <div>
                <h1>for over</h1>
                <h2>30 years</h2>
                </div>
            </div>

          </div>
        </section>

        <a name='about'></a>
        <section className='about'>
          <h1>About Us</h1>
          <div className="about__container">
            <img src={About} alt="" />
            <div className="about__right">
              <div className="about__item">
                <h1>01</h1>
                <h2>Our service was visited by over <span className='orange'>1000 cars</span></h2>
              </div>

              <div className="about__item">
                <h1>02</h1>
                <h2><span className='orange'>Our main advantage</span> when detailing the interior is that we use “dry” cleaning technology, which allows us <span className='orange'>not to wet</span> the floor covering, interior parts and vehicle seats</h2>
              </div>

              <div className="about__item">
                <h1>03</h1>
                <h2>This technology allows us to <span className='orange'>“pull” the dirt</span> out of surfaces, rather than “pushing” it in deeper into the surfaces, as is done by most detailers</h2>
              </div>

              <div className="about__item">
                <h1>04</h1>
                <h2>We provide <span className='orange'>all types of services</span> to bring your car into the perfect condition</h2>
              </div>
            </div>
          </div>
        </section>

        <section className='before__container'>
      <h1>Before / After</h1>
    <div className="before">
        <BeforeAfterSlider />
        <BeforeAfterSlider1 />
        </div>

    </section>
    <section className='work'>
      <div className="work__container1">
        <h1>Our works</h1>
        <a href="#" className='white__btn'>Sign up</a>
      </div>
      <div className="work__container">
        <img src={Service} alt="Service" />
        <div className='work__grid'>
          <img src={work1} alt="work1" className="work__item" />
          <img src={work2} alt="work2" className="work__item" />
          <img src={work3} alt="work3" className="work__item" />
          <img src={work4} alt="work4" className="work__item" />
        </div>
        <div className='splide work__slider'>
          <div className='splide__track'>
            <ul className='splide__list'>
              <li className='splide__slide'><img src={work1} alt="work1" /></li>
              <li className='splide__slide'><img src={work2} alt="work2" /></li>
              <li className='splide__slide'><img src={work3} alt="work3" /></li>
              <li className='splide__slide'><img src={work4} alt="work4" /></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <a name='services'></a>

        <section className='services'>
        <div className="work__container1">
            <h1>Services</h1>
            <a href="#" className='white__btn'>Contact Us</a>
          </div>

        <div className='services__container'>
          <div className='services__flex'>
            <div className='services__item height1'>
              <div className='item__top'>
                <h1>Hand Wash</h1>
                <h2>(outside, inside as doors, trunk, tires, rims, wheel arches)</h2>
              </div>
              <div className='item__down'>
                <p>Small - $75<br />
                   Mid - $95<br />
                   Big - $115<br />
                   Truck - $155<br />
                   Van - $155
                </p>
              </div>
            </div>

            <div className='services__item height1'>
              <div className='item__top'>
                <h1>Interior express</h1>
                <h2>(vacuum, surface refreshing, windows cleaning)</h2>
              </div>
              <div className='item__down'>
                <p>Small - $75<br />
                   Mid - $95<br />
                   Big - $125<br />
                   Truck - $95<br />
                   Van - $175
                </p>
              </div>
            </div>

            <div className='services__item height1'>
              <div className='item__top'>
                <h1>Deep interior detailing</h1>
                <h2>(vacuum, all surfaces cleaning, floor mats cleaning, removing all stains, grease, etc.)</h2>
              </div>
              <div className='item__down'>
                <p>Small - $165+<br />
                   Mid - $210+<br />
                   Big - $285+<br />
                   Truck - $210+<br />
                   Van - $350+
                </p>
              </div>
            </div>
          </div>

          <div className='services__flex'>
            <div className='services__item height2'>
              <div className='item__top'>
                <h1>Hand waxing</h1>
              </div>
              <div className='item__down'>
                <p>Small - $75<br />
                   Mid - $95<br />
                   Big - $115<br />
                   Truck - $155<br />
                   Van - $155
                </p>
              </div>
            </div>

            <div className='services__item height2'>
              <div className='item__top'>
                <h1>Compound polishing </h1>
              </div>
              <div className='item__down'>
                <p>Small - $480+<br />
                   Mid - $600+<br />
                   Big - $800+<br />
                   Truck - $800+<br />
                   Van - $1100+
                </p>
              </div>
            </div>

            <div className='service__img1'>
            <img src={Services} alt="" />
            </div>

            <div className='services__item height2'>
              <div className='item__top'>
                <h1>Ceramic coating</h1>
              </div>
              <div className='item__down'>
                <p>Small - $950<br />
                   Mid - $1200<br />
                   Big - $1500<br />
                   Truck - $1500<br />
                   Van - $2000
                </p>
              </div>
            </div>
          </div>

          <div className='services__flex'>
            <div className='services__item height3'>
              <div className='item__top'>
                <h1>Head lights restoration </h1>
              </div>
              <div className='item__down'>
                <p>$45+ each<br />
                </p>
              </div>
            </div>

            <div className='services__item height3'>
              <div className='item__top'>
                <h1>PDR (paintless dents repair)</h1>
              </div>
              <div className='item__down'>
                <p>$50+ each<br />
                </p>
              </div>
            </div>

            <div className='services__item height3'>
              <div className='item__top'>
                <h1>Bump repair</h1>
              </div>
              <div className='item__down'>
                <p>$150+<br />
                </p>
              </div>
            </div>
          </div>

          <div className='services__flex'>
          <div className='service__img'>
            <img src={Services} alt="" />
            </div>
            <div className='services__item height3'>
              <div className='item__top'>
                <h1>Scratch removing </h1>
              </div>
              <div className='item__down'>
                <p>$50+ each<br />
                </p>
              </div>
            </div>
          </div>

          <div className='serv__btn'>
        <a href="#">Contact Us</a>
        </div>

        </div>

        <a name='reviews'></a>

        <Slider />

        </section>

        <section className='mainForm'>
        <a name='contact'></a>

          <div className="form__container">
            <div className="form__flex">
            <div className="form__title">              
              <h1>
              We also provide free assessment and delivery of the customer’s vehicle to and from our service center
              </h1>
              <p>
              Our quality is always higher than the price
              </p>
            </div>

            <img src={G2} alt="" />
            </div>
            <form className='form'>
        <input 
          type="text" 
          placeholder='Name' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="tel" 
          placeholder='Phone' 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
        />
        <div className="select">
          <select 
            id="standard-select" 
            value={choice} 
            onChange={(e) => setChoice(e.target.value)} 
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
                    <span class="focus"></span>
</div>
{isSubmitted && <p>Message sent successfully!</p>}
            <a onClick={handleSubmit} className='orange__btn'>Sign up</a>

            </form>

          </div>
        </section>

     </div>

     <footer className='footer'>
      <div className="container">
        <div className="footer__container">
          <div className="footer__item">
            <img src={Logo} alt="" />
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#about">About Us</a>
          </div>
          <div className="footer__item">
            <h1>625 W 4TH DAVENPORT IA 52801-1046 USA</h1>
            <a href="#">gtldetal@gmail.com</a>
            <a href="#">Privacy policy</a>
            <a href="#">Сontract offer</a>
          </div>
          <div className="offthe">
              <img src={OffTheGrid} alt="" />
          </div>
          <div className='map'>
              <img src={Map} alt="" />
          </div>
        </div>
      </div>
     </footer>

     <footer className='footer1'>
      <div className="container">
      <img src={Logo} alt="" />
        <div className="footer__container">

          <div className="footer__item">
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#about">About Us</a>
          </div>
          <div className="footer__item">
            <a href="#">gtldetal@gmail.com</a>
            <a href="#">+375 99 94 4316</a>

  
          </div>
        </div>


          <h1 className='footer__h1'>625 W 4TH DAVENPORT IA 52801-1046 USA</h1>
          <div className='map'>
          <img src={Map} alt="" />
          </div>

        <div className="footer__container">
          <div className='footer__item'>
        <a href="#">Privacy policy</a>
        <a href="#">Сontract offer</a>
        </div>
          <div className="offthe">
              <img src={OffTheGrid} alt="" />
          </div>
          </div>
      </div>
     </footer>
    </>
  )
}

export default App
