import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import { useState } from "react";


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  const [selectedCard, setSelectedCard] = useState(false);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <>
      <div className="page">
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm name="confirm" title="Вы уверены?" />

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="avatar"
          className={`popup__item popup__item_edit-avatar_name`}
          type="url"
          name="avatar"
          defaultValue=""
          placeholder="Ссылка на картинку"
          required
        />
        <span className="avatar popup__error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="namе"
          className="popup__item popup__item_edit-profile_name"
          type="text"
          name="name"
          defaultValue=""
          minLength="2"
          maxLength="40"
          required
        />
        <span className="namе popup__error"></span>

        <input
          id="job"
          className="popup__item popup__item_edit-profile_job"
          type="text"
          name="job"
          defaultValue=""
          minLength="2"
          maxLength="200"
          required
        />
        <span className="job popup__error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="edit-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="place"
          className="popup__item popup__item_edit-card_name"
          type="text"
          name="place"
          defaultValue=""
          placeholder="Название"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="place popup__error"></span>
        <input
          id="url"
          className="popup__item popup__item_edit-card_job"
          type="url"
          name="link"
          defaultValue=""
          placeholder="Ссылка на картинку"
          required
        />
        <span className="url popup__error"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
