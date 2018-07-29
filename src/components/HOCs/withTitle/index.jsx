import React, { Component }  from 'react';

function withTitle(title, WrappedComponent) {
  return class extends Component {

    componentDidMount() {
      document.title = title || 'Measurements';
    }

    render() {
      return (
        <WrappedComponent
          title={title}
          {...this.props}
        />
      );
    }
  }
}

export default withTitle;
