function Footer() {
    return (
      <footer>
        <div className="footer-top">
          <div className="container">
              <div className="row">
                  <div className="col-lg-3 offset-lg-3">
                      <div className="footer-text">
                          <h3>
                            SOME INFO
                          </h3>
                          <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.
                          </p>
                      </div>
                  </div>
                  <div className="col-lg-3">
                      <div className="footer-text">
                          <h3>
                            ENFOLD HEALTH
                          </h3>
                          <p className="footer-top__block-two">
                            Main Street 1, Olcott <br />
                            Buffalo, United States
                          </p>
                          <a href="tel:+555283784333">+555 283 784 333</a> <br />
                            <a href="mailto:office@enfold-health.com">office@enfold-health.com</a>
                      </div>
                  </div>
                  <div className="col-lg-3">
                      <div className="footer-text">
                          <h3>
                            OFFICE HOURS
                          </h3>
                          <p>
                            Mo-Fr: 8:00-19:00 <br />
                            Sa: 8:00-14:00 <br />
                            Su: closed
                          </p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div className="footer-bot">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>
                          Copyright - ThriveTalk  2022
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;