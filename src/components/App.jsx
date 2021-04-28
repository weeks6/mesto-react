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
  const [selectedCard, setSelectedCard] = useState(null)

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
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsConfirmDeletePopupOpen(false)
    setSelectedCard(null)
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
        buttonText="Сохранить"
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
        buttonText="Сохранить"
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
        buttonText="Создать"
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
        isOpened={isConfirmDeletePopupOpen}
        onClose={closeAllPopups}
        title="Вы уверены?"
        name="confirm-delete"
        buttonText="Да"
      />

      <ImagePopup
        selectedCard={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  )
}

export default App
