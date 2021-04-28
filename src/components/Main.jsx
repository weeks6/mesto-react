import { useState, useEffect } from 'react'
import api from '../utils/Api'

import Card from './Card'

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onDeleteClick
}) {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')

  const [cards, setCards] = useState([])

  useEffect(() => {
    api.getUserInfo()
      .then((user) => {
        setUserName(user.name)
        setUserDescription(user.about)
        setUserAvatar(user.avatar)
      })
      .catch(err => console.log(err))

    api.fetchCards()
      .then((fetchedCards) => setCards(fetchedCards))
      .catch(err => console.log(err))
  }, [])


  return (
    <main className="main container">
      <section className="profile">
        <div className="avatar">
          <img
            src={userAvatar}
            className="avatar__image"
            alt={userName}
          />
          <button
            className="button avatar__edit"
            aria-label="Редактировать аватар"
            type="button"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile-info">
          <div className="profile-info__inner">
            <h1 className="profile-info__name">{userName}</h1>
            <button
              type="button"
              aria-label="Редактировать профиль"
              className="button button_type_edit"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile-info__about">{userDescription}</p>
        </div>
        <button
          type="button"
          aria-label="Добавить"
          className="button button_type_add"
          onClick={onAddPlace}
        />
      </section>
      <section>
        <ul className="elements">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onDeleteClick={onDeleteClick}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}
