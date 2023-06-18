import React from "react";
import { Link } from "react-router-dom";
import MainLink from "../main-link/MainLink";
import Button from "../button/Button";

function Main() {
  const userName = 'Екатерина Шилова';
  let nameArray = userName.split(' ');

  return (
    <div className="Main">
      <header className="Main-header">
        <div className="Main-header-round"><span>{nameArray[0][0]}{nameArray[1][0]}</span></div>
        <div className="Main-header-title">
          <p>{userName}</p>
          <div className="Main-header-links">
            <MainLink link='https://t.me/Ekaterina_Shilovs' title='Telegram' />
            <MainLink link='https://github.com/katerina456' title='GitHub' />
            <MainLink link='https://myresume.ru/resume/8USSoT85l2V/' title='Resume' />
          </div>
        </div>
      </header>
      <main className="Main-info">
        <div className="Main-info-inputs">
          <div>
            <label htmlFor="">Номер телефона</label>
            <input type="text" placeholder="+8 952 258-59-91" disabled />
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input type="text" placeholder="caterina.sh@yandex.ru" disabled />
          </div>
        </div>

        <Link to="/create" >
          <Button text='Начать' id='button-start' />
        </Link>
      </main>
    </div>
  );
}

export default Main;