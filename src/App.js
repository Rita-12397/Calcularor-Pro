import react, {Component} from "react";
import './App.css';
import Menu from './Menu';
class App extends react.Component{
  constructor(props){
    super(props)
    this.state={
      count:0,
      fisrNumber:0,
      secondNUmber:0,
      sum:0
    }
  }

  incrementCount(){
    this.setState({
      // count:this.state.count + 1
      count:  this.state.count === 10? 10 : this.state.count +1
    })
  }
  decrementCount(){
    this.setState({
    count:  this.state.count === 0? 0 : this.state.count - 1
    
    })

  }
  render(){
    return(
      <div className= "main_div">
        <div className="counter">{this.state.count}</div>
        
        <div className="content">
          <button  className="btn1">1</button>
          <button  className="btn2">2</button>
          <button  className="btn1">3</button>
          <button  className="btn1">-</button>
        </div>
        <div className="content">
        <button  className="btn1">4</button>
          <button  className="btn2">5</button>
          <button  className="btn1">6</button>
          <button  className="btn1">+</button>

        </div>
        <div className="content">
        <button  className="btn1">7</button>
          <button  className="btn2">8</button>
          <button  className="btn1">9</button>
          <button  className="btn1">*</button>

        </div>
         <div className="content">
          <button  className="btn1" onClick={this.decrementCount.bind(this)}>=</button>
          <button  className="btn2" onClick={this.incrementCount.bind(this)}>0</button>
          <button  className="btn1" onClick={this.decrementCount.bind(this)}>Del</button>
          <button  className="btn2" onClick={this.decrementCount.bind(this)}>/</button>

        </div>
        {/* <div className="content">
          <button  className="btn1" onClick={this.decrementCount.bind(this)}>=</button>
          <button  className="btn2" onClick={this.incrementCount.bind(this)}>0</button>
          <button  className="btn1" onClick={this.decrementCount.bind(this)}>Del</button>
          <button  className="btn2" onClick={this.decrementCount.bind(this)}>/</button>

        </div> */}
      </div>
    );
  }
}

export default App;
