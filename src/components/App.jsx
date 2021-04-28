import { useState } from 'react'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = useState(
    false
  )
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

  function handleDeleteClick() {
    setIsConfirmDeletePopupOpen(true)
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
        onCardClick={handleCardClick}
        onDeleteClick={handleDeleteClick}
      />
      <Footer />

      <PopupWithForm
        isOpened={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit"
        title="Редактировать профиль"
      >
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
          <span className="form__input-error" />
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
          <span className="form__input-error" />
        </div>
      </PopupWithForm>

      <PopupWithForm
        isOpened={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="avatar"
        title="Обновить аватар"
      >
        <div className="form__input-field">
          <input
            type="url"
            className="form__text-field"
            name="fieldAvatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="form__input-error" />
        </div>
      </PopupWithForm>

      <PopupWithForm
        isOpened={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="add"
        title="Новое место"
      >
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
          <span className="form__input-error" />
        </div>

        <div className="form__input-field">
          <input
            type="url"
            className="form__text-field"
            name="fieldLink"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="form__input-error" />
        </div>
      </PopupWithForm>

      <PopupWithForm
        buttonText="Да"
        isOpened={isConfirmDeletePopupOpen}
        onClose={closeAllPopups}
        title="Вы уверены?"
        name="confirm-delete"
      >
        <button
          className="button button_type_save"
          type="submit"
        >
          Да
        </button>
      </PopupWithForm>

      <ImagePopup
        isOpened={isImagePopupOpen}
        onClose={closeAllPopups}
        selectedCard={selectedCard}
      />
    </div>
  )
}

export default App
