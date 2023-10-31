import  { Component } from 'react';
import bill from './assets/bill.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "John Chukwu",
        bio: "Hi, welcome to my world of tech where innovation meets class and quality.",
        imgSrc: bill,
        profession: "Software Developer",
      },
      show: false,
      mountTime: new Date(),
    };
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  calculateTimeSinceMount = () => {
    const currentTime = new Date();
    const timeDifference = Math.abs(currentTime - this.state.mountTime);
    const secondsSinceMount = Math.floor(timeDifference / 1000);
    return secondsSinceMount;
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <>
        <div style={{ textAlign: 'center', backgroundColor: 'aliceblue' }}>
          <button onClick={this.toggleProfile}>
            <h4>Show</h4>
          </button>
        </div>
        {this.state.show ? (
          <div className="container">
            <div className="image">
              <img src={this.state.person.imgSrc} alt="" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3>{this.state.person.fullName}</h3>
              <p>{this.state.person.bio}</p>
              <p>Profession: {this.state.person.profession}</p>
              <button onClick={this.toggleProfile}>Hide</button>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h1>No profiles for now</h1>
          </div>
        )}
        <div style={{ textAlign: 'center' }}>
          <p>Time since mount: {this.calculateTimeSinceMount()} seconds</p>
        </div>
      </>
    );
  }
}

export default App;
