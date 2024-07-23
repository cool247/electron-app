/* eslint-disable react/prop-types */

export default function Modal({ show, handleClose, children }) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          STOP TEST
        </button>
      </section>
    </div>
  )
}
