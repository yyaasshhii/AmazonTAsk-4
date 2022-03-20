import React from 'react';
import "./Content.css";
import { useState } from 'react';
import Output from './Output';
import Data from './shoesData.json';

export const Content=()=>{
  
  const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
      const filteredData = Data.filter((el) => {
      
      if (inputText === '') {
        return el;
       }
     
      else {
        return el.name.toLowerCase().includes(inputText)
      }
  })

  
  
  return (
    <>
    <div>
    <div className='page'>
      <div className='pageName'>ROYAL SHOE FITTING COMPANY</div>
      <div className='pageInfo'>Cinderella let's find the shoe of your fitting.
       </div>
      </div>
    
    
    <form>
    <div className='search'>
      <div class="inputIcons">
      <i class="fa fa-search icon"></i>
      <input class="input-field" type="text" onChange={inputHandler}></input>
      <button class="searching" type='search'>search</button>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
        {/* {list}   */}
      </div>
    </div>

    </form>
  
    
    <div className="album py-5 bg-light" id="albumm">
        <div className="container">
          <div className="row second">
            <div className="col-8"><h2 id="totalproduct">{filteredData.length} Products</h2></div>
            <div className="container">
              <div className="row list" id="repeat">
                {filteredData.map((shoes) => (
                  <Output
                    id={shoes.id}
                    name={shoes.name}
                    price={shoes.price}
                    star={shoes.star}
                    delivery={shoes.delivery}
                    image={shoes.image}
                    rating={shoes.rating}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
    </>

  )
}

export default Content;