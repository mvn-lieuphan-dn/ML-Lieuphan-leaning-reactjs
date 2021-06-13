import React, { Component } from 'react';
class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number,
      status: true
    }
  }
  
  handleChangeStatus() {
    this.setState({
      status: !this.state.status
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if(this.state.status){
        this.setState({
          number: this.state.number - 1
        })
      }
      else {
        this.setState({
          number: this.state.number
        })
      }
    }, 1000);
  }

  componentDidUpdate() {
    if(this.state.number === 0){
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {size, color} = this.props;
    const {status} = this.state;
    
    const styles = {
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      backgroundColor: color
    };
    return (
      <li class="item">
        <button className="btn btn-status" onClick={() => {this.handleChangeStatus()}}>{status ? 'START' : 'STOP'}</button>
        <div className="circle" style={styles}>
          <span>{ this.state.number }</span>
        </div>
      </li>
    );
  }
}

export default Circle;
