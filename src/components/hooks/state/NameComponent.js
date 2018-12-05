import React from 'react';

export default class NameComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'John',
            lastName: 'Smith',
        };
    }

    onFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        })
    };

    onLastNameChange = (e) => {
        this.setState({
            lastName: e.target.value
        })
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <label
                        htmlFor="first_name"
                    >
                        <input
                            name="first_name"
                            value={this.state.firstName}
                            onChange={this.onFirstNameChange}
                        />
                    </label>
                </div>
                <div>
                    <label
                        htmlFor="last_name"
                    >
                        <input
                            name="last_name"
                            value={this.state.lastName}
                            onChange={this.onLastNameChange}
                        />
                    </label>
                </div>
                <p>
                    User name:
                    {`${this.state.firstName} ${this.state.lastName}`}
                </p>
            </React.Fragment>
        );
    }
}