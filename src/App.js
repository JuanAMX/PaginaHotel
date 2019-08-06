import React, {Component} from 'react';
import './App.css';
import Header from "./Header";


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
    .then(data =>   {   this.setState(  { hotelsdata:data }   )  }    )

                     }
   render(){
     const hotelsdata =this.state.hotelsdata.map((hotel, i)=>{


  return (
    
    <div id={index}className="card">
     <div className="card-header"  
      style={{ background: `url('${hotel.mainPicture.urlPhoto}')`

}}>
      <div className="price-container">
       <h3>${hotel.basePrice}/Night  <span role="img" aria-label="heart" className="heart"> &#10084;&#65039; </span> </h3>
        </div>
     </div>

      <div className="card-body">
      <h2>{hotel.title}</h2>
      <p>{hotel.address.realAddress}</p>
      <br/>
      <hr/>
      <div className="emoji-container"></div>
      <div>
      
      <span role= "img" aria-label="users" className="first"> &#128107;</span> <span role="img"  aria-label="beds" className="second"> &#128716;</span> <span role="img" aria-label="bathrooms" className="third">&#128701;</span>
      </div>
      <div className="important-information">

          <span className="primero">{hotel.capacityOfPeople}</span> <span className="segundo"> {hotel.noBedroom}</span> <span className="tercero"> {hotel.noBathroom}</span>
      </div>
      </div>

    </div>
    
    
  )
    }
     )
     return(
       <div>

          <Header />
          <div className="data-container">
         {hotelsdata}
         </div>
      </div>


     );
   }
  }

export default App;
