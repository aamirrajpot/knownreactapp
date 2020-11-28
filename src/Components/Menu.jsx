import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const Menu = () => {
	const location = useLocation();
	return (
		<>
			<section class="navbar custom-navbar navbar-fixed-top" role="navigation">
				<div class="container">
					<div class="navbar-header">
						<button
							class="navbar-toggle"
							data-toggle="collapse"
							data-target=".navbar-collapse"
						>
							<span class="icon icon-bar"></span>
							<span class="icon icon-bar"></span>
							<span class="icon icon-bar"></span>
						</button>

						{/*<!-- lOGO TEXT HERE -->*/}
						<NavLink to="/" className="navbar-brand">
							Known
						</NavLink>
						{/* <a href="" class="navbar-brand">
							Known
						</a> */}
					</div>

					{/*<!-- MENU LINKS -->*/}
					<div class="collapse navbar-collapse">
						<ul class="nav navbar-nav navbar-nav-first">
							<li className={location.pathname === "/" ? "active" : ""}>
								<NavLink to="/" className="smoothScroll">
									Home
								</NavLink>
							</li>
							<li className={location.pathname === "/about" ? "active" : ""}>
								<NavLink to="/about" className="smoothScroll">
									About
								</NavLink>
							</li>
							<li className={location.pathname === "/team" ? "active" : ""}>
								<NavLink to="/team" className="smoothScroll">
									Our Teachers
								</NavLink>
							</li>
							<li className={location.pathname === "/courses" ? "active" : ""}>
								<NavLink to="/courses" className="smoothScroll">
									Courses
								</NavLink>
							</li>
							<li
								className={location.pathname === "/testimonial" ? "active" : ""}
							>
								<NavLink to="/testimonial" className="smoothScroll">
									Reviews
								</NavLink>
							</li>
							<li className={location.pathname === "/contact" ? "active" : ""}>
								<NavLink to="/contact" className="smoothScroll">
									Contact
								</NavLink>
							</li>
						</ul>

						<ul className="nav navbar-nav navbar-right">
							<li>
								<NavLink to="/">
									<i class="fa fa-phone"></i> +65 2244 1100
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default Menu;
