export default function ImagePopup({ isOpened, selectedCard, onClose }) {
  return (
    <div className={isOpened ? 'popup image-popup popup_opened' : 'popup image-popup'}>
      <div className="image-popup__container">
        <button
          type="button"
          aria-label="Закрыть"
          className="button button_type_close"
          onClick={onClose}
        ></button>
        <img src={selectedCard.link} alt={selectedCard.name} className="image-popup__image" />
        <h2 className="image-popup__title">{selectedCard.name}</h2>
      </div>
    </div>
  )
}
