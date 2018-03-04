import React, { Component } from "react";
import data from "../data/profile.json";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: data[0].basics,
            social: data[1].social,
            skills: data[2].skills
        };
    }

    renderSocialMedia() {
        const data = this.state.social;
        return data.map((item, index) => {
            return <a className="social-link" key={index} href={item.url}>{item.network} {item.usename}</a>
        });
    }

    renderSkills() {
        const data = this.state.skills;
        return data.map((item, index) => {
            return <li className="badge" key={index}>{item}</li>
        });
    }

    render() {
        return (
            <section id="profile" className="container profile">
                <div className="heading-container">
                    <div className="col">
                        <h2 className="heading">Profile</h2>
                        <h3 className="heading-highlight">{this.state.profile.firstname} {this.state.profile.lastname}</h3>
                        <p className="lead">{this.state.profile.label}</p>
                    </div>
                    <div className="col contact">
                        <p className="profile-contact">
                            <span>{this.state.profile.phone}</span><br/>
                            <span>{this.state.profile.email}</span><br/>
                        </p>
                        <div className="profile-social">
                            {this.renderSocialMedia()}
                        </div>
                    </div>
                </div>
                <article className="content-container">
                    <p className="lead">{this.state.profile.summary}</p>
                    <ul className="profile-skills">
                        {this.renderSkills()}
                    </ul>
                </article>
            </section>
        )
    }
}

export default Profile;