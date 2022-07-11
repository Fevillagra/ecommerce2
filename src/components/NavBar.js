// import React from 'react';
// import { Link } from 'react-router-dom';


// export const NavBar = () => {
//   const categories = [
//     { id: "asfadd", address:'/', text: 'Nuestros Productos' },
//     { id: "123asf", address:'/category/A', text: 'AirProMax' },
//     { id: "sgs3q3", address:'/category/B', text: 'Street Wear' },
//     { id: "gkl98s", address:'/category/C', text: 'City Style' }
//   ];

//   return (
//     <section className="NavBar">
//       <div>
//         <Link to="/"><i className="fa-solid fa-biohazard icon"></i></Link>
//       </div>
//       {categories.map((cat) => {
//         return (
          
//             <Link to={cat.address} className="links" key={cat.id}>
//               {cat.text}
//             </Link>
          
//         );
//       })}
//       <div className="cart">
//         <i className="fa-solid fa-cart-shopping"></i>
//         <p>0</p>
//       </div>     
//     </section>
//   );
// };
import React from 'react';
import { Link } from 'react-router-dom';


export const NavBar = () => {
  const categories = [
    { id: "asfadd", address:'/', text: 'Nuestros Productos' },
    { id: "123asf", address:'/category/AirPro', text: 'AirPro Max' },
    { id: "sgs3q3", address:'/category/Street', text: 'Street Wear' },
    { id: "gkl98s", address:'/category/City', text: 'City Style' },
    { id: "gkl98x", address:'/cart', text: <i className="fa-solid fa-cart-shopping"> 0</i> }
  ];

  return (
    <section className="NavBar">
      <div>
        <Link to="/">
          <i className="fa-solid fa-biohazard icon"></i>
        </Link>
      </div>
      {categories.map((cat) => {
        return (
          <Link to={cat.address} className="links" key={cat.id}>
            {cat.text}
          </Link>
        );
      })}
    </section>
  );
};