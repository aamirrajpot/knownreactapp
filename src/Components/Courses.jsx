import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function Courses() {
	return (
		// <!-- Courses -->
		<section id="courses">
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-sm-12">
						<div className="section-title">
							<h2>
								Popular Courses{" "}
								<small>Upgrade your skills with newest courses</small>
							</h2>
						</div>

						<OwlCarousel className="owl-carousel owl-theme owl-courses">
							<div className="col-md-4 col-sm-4">
								<div className="item">
									<div className="courses-thumb">
										<div className="courses-top">
											<div className="courses-image">
												<img
													src="assets/images/courses-image1.jpg"
													className="img-responsive"
													alt=""
												/>
											</div>
											<div className="courses-date">
												<span>
													<i className="fa fa-calendar"></i> 12 / 7 / 2018
												</span>
												<span>
													<i className="fa fa-clock-o"></i> 7 Hours
												</span>
											</div>
										</div>

										<div className="courses-detail">
											<h3>
												<a href="#">Social Media Management</a>
											</h3>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</p>
										</div>

										<div className="courses-info">
											<div className="courses-author">
												<img
													src="assets/images/author-image1.jpg"
													className="img-responsive"
													alt=""
												/>
												<span>Mark Wilson</span>
											</div>
											<div className="courses-price">
												<a href="#">
													<span>USD 25</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-4">
								<div className="item">
									<div className="courses-thumb">
										<div className="courses-top">
											<div className="courses-image">
												<img
													src="assets/images/courses-image2.jpg"
													className="img-responsive"
													alt=""
												/>
											</div>
											<div className="courses-date">
												<span>
													<i className="fa fa-calendar"></i> 20 / 7 / 2018
												</span>
												<span>
													<i className="fa fa-clock-o"></i> 4.5 Hours
												</span>
											</div>
										</div>

										<div className="courses-detail">
											<h3>
												<a href="#">Graphic & Web Design</a>
											</h3>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</p>
										</div>

										<div className="courses-info">
											<div className="courses-author">
												<img
													src="assets/images/author-image2.jpg"
													className="img-responsive"
													alt=""
												/>
												<span>Jessica</span>
											</div>
											<div className="courses-price">
												<a href="#">
													<span>USD 80</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-4">
								<div className="item">
									<div className="courses-thumb">
										<div className="courses-top">
											<div className="courses-image">
												<img
													src="assets/images/courses-image3.jpg"
													className="img-responsive"
													alt=""
												/>
											</div>
											<div className="courses-date">
												<span>
													<i className="fa fa-calendar"></i> 15 / 8 / 2018
												</span>
												<span>
													<i className="fa fa-clock-o"></i> 6 Hours
												</span>
											</div>
										</div>

										<div className="courses-detail">
											<h3>
												<a href="#">Marketing Communication</a>
											</h3>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</p>
										</div>

										<div className="courses-info">
											<div className="courses-author">
												<img
													src="assets/images/author-image3.jpg"
													className="img-responsive"
													alt=""
												/>
												<span>Catherine</span>
											</div>
											<div className="courses-price free">
												<a href="#">
													<span>Free</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-4">
								<div className="item">
									<div className="courses-thumb">
										<div className="courses-top">
											<div className="courses-image">
												<img
													src="assets/images/courses-image4.jpg"
													className="img-responsive"
													alt=""
												/>
											</div>
											<div className="courses-date">
												<span>
													<i className="fa fa-calendar"></i> 10 / 8 / 2018
												</span>
												<span>
													<i className="fa fa-clock-o"></i> 8 Hours
												</span>
											</div>
										</div>

										<div className="courses-detail">
											<h3>
												<a href="#">Summer Kids</a>
											</h3>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</p>
										</div>

										<div className="courses-info">
											<div className="courses-author">
												<img
													src="assets/images/author-image1.jpg"
													className="img-responsive"
													alt=""
												/>
												<span>Mark Wilson</span>
											</div>
											<div className="courses-price">
												<a href="#">
													<span>USD 45</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-4">
								<div className="item">
									<div className="courses-thumb">
										<div className="courses-top">
											<div className="courses-image">
												<img
													src="assets/images/courses-image5.jpg"
													className="img-responsive"
													alt=""
												/>
											</div>
											<div className="courses-date">
												<span>
													<i className="fa fa-calendar"></i> 5 / 10 / 2018
												</span>
												<span>
													<i className="fa fa-clock-o"></i> 10 Hours
												</span>
											</div>
										</div>

										<div className="courses-detail">
											<h3>
												<a href="#">Business &amp; Management</a>
											</h3>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</p>
										</div>

										<div className="courses-info">
											<div className="courses-author">
												<img
													src="assets/images/author-image2.jpg"
													className="img-responsive"
													alt=""
												/>
												<span>Jessica</span>
											</div>
											<div className="courses-price free">
												<a href="#">
													<span>Free</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</OwlCarousel>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Courses;
