import React  from 'react';
import Header from '../../Header';

function withHeader(WrappedComponent) {
  return (props) => (
    <div>
      <Header  title={props.title || 'Title'}/>
      <WrappedComponent
        {...props}
      />
    </div>
  );
}

export default withHeader;
