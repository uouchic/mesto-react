import { useState, useEffect } from "react";

import api from "../utils/Api";

import Card from "./Card";

function Main(props) {
  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");

  useEffect(() => {
    api
      .getUserInfo()
      .then((userInfoApi) => {
        setUserAvatar(userInfoApi.avatar);
        setUserName(userInfoApi.name);
        setUserDescription(userInfoApi.about);
      })
      .catch((err) => console.log(err));
  }, []);

  const [cards, seCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cardsApi) => {
        //console.log(cardsApi);
        seCards(cardsApi);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__update" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="Аватарка" />
          <div className="profile__overley"></div>
        </div>

        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            className="profile__adit-button"
            type="button"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
