import React from 'react';
import './footer.css';
import pathLogoWhite from '../../images/festobzor-logo-white.png';
import pathMapMarker from '../../images/map-marker.svg';
import pathPhone from '../../images/phone.png';
import pathMail from '../../images/mail.svg';

function Footer() {
  return (
    <section className="footer">

      <div className="footer__up">
        <div className="footer__left-block">
          <img className="footer__logo" src={pathLogoWhite} alt="Фестобзор"/>
            <p className="footer__text">Ziro is a Freelance Landing Website lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <div className="footer__social-block">

            </div>
        </div>

        <div className="footer__right-block">
          <h4 className="footer__title">Оставайтесь с нами на связи!</h4>
          <ul className="footer__contacts">
            <li className="footer__contact"><img className="footer__contact-icon" src={pathMapMarker} alt="Иконка адрес"/>
              <p className="footer__contact-text">Санкт-Петербург, наб. реки Фонтанки, 113А</p>
            </li>
            <li className="footer__contact"><img className="footer__contact-icon" src={pathPhone} alt="Иконка телефон"/>
              <p className="footer__contact-text">+7 (812) 937-35-00</p>
            </li>
            <li className="footer__contact"><img className="footer__contact-icon" src={pathMail} alt="Иконка почта"/>
              <p className="footer__contact-text">info@festobzor.ru</p>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">&copy; ООО &ldquo;Первая Фестивальная Компания&rdquo;,
          2022-2023</p>
        <p className="footer__made-by">Разработка: Ruslan Lukichev</p>
      </div>
    </section>
  )
}

export default Footer;