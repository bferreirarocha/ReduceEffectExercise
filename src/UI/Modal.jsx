// import "./base.scss";

import classNames from "classnames";
import uiClasses from "../Styles/ui.module.scss";
import { useEffect, useState } from "react";

import reactDom from "react-dom";
import { StateValue } from "../Services/Context";

const Modal = () => {
  const { ModalState, ModalDispatch } = StateValue();
  const [showmodal, setshowmodal] = useState();
  const closehandle = () => {
    setshowmodal(false);
    setTimeout(() => {
      ModalDispatch({ show: false, childComponent: null });
    }, 500);
  };

  useEffect(() => {
    setshowmodal(true);
  }, [ModalState]); 

  if (ModalState.show) {
    return reactDom.createPortal(
      <>
        <div className={uiClasses["Modal"]}>
          <button className={uiClasses["close"]} onClick={closehandle}>
            X
          </button>
          <div
            className={classNames(
              [uiClasses.container],
              {
                [uiClasses.slideInBottom]: showmodal
              },
              { [uiClasses.slideOutBottom]: !showmodal }
            )}
          >
            {ModalState.childComponent}
          </div>
        </div>
      </>,
      document.getElementById("portal")
    );
  } else return <></>;
};

export default Modal;
