
export default function PopupWithForm({ title, name, isOpened, onClose, children }) {

  return (
    <div className={isOpened ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`}>
      <div className="popup__container container">
        <button
          type="button"
          aria-label="Закрыть"
          className="button button_type_close"
          onClick={onClose}
        ></button>
        <form className="form" name={`${name}-form`} noValidate>
          <div className="form__inner">
            <h2 className="popup__title">{title}</h2>
            {children}
            <button className="button button_type_save" type="submit">
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
