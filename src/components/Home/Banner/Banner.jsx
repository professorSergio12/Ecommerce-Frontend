import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Welcome to EchoEnclave, where passion for music meets cutting-edge technology. Immerse yourself in a world of sound as you explore our curated collection of premium headphones, earbuds, and audio accessories. Whether you're a seasoned audiophile or a casual listener, our expertly crafted audio solutions are designed to elevate your listening experience to new heights. With a focus on quality, style, and innovation, we invite you to discover the perfect harmony of superior sound and sleek design. Join us at EchoEnclave and embark on a journey where every note resonates, every beat captivates, and every moment becomes a symphony of sound.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;