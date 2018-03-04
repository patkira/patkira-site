import React, { Component } from "react";
import data from "../data/work.json";

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            work: data
        };
    }

    renderWorks() {
        const data = this.state.work;
        return data.map(function(item, index) {
            return <article className="card" key={index}>
                <h3>{item.title} <span className="text-inline">{item.startDate} - {item.endDate}</span></h3>
                <p className="lead">{item.company} {item.location}</p>
                <ul>
                {item.experience.map((experience, index) =>
                    <li key={index}>{experience}</li>
                )}
                </ul>
            </article>
        });
    }

    render() {
        return (
            <section id="work" className="container">
                <div className="heading-container">
                    <h2 className="heading">Work experience</h2>
                </div>
                <div className="content-container">
                    <div className="card-container col-one">
                        {this.renderWorks()}
                    </div>
                </div>
            </section>
        )
    }
}

export default Work;