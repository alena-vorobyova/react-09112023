import React from 'react';
import ReactDOM from 'react-dom/client';

import { restaurants } from "../Materials/mock";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ul>
    <li style={{marginTop: '40px'}}>
      {restaurants[0].name}

      <h3>Меню</h3>
      <ul>
        <li>{restaurants[0].menu[0].name}</li>
        <li>{restaurants[0].menu[1].name}</li>
        <li>{restaurants[0].menu[2].name}</li>
      </ul>

      <h3>Отзывы</h3>
      <ul>
        <li>{restaurants[0].reviews[0].text}</li>
        <li>{restaurants[0].reviews[1].text}</li>
      </ul>
    </li>

    <li style={{marginTop: '40px'}}>
      {restaurants[1].name}

      <h3>Меню</h3>
      <ul>
        <li>{restaurants[1].menu[0].name}</li>
        <li>{restaurants[1].menu[1].name}</li>
      </ul>

      <h3>Отзывы</h3>
      <ul>
        <li>{restaurants[1].reviews[0].text}</li>
        <li>{restaurants[1].reviews[0].text}</li>
        <li>{restaurants[1].reviews[0].text}</li>
      </ul>
    </li>

    <li style={{marginTop: '40px'}}>
      {restaurants[2].name}

      <h3>Меню</h3>
      <ul>
        <li>{restaurants[2].menu[0].name}</li>
        <li>{restaurants[2].menu[1].name}</li>
        <li>{restaurants[2].menu[1].name}</li>
      </ul>

      <h3>Отзывы</h3>
      <ul>
        <li>{restaurants[2].reviews[0].text}</li>
      </ul>
    </li>

    <li style={{marginTop: '40px'}}>
      {restaurants[3].name}

      <h3>Меню</h3>
      <ul>
        <li>{restaurants[3].menu[0].name}</li>
        <li>{restaurants[3].menu[1].name}</li>
      </ul>

      <h3>Отзывы</h3>
      <ul>
        <li>{restaurants[3].reviews[0].text}</li>
        <li>{restaurants[3].reviews[1].text}</li>
      </ul>
    </li>
  </ul>
)