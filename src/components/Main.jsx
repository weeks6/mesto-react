import { useState, useEffect } from 'react'
import api from '../utils/Api.js'

import Card from './Card'

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')

  const [cards, setCards] = useState([])

  useEffect(() => {
    api.getUserInfo().then(user => {
      setUserName(user.name)
      setUserDescription(user.about)
      setUserAvatar(user.avatar)
    })
  }, [])

  useEffect(() => {
    api.fetchCards().then(cards => setCards(cards))
  }, [])

  return (
    <main className="main container">
      <section className="profile">
        <div className="avatar">

          <img
            src={userAvatar}
            className="avatar__image"
            alt="Картинка профиля"
          />
          <button className="button avatar__edit" aria-label="Редактировать аватар" onClick={onEditAvatar}>

          </button>
        </div>
        <div className="profile-info">
          <div className="profile-info__inner">
            <h1 className="profile-info__name">{userName}</h1>
            <button
              type="button"
              aria-label="Редактировать"
              className="button button_type_edit"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile-info__about">{userDescription}</p>
        </div>
        <button
          type="button"
          aria-label="Добавить"
          className="button button_type_add"
          onClick={onAddPlace}
        ></button>
      </section>
      <section>
        <ul className="elements">
          {cards.map(card => <Card card={card} key={card._id} onCardClick={onCardClick} />)}
        </ul>
      </section>
    </main>
  )
}
