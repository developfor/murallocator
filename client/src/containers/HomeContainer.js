import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>

        <div className="banner">
          <div className="banner-content"> 
            <h1 >Mural Locator</h1>
            <h2 >Locate & explore murals around the world.</h2>
          </div>
        </div>
        <div className="home-description">
          Mural Locator is a resource for helping people locate and share discoveries of murals around the world to expand the knowledge of mural art. 
          <div>
            <a className="button button-primary button-description" href="#" >Submit a Mural</a>
          </div>
        </div>

        <div className="value-props row">
          <a href="#" className="four columns value-prop">
          
            
              <div  className="value-prop-img-container">
                <img className="value-img" src="./images/nearby.svg" />
              </div>
              
                <div className="value-prop-btn">
                  Murals Nearby
                </div>
          </a>

          <a href="#"  className="four columns value-prop"> 
              <div  className="value-prop-img-container">
                <img className="value-img" src="./images/paint_brush.svg" />
              </div>
              <div className="value-prop-btn">
                 Newly Added Murals
              </div>
          </a>
           <a href="#" className="four columns value-prop">
              <div className="value-prop-img-container">
                <img className="value-img" src="./images/map.svg" />
              </div>      
              <div className="value-prop-btn">
               Mural Map
              </div>   
           </a>
        </div>

        <div className="featured-murals-title">
          Featured Murals
        </div>

        <div className="value-props row home-mural-list">
          <a href="#" className="three columns value-prop"> 
           
                <img className="mural-list-img" src="http://via.placeholder.com/550x310" />
                      
          </a>

           <a href="#" className="three columns value-prop"> 
              <div >
                <img className="mural-list-img" src="http://via.placeholder.com/550x310" />
              </div>           
          </a>

           <a href="#" className="three columns value-prop"> 
              <div >
                <img className="mural-list-img" src="http://via.placeholder.com/550x310" />
              </div>           
          </a>


           <a href="#" className="three columns value-prop"> 
              <div >
                <img className="mural-list-img" src="http://via.placeholder.com/550x310" />
              </div>           
          </a>
        </div>


        <div className="value-props row home-mural-list">
          <a href="#" className="three columns value-prop"> 
              <div >
                <img className="mural-list-img" src="http://via.placeholder.com/550x310" />
              </div>           
          </a>

           <a href="#" className="three columns value-prop"> 
              <div >
                <img className="mural-list-img" src="http://via.placeholder.com/550x310" />
              </div>           
          </a>

           <a href="#" className="three columns value-prop"> 
              <div >
                <img className="mural-list-img" src="http://via.placeholder.com/550x310" />
              </div>           
          </a>


           <a href="#" className="three columns value-prop"> 
              <div >
                <img className="mural-list-img" src="http://via.placeholder.com/550x310" />
              </div>           
          </a>
        </div>


      </div>    
    )
  }
}

export default Home