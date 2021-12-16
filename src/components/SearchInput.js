import React, { Component } from "react";

export class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { entry: "" };

    // this.onFormSubmit = this.onFormSubmit.bind(this); // first method of binding
  }

  // second and most effective way to bind this.
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSearchSubmit(this.state.entry);
  };

  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }

  // add the component in the event method for a better detail
  // onChange = onInputChange // handel is used as well handelInputChange

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="search..."
                // onChange={this.onInputChange} //onSubmit OnClick
                onChange={(event) =>
                  this.setState({ entry: event.target.value })
                } // ARROW Function to call property of event
                value={this.state.entry}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
