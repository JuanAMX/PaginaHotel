import React, {Component} from 'react';
import './App.css';

class  App extends Component  {
  constructor (props){
  super(props);
  this.state={ 
    hotelsdata:[]
  }
  }

  componentWillMount(){

    fetch ('https://viaguate-10-backend-cliente.mybluemix.net/api/accommodation/ViewVacationrentals')
    .then(response => response.json())
    .then(data => {
      this.setState({
        hotelsdata:data
    })
  })



  }
   render(){
     const hotelsdata =this.state.hotelsdata.map((hotel, i)=>{


  return (
    
    <div className="card">
     <div className="card-header"  
      style={{ background: `url('${hotel.mainPicture.urlPhoto}')`

}}>
      <div className="price-container">
        <h3>${hotel.basePrice}/Night</h3>
        </div>
     </div>

      <div className="card-body">
      <h2>{hotel.title}</h2>
      <p>{hotel.address.realAddress}</p>
      <br/>
      <hr/>
      <div className="emoji-container"></div>
      <div>
      
      <span className="first">&#128107;</span> <span className="second">&#128716;</span> <span className="third">&#128701;</span>
      </div>
      <div className="important-information">

          <span classNmae="primero">{hotel.capacityOfPeople}</span> <span className="segundo"> {hotel.noBedroom}</span> <span className="tercero"> {hotel.noBathroom}</span>
      </div>
      </div>

    </div>
    
    
  )
    }
     )
     return(
     <div className="Main">
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

       <div className="App-body">
         {hotelsdata}
       </div>

     </div>

     );
   }
  }

export default App;
