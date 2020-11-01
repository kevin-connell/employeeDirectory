import React, { Component } from "react";
import BigContact from "../BigContact";
import ListContact from "../ListContact";
import Navbar from "../Navbar";
import Sort from "../Sort";
import contactList from "../contacts.json"
import Search from "../Search";

class Container extends Component {
    state = {
        query: "",
        currentId: "1",
        currentData: {},
        contacts: contactList,
        sort: "",
        direction: ""
    };

    componentDidMount() {
        this.updateCurrent();
    }

    handleSelection = event => {
        this.setState({currentId: event.target.getAttribute("name")}, () => {this.updateCurrent()})
    }

    updateCurrent = () => {
        console.log("CURRENT CHANGE")
        let currentContact = contactList.filter(item => item.id === this.state.currentId)
        this.setState({ currentData: currentContact[0] }, () => { console.log(this.state.currentData) })
    }

    handleSortChange = event => {
        this.updateCurrent();
        console.log(event.target.getAttribute("name"))
        if (event.target.getAttribute("name") === this.state.sort) {
            if (this.state.direction === "ASC") {
                this.setState({ direction: "DESC" }, () => { this.updateResults() })
            } else {
                this.setState({ direction: "", sort: "" }, () => { this.updateResults() })
            }
        } else {
            this.setState({ direction: "ASC", sort: event.target.getAttribute("name") }, () => { this.updateResults() })
        }
        console.log(`Sort: ${this.state.sort}   Direction: ${this.state.direction}`)
    }

    handleInputChange = event => {
        console.log("handling")
        this.setState({ query: event.target.value }, () => { this.updateResults() });
    };

    updateResults = () => {
        console.log('filtering...')
        let newThing = contactList.filter(person => person.fullname.toLowerCase().includes((this.state.query).toLowerCase()) || person.phone.toLowerCase().includes((this.state.query).toLowerCase()));
        if (this.state.sort !== "") {
            console.log("sorting...")
            this.sortThem(newThing, this.state.sort, this.state.direction)
            this.setState({ contacts: newThing });
        } else {
            this.setState({ contacts: newThing });
        }
    }

    sortThem(toBeSorted, sort, direction) {
        toBeSorted.sort(function (a, b) {
            let sortType = sort;
            let directionType = direction;
            let x
            let y
            switch (sortType) {
                case "fullname":
                    x = a.fullname.toLowerCase();
                    y = b.fullname.toLowerCase();
                    break;
                case "email":
                    x = a.email.toLowerCase();
                    y = b.email.toLowerCase();
                    break;
                case "phone":
                    x = a.phone.toLowerCase();
                    y = b.phone.toLowerCase();
                    break;
                default:
                    break
            }
            if (directionType === "ASC") {
                if (x < y) { return -1; }
                if (x > y) { return 1; }
                return 0;
            } else {
                if (x < y) { return 1; }
                if (x > y) { return -1; }
                return 0;
            }
        });
    }

    render() {
        return (
            <>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s1">
                            <p>Search:</p>
                        </div>
                        <div className="col s11">
                            <form>
                                <Search
                                    handleInputChange={this.handleInputChange}
                                />
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="collection col s12 m6">
                            <Sort
                                sort={this.state.sort}
                                direction={this.state.direction}
                                handleSortChange={this.handleSortChange}
                            />
                            <ul className="tableScroll collection">
                                {this.state.contacts.map(person => (
                                    <ListContact
                                        key={person.id}
                                        id={person.id}
                                        fullname={person.fullname}
                                        picture={person.picture}
                                        email={person.email}
                                        phone={person.phone}
                                        active={person.id === this.state.currentId ? true : false}
                                        handleSelection = {this.handleSelection}
                                    />
                                ))}
                            </ul>
                        </div>
                        {<BigContact
                            id={this.state.currentId}
                            fullname={this.state.currentData.fullname}
                            picture={this.state.currentData.picture}
                            email={this.state.currentData.email}
                            phone={this.state.currentData.phone}
                        />}
                    </div>
                </div>
            </>
        )
    }
}

export default Container;