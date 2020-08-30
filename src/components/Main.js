import React, { Component } from 'react';
import cats from '../models/cats';
import CatView from '../components/CatView';
import Gallery from '../components/Gallery';
import '../App.css';
import '../appgal.css';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: cats[0].id,
            name: cats[0].name,
            src: cats[0].src,
            clicks: cats[0].clicks,
            age:cats[0].age,
            catIndex: 0
        };
    }

    setCat = (catIndex) => {
        this.setState({
            id: cats[catIndex].id,
            name: cats[catIndex].name,
            src: cats[catIndex].src,
            clicks: cats[catIndex].clicks,
            age:cats[catIndex].age,
            catIndex: catIndex
        });
    }

    render() {
        return (

           
            <div className="main">
                <div className="navbar">
                    <p>Select Your Cat</p>
                    <ul className="cat-names">
                    { cats.map((cat, index) => <li key={cat.id}><button id={cat.id} onClick={this.setCat.bind(this, index)}>{cat.name}<span id="spani">{cat.clicks}</span></button></li>) }
                    </ul>
                </div>
                <CatView name={this.state.name} src={this.state.src} clicks={this.state.clicks} age={this.state.age} index={this.state.catIndex} />
               
 

 
    
                   
            


                
            </div>

                           
            
        );
    }
}

export default Main;