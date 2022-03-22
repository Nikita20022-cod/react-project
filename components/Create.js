import { useState } from "react";
import React from "react";
import env from '../env.json';

function Create() {

  const [url, setUrl] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('');

  let sendData = (obj) => {
      setFormClass('hide');
      setLineClass('');
      fetch(env.urlBackend, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(obj)
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if (response.result) {
              setUrl(env.url+'/'+response.url);
            }
        })
  }

  let loadDataFromForm = (event) => {
    event.preventDefault();
    let note = event.target.elements.note.value;
    note = note.trim();
    if (note === '') {
      alert('заполните поля');
      return false;
    }
    sendData({"note" : note});
  }

  return (
    <section className="create">
      <div className="container">
        <div className="row">
          <div className="col-12">
              <h2 className="text-center">
                  Создать заметку
              </h2>
          </div>
          <div className="col-lg-4">
              <div className="create-text">
                <h3>Создайте</h3>
                <p>Напишите заметку в форме</p>
              </div>
          </div>
          <div className="col-lg-4">
              <div className="create-text">
                <h3>Сохраним</h3>
                <p>Мы запишем её и будем беречь для вас</p>
              </div>
          </div>
          <div className="col-lg-4">
              <div className="create-text">
                <h3>Найти</h3>
                <p>Вы сможете найти заметку по ссылке</p>
              </div>
          </div>
          <div className="col-12">
            <div>
              <form onSubmit={loadDataFromForm} className={formClass}>
                <label htmlFor="">Введите заметку</label>
                <textarea name="note" id="note" defaultValue="Test"></textarea>
                <button type="submit">Создать</button>
              </form>
              <div className={[lineClass + " " + "create-result"]}>
                <div className="create-result__text">{url}</div>
                <div><button onClick={function(){window.location.reload()}}>Создать новую заметку</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  
  export default Create;