import React from 'react';
import { Link } from 'react-router-dom';


export const NavBar = () => {
  const categories = [
    { id: "asfadd", address:'/', text: 'Nuestros Productos' },
    { id: "123asf", address:'/category/A', text: 'Zapatillas2022' },
    { id: "sgs3q3", address:'/category/B', text: 'Zapatillas2021' },
    { id: "gkl98s", address:'/category/C', text: 'Zapatillas2020' }
  ];

  return (
    <section className="NavBar">
      <div>
        <Link to="/"><i className="fa-solid fa-biohazard icon"></i></Link>
      </div>
      {categories.map((cat) => {
        return (
          
            <Link to={cat.address} className="links" key={cat.id}>
              {cat.text}
            </Link>
          
        );
      })}
      <div className="cart">
        <i className="fa-solid fa-cart-shopping"></i>
        <p>0</p>
      </div>     
    </section>
  );
};