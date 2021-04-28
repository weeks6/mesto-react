export default function Card({ card, onCardClick, onDeleteClick }) {
  const { name, link, likes } = card

  return (
    <li className="card">
      <button
        className="button button_type_delete"
        type="button"
        aria-label="Удалить карточку"
        onClick={onDeleteClick}
      />
      <img
        src={link}
        alt={name}
        className="card__image card__main-image"
        onClick={() => onCardClick(card)}
        onKeyDown={(evt) => evt.key === 'Enter' && onCardClick(card)}
      />
      <div className="card__info">
        <h2
          className="card__title"
          title={name}
        >
          {name}
        </h2>
        <div className="card__like-wrapper">
          <button
            type="button"
            // @TODO: add different labels for different states of like
            aria-label="Поставить лайк карточке"
            className="button button_type_like"
          />
          <span className="card__like-counter">{likes?.length}</span>
        </div>
      </div>
    </li>
  )
}
