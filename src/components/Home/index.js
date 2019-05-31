import React, {Component} from 'react';
import withTracker from '../HOC/withTracker';


class Home extends Component {

  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

export default withTracker(Home);
