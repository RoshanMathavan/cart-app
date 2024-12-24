//App.js

import React, { useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';

function App() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'T-shirt',
      price: 499,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOqGQCdkcwqvbcXKknt8bTUgQ2pKnrl-9IA&s'
    },
    {
      id: 2,
      name: 'Wallet',
      price: 250,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg6jEXTACpbl16B_T177HkBP4bM_uFwWFikw&s'
    },
    {
      id: 3,
      name: 'Hoodie',
      price: 799,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5MgY_YqYbF4PrjWWAgJH1udPmR9otSfnYQ&s'
    },
    {
      id: 4,
      name: 'Bag',
      price: 399,
      image:
        'https://genietravel.com/cdn/shop/files/1_f9428b43-bc5a-478c-a488-29853eb780b7_1200x.jpg?v=1716966797'
    },
    {
      id: 5,
      name: 'Pant',
      price: 345,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKKOLxwgdT_AjmfxPcQxgxRow-5H3AfKOdCA&s'
    },
    {
      id: 6,
      name: 'Car toy',
      price: 1299,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjpvo1vvRjJ4R6xLfrlZpnF9ztTAbEZo17g&s'
    },
    {
      id: 7,
      name: 'Mobile case',
      price: 250,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ89B0Nirlrd6b5WDMvldqEkfe6eaSeW_ihw&s'
    },
    {
      id: 8,
      name: 'Mobile stand',
      price: 799,
      image:
        'https://www.elvdirect.com/wp-content/uploads/2023/01/Edit02-1024x1024.png'
    },
  ]);

  const [cartCourses, setCartCourses] = useState([]);
  const [searchCourse, setSearchCourse] = useState('');

  const addCourseToCartFunction = (GFGcourse) => {
    const alreadyCourses = cartCourses
      .find(item => item.product.id === GFGcourse.id);
    if (alreadyCourses) {
      const latestCartUpdate = cartCourses.map(item =>
        item.product.id === GFGcourse.id ? {
          ...item, quantity: item.quantity + 1
        }
          : item
      );
      setCartCourses(latestCartUpdate);
    } else {
      setCartCourses([...cartCourses, { product: GFGcourse, quantity: 1 }]);
    }
  };

  const deleteCourseFromCartFunction = (GFGCourse) => {
    const updatedCart = cartCourses
      .filter(item => item.product.id !== GFGCourse.id);
    setCartCourses(updatedCart);
  };

  const totalAmountCalculationFunction = () => {
    return cartCourses
      .reduce((total, item) =>
        total + item.product.price * item.quantity, 0);
  };

  const courseSearchUserFunction = (event) => {
    setSearchCourse(event.target.value);
  };

  const filterCourseFunction = courses.filter((course) =>
    course.name.toLowerCase().includes(searchCourse.toLowerCase())
  );

  return (
    <div className="App">
      <SearchComponent searchCourse={searchCourse}
        courseSearchUserFunction=
        {courseSearchUserFunction} />
      <main className="App-main">
        <ShowCourseComponent
          courses={courses}
          filterCourseFunction={filterCourseFunction}
          addCourseToCartFunction={addCourseToCartFunction}
        />

        <UserCartComponent
          cartCourses={cartCourses}
          deleteCourseFromCartFunction={deleteCourseFromCartFunction}
          totalAmountCalculationFunction={
            totalAmountCalculationFunction
          }
          setCartCourses={setCartCourses}
        />
      </main>
    </div>
  );
}

export default App;