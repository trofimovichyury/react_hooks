import React from 'react';

export default class EffectHook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWidth);
    }

    handleWidth = (e) => {
        this.setState({
            width: e.target.innerWidth
        })
    };

    render() {
        return (
            <React.Fragment>
                <p>
                    Width: {this.state.width}
                </p>
            </React.Fragment>
        )
    }
}