import React, { Component } from "react";
import data from "../data/education.json";

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            education: data
        };
    }

    renderEducation() {
        const data = this.state.education;
        return data.map(function(item, index) {
            return <article className="card" key={index}>
                <h3 className="title-small">{item.institution} <span className="text-inline">{item.country}</span></h3>
                <p className="lead tight">{item.degree}</p>
                <p>{item.startDate} - {item.endDate}</p>
            </article>
        });
    }

    render() {
        return (
            <section id="education" className="container">
                <div className="heading-container">
                    <h2 className="heading">Education</h2>
                </div>
                <div className="content-container">
                    <div className="card-container">
                        {this.renderEducation()}
                    </div>
                </div>
            </section>
        )
    }
}

export default Education;