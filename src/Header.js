import React, {Component} from "react";

class Header extends Component{
render(){
return(

    <div className="App-header">
    <button className="first-button">Logo</button>
      <button>Accommodation </button>
      <button>Transportation </button>
      <button>Things To Do </button>
      <button>Tours Info </button>

      <a className="first-a" href="#empty" >Get offers</a>
      <a href="#empty">Social Media</a>
      <a href="#empty">Contact</a>
    </div>
)


}


}

export default Header;