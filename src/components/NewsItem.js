import React, { Component } from "react";

export class NewsItem extends Component {
	render() {
		let { title, description, imageUrl, newsUrl } = this.props;
		return (
			<div className="my-3">
				<div className="card" style={{ width: "18rem" }}>
					<img src={!imageUrl?"https://staticg.sportskeeda.com/editor/2021/10/5f7f9-16343207055859-1920.jpg":imageUrl} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">{description}</p>
						<a rel="noreferrer" href={newsUrl}target="_blank" className="btn btn-sm btn-primary">
							Read more{" "}
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsItem;
