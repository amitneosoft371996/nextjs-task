import Image from "next/image";
import { faCartShopping, faCoffee, faEye, faHeart, faSortDesc, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './page.css';
export default function Home() {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="hero min-h-screen" style={{ backgroundImage: 'url(/images/slide-1.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1><p></p>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="hero min-h-screen" style={{ backgroundImage: 'url(/images/slide-3.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="hero min-h-screen" style={{ backgroundImage: 'url(/images/slide-2.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="hero min-h-screen" style={{ backgroundImage: 'url(/images/slide-3.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <section className="moreproduct mt-12 mb-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="product-item shadow-lg shadow-cyan-500/50">
              <div className="item wow fadeInLef animated visibility: visible" style={{ backgroundImage: 'url(/images/1.jpg)' }}>
                <div className="offer-sec">
                  <div className="inner-title">For All Cosmetics<div className="offer"><span>30% <br />OFF</span></div></div>
                </div>
                <div className="content">
                  <h3>We Grow Beauty</h3>
                  <p>It is a long established fact that a reader will be <br /> distracted by the readable content of a page when <br /> looking organic cosmetics.</p>
                  <div className="link-btn"><a href="#" className="tran3s">More Products<span className="fa fa-sort-desc"></span></a></div>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="item wow fadeInLef animated visibility: visible" style={{ backgroundImage: 'url(/images/2.jpg)' }}>
                <div className="offer-sec">
                  <div className="inner-title">For All Cosmetics<div className="offer"><span>30% <br />OFF</span></div></div>
                </div>
                <div className="content">
                  <h3>We Grow Beauty</h3>
                  <p>It is a long established fact that a reader will be <br /> distracted by the readable content of a page when <br /> looking organic cosmetics.</p>
                  <div className="link-btn"><a href="#" className="tran3s">More Products<span className="fa fa-sort-desc"></span></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="moreproduct mt-12 mb-12">
        <div className="container">
          <div className="grid grid-cols-4 gap-4 featured-product ">
            <div className="inner-box ">
              <div className="single-item center">
                <figure className="image-box"><Image src='/images/proimg1.png' width={100} height={80} alt=''></Image><div className="product-model new">New</div></figure>
                <div className="content">
                  <h3><a href="shop-single.html">Turmeric Powder</a></h3>
                  <div className="ratingicon"><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span></div>
                  <div className="price">$12.99 <span className="prev-rate">$14.99</span></div>
                </div>
                <div className="overlay-box">
                  <div className="inner">
                    <div className="top-content">
                      <ul>
                        <li><a href="#"><span className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></span></a></li>
                        <li className="tultip-op"><span className="tultip"><i className="fa fa-sort-desc"></i>ADD TO CART</span><a href="#"><span className="icon-icon-32846"><FontAwesomeIcon icon={faCartShopping} /></span></a>

                        </li>
                        <li><a href="#"><span className="fa fa-heart-o"><FontAwesomeIcon icon={faHeart} /></span></a></li>
                      </ul>
                    </div>
                    <div className="bottom-content">
                      <h4><a href="#">It Contains:</a></h4>
                      <p>35% of organic raisins 55% of oats and 10% of butter. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner-box ">
              <div className="single-item center">
                <figure className="image-box"><Image src='/images/proimg2.png' width={100} height={80} alt=''></Image></figure>
                <div className="content">
                  <h3><a href="shop-single.html">Turmeric Powder</a></h3>
                  <div className="ratingicon"><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span></div>
                  <div className="price">$12.99 <span className="prev-rate">$14.99</span></div>
                </div>
                <div className="overlay-box">
                  <div className="inner">
                    <div className="top-content">
                      <ul>
                        <li><a href="#"><span className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></span></a></li>
                        <li className="tultip-op"><span className="tultip"><i className="fa fa-sort-desc"></i>ADD TO CART</span><a href="#"><span className="icon-icon-32846"><FontAwesomeIcon icon={faCartShopping} /></span></a>

                        </li>
                        <li><a href="#"><span className="fa fa-heart-o"><FontAwesomeIcon icon={faHeart} /></span></a></li>
                      </ul>
                    </div>
                    <div className="bottom-content">
                      <h4><a href="#">It Contains:</a></h4>
                      <p>35% of organic raisins 55% of oats and 10% of butter. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner-box ">
              <div className="single-item center">
                <figure className="image-box"><Image src='/images/proimg3.png' width={100} height={80} alt=''></Image><div className="product-model  hot">Hot</div></figure>
                <div className="content">
                  <h3><a href="shop-single.html">Turmeric Powder</a></h3>
                  <div className="ratingicon"><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span></div>
                  <div className="price">$12.99 <span className="prev-rate">$14.99</span></div>
                </div>
                <div className="overlay-box">
                  <div className="inner">
                    <div className="top-content">
                      <ul>
                        <li><a href="#"><span className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></span></a></li>
                        <li className="tultip-op"><span className="tultip"><i className="fa fa-sort-desc"></i>ADD TO CART</span><a href="#"><span className="icon-icon-32846"><FontAwesomeIcon icon={faCartShopping} /></span></a>

                        </li>
                        <li><a href="#"><span className="fa fa-heart-o"><FontAwesomeIcon icon={faHeart} /></span></a></li>
                      </ul>
                    </div>
                    <div className="bottom-content">
                      <h4><a href="#">It Contains:</a></h4>
                      <p>35% of organic raisins 55% of oats and 10% of butter. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner-box ">
              <div className="single-item center">
                <figure className="image-box"><Image src='/images/proimg4.png' width={100} height={80} alt=''></Image><div className="product-model new">New</div></figure>
                <div className="content">
                  <h3><a href="shop-single.html">Turmeric Powder</a></h3>
                  <div className="ratingicon"><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span></div>
                  <div className="price">$12.99 <span className="prev-rate">$14.99</span></div>
                </div>
                <div className="overlay-box">
                  <div className="inner">
                    <div className="top-content">
                      <ul>
                        <li><a href="#"><span className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></span></a></li>
                        <li className="tultip-op"><span className="tultip"><i className="fa fa-sort-desc"></i>ADD TO CART</span><a href="#"><span className="icon-icon-32846"><FontAwesomeIcon icon={faCartShopping} /></span></a>

                        </li>
                        <li><a href="#"><span className="fa fa-heart-o"><FontAwesomeIcon icon={faHeart} /></span></a></li>
                      </ul>
                    </div>
                    <div className="bottom-content">
                      <h4><a href="#">It Contains:</a></h4>
                      <p>35% of organic raisins 55% of oats and 10% of butter. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner-box ">
              <div className="single-item center">
                <figure className="image-box"><Image src='/images/proimg5.png' width={100} height={80} alt=''></Image></figure>
                <div className="content">
                  <h3><a href="shop-single.html">Turmeric Powder</a></h3>
                  <div className="ratingicon"><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span></div>
                  <div className="price">$12.99 <span className="prev-rate">$14.99</span></div>
                </div>
                <div className="overlay-box">
                  <div className="inner">
                    <div className="top-content">
                      <ul>
                        <li><a href="#"><span className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></span></a></li>
                        <li className="tultip-op"><span className="tultip">ADD TO CART</span><a href="#"><span className="icon-icon-32846"><FontAwesomeIcon icon={faCartShopping} /></span></a>

                        </li>
                        <li><a href="#"><span className="fa fa-heart-o"><FontAwesomeIcon icon={faHeart} /></span></a></li>
                      </ul>
                    </div>
                    <div className="bottom-content">
                      <h4><a href="#">It Contains:</a></h4>
                      <p>35% of organic raisins 55% of oats and 10% of butter. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
