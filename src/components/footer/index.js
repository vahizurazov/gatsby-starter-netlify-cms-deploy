import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import ModalContact from "../../components/modal-contact";

export default props => {
  //   const setModal = () => {
  //     props.setModalState(true);
  //   };
  //   const data = useStaticQuery(graphql`
  //     query {
  //       wordpressWpApiMenusMenusItems(slug: { eq: "social-links" }) {
  //         items {
  //           title
  //           object_id
  //           url
  //           classes
  //         }
  //       }
  //     }
  //   `);
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
            <a target="__blank" href={"google.com"} className="fb">
              Facebook
            </a>
            <a target="__blank" href={"google.com"} className="tw">
              Twitter
            </a>
            <a target="__blank" href={"google.com"} className="in">
              Instagram
            </a>
            <a target="__blank" href={"google.com"} className="ln">
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
