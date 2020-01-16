import React from "react";

export default props => {
  const year = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-columns">
          <div className="col contacts">
            <a href="tel:+442081331821">+44 20 3773 8945</a>
            <div>
              {/*  <a href="mailto:hi@sparkybit.com">hi@sparkybit.com</a> */}

              {/* <a href> */}
              {/* <span onClick={setModal}>hi@sparkybit.com</span> */}
              <span>hi@sparkybit.com</span>

              {/* </a> */}
            </div>
          </div>
          <div className="col social-links">
            {/* {data.wordpressWpApiMenusMenusItems.items.map(socialItem => {
              return (
                <a
                  target="__blank"
                  key={socialItem.object_id}
                  href={socialItem.url}
                  className={socialItem.classes}
                >
                  {socialItem.title}
                </a>
              )
            })} */}
            <a
              target="__blank"
              href={"https://www.facebook.com/Sparkybit-232812654328307/"}
              className="fb"
            >
              Facebook
            </a>
            <a
              target="__blank"
              href={"https://twitter.com/sparkybit"}
              className="tw"
            >
              Twitter
            </a>
            <a
              target="__blank"
              href={"https://www.instagram.com/sparkybit_official/"}
              className="in"
            >
              Instagram
            </a>
            <a
              target="__blank"
              href={"https://www.linkedin.com/company/sparkybit/"}
              className="ln"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="copyright">
          {year} &copy; Sparkybit. All rights reserved
        </div>
      </div>
      {/* <ModalContact
        isModalOpen={props.isModalOpen}
        setModalState={props.setModalState}
        handleFormSubmit={props.handleFormSubmit}
      /> */}
    </footer>
  );
};
