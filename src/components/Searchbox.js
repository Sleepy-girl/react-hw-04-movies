import React, { Component } from 'react';

export class Searchbox extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.inSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            className="SearchFormInput"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            // autocomplete="off"
            // autofocus
            placeholder="Search movies"
          />
          <button
            type="submit"
            onSubmit={this.handleSubmit}
            className="SearchFormButton"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbox;
