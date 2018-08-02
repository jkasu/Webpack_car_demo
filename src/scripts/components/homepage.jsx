import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';

var HomePage = React.createClass({
	render: function(){
		return(
			<div className="home-page">
				<section className="welcome">
					<h1> Hi, Friends!!</h1>
					<h3>welcome to BC-CarPool!!</h3>
				</section>
				<section className="intro-block">
					<div className="intro">
						<h4>Do you Own a car?</h4>
						<p>Offer a ride .</p>
						<Link      to="/create" className="btn-primary btn">Offer a Ride</Link>
					</div>
					<div className="intro">
						<h4>Dont own a car?</h4>
						<p>Take a ride .</p>
						<Link to="/search" className="btn-primary btn">Take a Ride</Link>
					</div>
				</section>
				<h4 className="purpose">Share or Offer a ride . </h4>
			</div>

		);
	}
});

module.exports = HomePage;