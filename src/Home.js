import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        /> */}
        
            <h2 >Premium mobile phones in demand :</h2>
            <br/>
        
        <div className="home__row">
          <Product
            id="4592435"
            title="SAMSUNG Galaxy S22 Ultra 5G (Phantom Black, 512 GB)  (12 GB RAM)"
            price={118999}
            image="https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/w/t/r/-original-imaggj68cgtdacxn.jpeg?q=70"
            rating={5}
          />
          <Product
            id="4592433"
            title="APPLE iPhone 14 Pro Max (Deep Purple, 128 GB)"
            price={139900}
            image="https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/6/x/j/-original-imaghxejqvpwfqh2.jpeg?q=70"
            rating={4}
          />
          <Product
            id="4592437"
            title="iQOO 7 Legend 5G (Legendary Track Design, 8GB RAM, 128GB Storage) | 3GB Extended RAM | Upto 9 Months No Cost EMI | 6 Months Free Screen Replacement"
            price={550}
            image="https://m.media-amazon.com/images/I/51LOXKT+vvL._SL1200_.jpg"
            rating={5}
          />
        </div>
        <h2 >Men's clothing :</h2>
            <br/>
        <div className="home__row">
          <Product
            id="4592437"
            title="Lightly Washed Slim Fit Denim Jacket"
            price={1326}
            image="https://assets.ajio.com/medias/sys_master/root/20221031/BoTq/635fdf4af997ddfdbd4c2df6/-473Wx593H-469239334-blue-MODEL.jpg"
            rating={5}
          />
          <Product
            id="4592437"
            title="Quilted Hooded Puffer Jacket"
            price={8999}
            image="https://assets.ajio.com/medias/sys_master/root/20221109/CdXn/636bc26faeb269659c80940a/-473Wx593H-441539210-black-MODEL.jpg"
            rating={4}
          />
          <Product
            id="4592437"
            title="Men Solid Bomber Jacket"
            price={1416}
            image="https://rukminim1.flixcart.com/image/612/612/kwtkxow0/jacket/u/n/d/m-no-14306266-roadster-original-imag9ew6wg4rhqt6.jpeg?q=70"
            rating={4}
          />
          <Product
            id="4592437"
            title="Men Solid Denim Jacket"
            price={600}
            image="https://rukminim1.flixcart.com/image/832/832/xif0q/jacket/x/h/p/xl-nmnt-7004-montrez-original-imag5t3nfpbqhgrx-bb.jpeg?q=70"
            rating={3}
          />
        </div>
        <h2>Remote controlled toys :</h2>
        <br/>
        <div className="home__row">
          <Product
            id="4592433"
            title="Dallao Waterproof Remote Controlled Rock Crawler RC Monster Car With Wheel Remote , 4 Wheels , 1 Stepnee, , 1:20 scale  (Blue)"
            price={990}
            image="https://rukminim1.flixcart.com/image/832/832/kkbh8cw0/remote-control-toy/h/o/n/waterproof-remote-controlled-rock-crawler-rc-monster-car-with-original-imafzzw3d6hcy4qp.jpeg?q=70"
            rating={3}
          />
          <Product
            id="4592433"
            title="NHR Nano Drone Without Camera with 6-Axis Gyro, Lights & 360 Degree Rolling Function  (White)"
            price={1499}
            image="https://rukminim1.flixcart.com/image/832/832/xif0q/remote-control-toy/q/p/y/nano-drone-without-camera-with-6-axis-gyro-lights-360-degree-original-imagh9f7tzvnncjb.jpeg?q=70"
            rating={4}
          />
          <Product
            id="4592433"
            title="KTRS Electric Radio Control Water Bomb RC Tank Car Stunt Toy for Blue Dual Control  (Multicolor)"
            price={9999}
            image="https://rukminim1.flixcart.com/image/832/832/xif0q/remote-control-toy/g/z/t/electric-radio-control-water-bomb-rc-tank-car-stunt-toy-for-blue-original-imaghgy6szjdhuhz.jpeg?q=70"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
