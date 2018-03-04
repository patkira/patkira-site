import React, { Component } from "react";
import data from "../data/achievements.json";

class Achievements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            achievements: data
        };
    }

    renderAchievements() {
        const data = this.state.achievements;
        return data.map(function(item, index) {
            return <article className="card" key={index}>
                <h3 className="title-small">{item.award} <span className="text-inline">{item.date}</span></h3>
                <p className="lead tight">{item.desc}</p>
            </article>
        });
    }

    render() {
        return (
            <section id="achievements" className="container">
                <div className="heading-container">
                    <h2 className="heading">Achievements</h2>
                </div>
                <div className="content-container">
                    <div className="card-container">
                        {this.renderAchievements()}
                    </div>
                </div>
            </section>
        )
    }
}

export default Achievements;