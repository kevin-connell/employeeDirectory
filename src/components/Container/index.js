import React, { Component } from "react";
import BigContact from "../BigContact";
import ListContact from "../ListContact";
import Navbar from "../Navbar";
import Sort from "../Sort";
import contactList from "../contacts.json"
import Search from "../Search";

class Container extends Component {
    state = {
        query: "Je",
        current: "",
        contacts: contactList,
        sort: "",
        direction: ""
    };

    handleInputChange = event => {
        console.log("handling")
        this.setState({ query: event.target.value }, () => {
            if (this.state.query !== "") {
                const newThing = contactList.filter(person => person.fullname.toLowerCase().includes((this.state.query).toLowerCase()));
                this.setState({ contacts: newThing });
            }else{
                this.setState({ contacts: contactList})
            }
        });
    };

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
                                    handleInputChange = {this.handleInputChange}
                                />
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="collection col s12 m6">
                            <Sort
                                sort={this.state.sort}
                                direction={this.state.direction}
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
                                        active={person.id === this.state.current ? true : false}
                                    />
                                ))}
                            </ul>
                        </div>
                        {this.state.current !== "" ? <p>Select a contact</p> : <BigContact
                            key="1"
                            id="1"
                            fullname="Kevin Connell"
                            picture="https://randomuser.me/api/portraits/women/8.jpg"
                            email="kevinconnell@email.com"
                            phone="267-210-4730"
                        />}
                    </div>
                </div>
            </>
        )
    }
}

export default Container;