import React, { Component } from "react";
import ClassNames from "classnames";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNavOpen: false,
            items: [
                {
                    "title": "profile",
                    "link": "#profile",
                    "isactive": true
                },
                {
                    "title": "work experience",
                    "link": "#work"
                },
                {
                    "title": "education",
                    "link": "#education"
                },
                {
                    "title": "achievements",
                    "link": "#achievements"
                }
            ]
        };
        this.toggleMobileNav = this.toggleMobileNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    closeNav() {
        this.setState({
            mobileNavOpen: false
        });
    }

    toggleMobileNav() {
        if (this.state.mobileNavOpen) {
            this.setState({
                mobileNavOpen: false
            });
        } else {
            this.setState({
                mobileNavOpen: true
            });
        }
    }

    renderNavItems() {
        const data = this.state.items;
        return data.map(function (item, index) {
            return <li className="nav-item" key={index}><a onClick={() => this.closeNav()} href={item.link}>{item.title}</a></li>
        });
    }

    render() {
        const navClasses = ClassNames({
          nav: true,
          "nav-open": this.state.mobileNavOpen
        });
        return (
            <header>
                <button className="nav-toggle" onClick={this.toggleMobileNav}>
                    <span>Menu</span>
                </button>
                <div className={navClasses}>
                    <ul className="nav-list">
                        <li className="nav-item name">
                            <span>Pat Kira</span>
                        </li>
                        {this.renderNavItems()}
                    </ul>
                </div>
            </header>
        )
    }
}

export default Nav;