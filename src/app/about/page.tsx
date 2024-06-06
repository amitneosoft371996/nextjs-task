import React from 'react'
import Image from 'next/image';
import './about.css'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole, faDrumstickBite, faSeedling, faUserSecret, faWheatAwn } from '@fortawesome/free-solid-svg-icons';
const About = () => {
  return (
    <div>
      <section className="about-story">
				<div className="container">
					<div className="grid grid-cols-2 gap-4">
						<div className="col">
							<figure className="img-holder">
								<Image src="/images/about.jpg" width={570} height={400} alt=""/>
							</figure>
						</div>
						<div className="col">
							<div className="about-text">
								<div className="theme_title">
									<h3>story about us</h3>
								</div>
								<div className="about_quot">
									Our food should be our medicine,Our medicine organics
									should be our food your health.
								</div>
								<div className="text"><p>How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness</p></div>
								<div className="icon-box">
									<div className="single-item">
										<div className="icon"><FontAwesomeIcon icon={faWheatAwn} /></div>
										<div className="count">745+</div>
										<div className="name color1">Own Farm Houses</div>
									</div>
									<div className="single-item">
										<div className="icon"><FontAwesomeIcon icon={faUserSecret} /></div>
										<div className="count">2480+</div>
										<div className="name color1">Pastoral Farmers</div>
									</div>
								

								</div>
								<div className="text">
									<p>Denouncing pleasure and praising pain was born and I will give you a complete account of the system, the actual teachings of the great explorer.</p>
								</div>
								<div className="link">
									<a href="#" className="tran3s">read more</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
      <section className="three-column">
				<div className="contaner">
					<div className="grid grid-cols-3 gap-4">
						<div className=" color1_bg text-center">
							<div className="single-item ">
								<h5>Organic meat Food</h5>
								<div className="icon"><FontAwesomeIcon icon={faDrumstickBite} /></div>
								<p>
								We will give you a complete account of the system, and expound the actual <br/>teachings of the great explorer of the truth, the master-builder of <br/> human complete happiness.</p>
								<div className="link"><Link href="/moreproduct">Shop Now</Link></div>
							</div>
						</div>
						<div className=" color1_bg text-center">
							<div className="single-item ">
								<h5>Organic Vegetables</h5>
								<div className="icon"><FontAwesomeIcon icon={faSeedling} /></div>
								<p>
								We will give you a complete account of the system, and expound the actual <br/>teachings of the great explorer of the truth, the master-builder of <br/> human complete happiness.</p>
								<div className="link"><Link href="/moreproduct">Shop Now</Link></div>
							</div>
						</div>
						<div className=" color1_bg text-center">
							<div className="single-item ">
								<h5>Organic Fruits</h5>
								<div className="icon"><FontAwesomeIcon icon={faAppleWhole} /></div>
								<p>
								We will give you a complete account of the system, and expound the actual <br/>teachings of the great explorer of the truth, the master-builder of <br/> human complete happiness.</p>
								<div className="link"><Link href="/moreproduct">Shop Now</Link></div>
							</div>
						</div>

					</div>
				</div>
			</section>
    </div>
  )
}

export default About