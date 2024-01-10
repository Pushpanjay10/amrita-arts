import React, { useEffect, useState } from 'react';
import './styles/app.css';

import { handleGetAllImage } from './firebase/home';
import Loader from './components/Loader';

import aboutImage from './images/about.jpg';

function App() {
	const [allImg, setAllImg] = useState([]);
	const [isFetchAllImgLoading, setIsFetchAllImgLoading] = useState(false);
	// const [msgShown, setMsgShown] = useState('');

	useEffect(() => {
		handleGetAllImage(setAllImg, setIsFetchAllImgLoading);
	}, []);

	return (
		<div className="App">
			<div className="scroll-up-btn">
				<i className="fas fa-angle-up"></i>
			</div>

			<nav className="navbar">
				<div className="max-width">
					<div className="logo">
						<a href="#home">
							Art__<span>.space.</span>
						</a>
					</div>
					<ul className="menu">
						<li>
							<a href="#home" className="menu-btn">
								Home
							</a>
						</li>
						<li>
							<a href="#about" className="menu-btn active">
								About
							</a>
						</li>
						<li>
							<a href="#creativity" className="menu-btn active">
								My Creativity
							</a>
						</li>
						<li>
							<a href="#skills" className="menu-btn active">
								Skills
							</a>
						</li>
						<li>
							<a href="#works" className="menu-btn">
								Works
							</a>
						</li>
					</ul>
					<div className="menu-btn">
						<i className="fas fa-bars"></i>
					</div>
				</div>
			</nav>
			{/* <!-- home section start --> */}
			<section className="home" id="home">
				<div className="max-width">
					<div className="home-content">
						<div className="text-1">Hello, my name is</div>
						<div className="text-2" onClick={() => console.log(allImg)}>
							Amrita Kumari
						</div>
						<div className="text-3">And I'm Artist</div>
					</div>
				</div>
			</section>
			{/* <!-- about section start --> */}
			<section className="about" id="about">
				<div className="max-width">
					<h2 className="title">About me</h2>
					<div className="about-content">
						<div className="column left">
							<img src={aboutImage} alt="" />
						</div>
						<div className="column right">
							<div className="text">I'm Amrita kumari and I'm Artist</div>
							<p>“Creativity takes courage.”</p>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- creativity section start --> */}
			<section className="creativity" id="creativity">
				<div className="max-width">
					<h2 className="title">My Creativity</h2>
					<div className="serv-content">
						<div className="card">
							<div className="box">
								<i className="fas fa-paint-brush"></i>
								<div className="text">Painting</div>
								<p>Making Beautiful Paintings.</p>
							</div>
						</div>
						<div className="card">
							<div className="box">
								<i className="fas fa-chart-line"></i>
								<div className="text">Designing</div>
								<p>Making Beautiful designs</p>
							</div>
						</div>
						<div className="card">
							<div className="box">
								<i className="fas fa-code"></i>
								<div className="text">Crafting</div>
								<p>creativity designing</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- skills section start --> */}
			<section className="skills" id="skills">
				<div className="max-width">
					<h2 className="title">My skills</h2>
					<div className="skills-content">
						<div className="column left">
							<div className="text">My creative skills & experiences.</div>
							<p>I am Experienced in these and makes realistic paintings and much more.</p>
						</div>
						<div className="column right">
							<div className="bars">
								<div className="info">
									<span>Communication</span>
									<span>90%</span>
								</div>
								<div className="line html"></div>
							</div>
							<div className="bars">
								<div className="info">
									<span>Composition</span>
									<span>80%</span>
								</div>
								<div className="line css"></div>
							</div>
							<div className="bars">
								<div className="info">
									<span>Realistic drawing</span>
									<span>80%</span>
								</div>
								<div className="line js"></div>
							</div>
							<div className="bars">
								<div className="info">
									<span>Constructive drawing</span>
									<span>50%</span>
								</div>
								<div className="line php"></div>
							</div>
							<div className="bars">
								<div className="info">
									<span>Colour theory</span>
									<span>70%</span>
								</div>
								<div className="line mysql"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Works section start */}
			<section className="works" id="works">
				<h2 className="title">Works</h2>
				<Loader isLoading={isFetchAllImgLoading} />
				<div className="wallpaper">
					{allImg.map((item, index) => (
						<img key={index} src={item.img_url} alt="img" />
					))}
				</div>
			</section>
		</div>
	);
}

export default App;
