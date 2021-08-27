import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {data: {}}
  }
  async componentDidMount() {
      const response =  await axios.get('http://localhost:4000', {});
      console.log(response);
      this.setState({data: response.data});
  }
  render() {
      return(
          <div className="container mt-4">
            {JSON.stringify(this.state.data)}
          </div>
      );
  }
}

export default App;
