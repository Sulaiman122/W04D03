import {React, useState} from "react";
import {useHistory} from 'react-router-dom'


const Cards = () => {

    const [cards] = useState([
        {
          id: 1,
          title: "The Best Design for a House",
          image: "https://www.w3schools.com/html/pic_trulli.jpg",
        },
        {
          id: 2,
          title: "The Most amazing laptop on Earth",
          image:
            "https://i.gadgets360cdn.com/large/apple_macbook_air_M1_2020review_cover_1607598067132.jpg",
        },
        {
          id: 3,
          title: "The mose beautiful flower ever human see",
          image:
            "https://www.gardeningknowhow.com/wp-content/uploads/2021/07/sulfur-cosmos-mexican-aster-flowers-400x300.jpg",
        },
      ])

  let history = useHistory();

  const specificCard = (n)=>{
    history.push(`/card/${n}`)
  }

  return (
    <div className="cards">
      {cards.map((item) => {
        return (
          <div className="card" onClick={()=>{specificCard(item.id)}}>
            <img src={item.image} alt="shut up react"/>
            <h2>{item.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
