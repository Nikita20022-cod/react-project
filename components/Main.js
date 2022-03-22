function Main() {
    return (
      <section className="offer">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="offer-content">
                <div className="offer-content__text">
                    <h2>
                        Для чего нужен этот сервис?
                    </h2>
                    <p>
                      <span>Создайте и сохраните вашу заметку, она всегда будет под рукой.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="offer-content__btn">
                  <a href="/create">Создать заметку</a>
                  <a href="/note">Посмотреть заметку</a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <img src="/img/img-first.jpg" alt="img-first" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Main;