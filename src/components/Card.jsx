export default function Card({ card, onCardClick }) {

  const { name, link, likes } = card

  return (
    <li className="card">
      <button className="button button_type_delete"></button>
      <img src={link} alt={name} className="card__image card__main-image" onClick={() => (onCardClick(card))} />
      <div className="card__info">
        <h2 className="card__title" title={name}>{name}</h2>
        <div className="card__like-wrapper">
          <button
            type="button"
            aria-label="Нравится"
            className="button button_type_like"
          ></button>
          <span className="card__like-counter">{likes?.length}</span>
        </div>
      </div>
    </li>
  )
}
