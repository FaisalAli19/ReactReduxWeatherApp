import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { featchWeather } from 'actions';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ""};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e){
        this.setState({ term: e.target.value })
    }

    onFormSubmit(e){
        e.preventDefault();

        this.props.featchWeather(this.state.term);
        this.setState({ term: "" });
    }

    render () {
        return (
            <div className="search-bar">
                <form className="input-group" onSubmit={this.onFormSubmit}>
                    <input
                        className="form-control"
                        onChange={this.onInputChange}
                        placeholder="Get a five days forecast in your favorite cities"
                        type="text"
                        value={this.state.term}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
            </div>
        );
    }
}

function mapStateToProps(dispatch) {
    return bindActionCreators({ featchWeather }, dispatch);
}

export default connect(null, mapStateToProps)(SearchBar);
