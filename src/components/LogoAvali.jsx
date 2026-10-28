
import './LogoAvali.css'

export default function LogoAvali({
  size = 'medium',
  subtitle = '',
}) {
  return (
    <div className={`avali-brand avali-brand--${size}`}>
      <img
        src={`${import.meta.env.BASE_URL}images/logo-avali-plus.svg`}
        alt="Avali+"
        className="avali-brand__image"
      />

      {subtitle && (
        <p className="avali-brand__subtitle">
          {subtitle}
        </p>
      )}
    </div>
  )
}
