import React from 'react'
import { Link } from 'react-router-dom'
import Imagen1 from './Imagen1'
import Imagen2 from './Imagen2'
import Imagen3 from './Imagen3'
import Imagen4 from './Imagen4'
import Imagen5 from './Imagen5'
import Imagen6 from './Imagen6'
import Imagen7 from './Imagen7'
import Imagen8 from './Imagen8'
import Imagen9 from './Imagen9'
import Imagen10 from './Imagen10'

const Navigation = () => {
  return (
    <div>
      <Link to="/Imagen1"> 
      <figure>
        <Imagen1/>
        <figcaption>Imagen1</figcaption>
      </figure>
      </Link>

      <Link to="/Imagen2"> 
      <figure>
        <Imagen2/>
        <figcaption>Imagen2</figcaption>
      </figure>
      </Link> 

      <Link to="/Imagen3"> 
      <figure>
        <Imagen3/>
        <figcaption>Imagen3</figcaption>
      </figure>
      </Link> 

      <Link to="/Imagen4"> 
      <figure>
        <Imagen4/>
        <figcaption>Imagen4</figcaption>
      </figure>
      </Link>
      
      <Link to="/Imagen5"> 
      <figure>
        <Imagen5/>
        <figcaption>Imagen5</figcaption>
      </figure>
      </Link>

      <Link to="/Imagen6"> 
      <figure>
        <Imagen6/>
        <figcaption>Imagen6</figcaption>
      </figure>
      </Link>

      <Link to="/Imagen7"> 
      <figure>
        <Imagen7/>
        <figcaption>Imagen7</figcaption>
      </figure>
      </Link>

      <Link to="/Imagen8"> 
      <figure>
        <Imagen8/>
        <figcaption>Imagen8</figcaption>
      </figure>
      </Link>

      <Link to="/Imagen9"> 
      <figure>
        <Imagen9/>
        <figcaption>Imagen9</figcaption>
      </figure>
      </Link>

      <Link to="/Imagen10"> 
      <figure>
        <Imagen10/>
        <figcaption>Imagen10</figcaption>
      </figure>
      </Link>
    </div>
  )
}

export default Navigation;