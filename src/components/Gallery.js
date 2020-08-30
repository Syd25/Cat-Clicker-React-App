import React, { Component } from 'react';
import '../appgal.css';
import cats from '../models/cats';

class Gallery extends Component {
   
    render() {
        return (
   
                <div className="container">
                   
                   
                    { cats.map((cat, index) => <img src={cat.src} key={cat.id} />) }
                   
                </div>
                            
        );
    }
}

export default Gallery;