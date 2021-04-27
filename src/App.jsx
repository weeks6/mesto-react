import { useState } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import PopupWithForm from './components/PopupWithForm'
import ImagePopup from './components/ImagePopup'

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
    setIsImagePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)

    setSelectedCard({})
    setIsImagePopupOpen(false)
  }

  return (
    <div className="page">

      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />
      <Footer />

      <PopupWithForm isOpened={isEditProfilePopupOpen} onClose={closeAllPopups} name='edit' title='Редактировать профиль'>
        <div className="form__input-field">
          <input
            type="text"
            className="form__text-field"
            name="fieldName"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="form__input-error" id="fieldName-error"></span>
        </div>

        <div className="form__input-field">
          <input
            type="text"
            className="form__text-field"
            name="fieldAbout"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="form__input-error" id='fieldAbout-error'></span>

        </div>
      </PopupWithForm>

      <PopupWithForm isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups} name='avatar' title='Обновить аватар'>
        <div className="form__input-field">
          <input
            type="url"
            className="form__text-field"
            name="fieldAvatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="form__input-error" id="fieldAvatar-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm isOpened={isAddPlacePopupOpen} onClose={closeAllPopups} name='add' title='Новое место'>
        <div className="form__input-field">
          <input
            type="text"
            className="form__text-field"
            name="fieldTitle"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="form__input-error" id="fieldTitle-error"></span>
        </div>

        <div className="form__input-field">
          <input
            type="url"
            className="form__text-field"
            name="fieldLink"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="form__input-error" id="fieldLink-error"></span>
        </div>
      </PopupWithForm>

      <ImagePopup isOpened={isImagePopupOpen} onClose={closeAllPopups} selectedCard={selectedCard} />

      {/* <!-- Попап подтверждения удаления карточки --> */}
      <div className="popup confirm-delete-popup">
        <div className="popup__container container">
          <button
            type="button"
            aria-label="Закрыть"
            className="button button_type_close"
          ></button>
          <form className="form" name="confirm-delete-form">

            <div className="form__inner">
              <h2 className="popup__title">Вы уверены?</h2>
              <button className="button button_type_save" >
                Да
            </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
