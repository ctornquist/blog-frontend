/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
import React from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.post.title}</p>
        <p></p>
      </div>
    );
  }
}

export default withRouter(connect(null, { })(Post));
