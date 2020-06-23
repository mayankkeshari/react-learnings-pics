import React from "react";

export default class SearchBar extends React.Component {
  state = { term: "" };

//   constructor(props) {
//       super(props);
//       console.log(props);
//     //   this.OnFormSubmit = this.OnFormSubmit.bind(this);
//   }

  OnFormSubmit(event) {
    event.preventDefault();
    this.props.doSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => this.OnFormSubmit(e)}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
