import { React, useEffect, useState } from "react";
import classNames from "classnames";
import styledComponents from "styled-components";
import Button from "../UI/Button";
import uiClasses from "../Styles/ui.module.scss";

// import "./layout.scss";
import layoutClasses from "../Styles/layout.module.scss";
import Menu from "../Components/Menu";
import { StateValue } from "../Services/Context";

const Logo = styledComponents.img` 
display: flex;
justify-content: space-between;
align-items: center;
 `;
const ButtonsWrapper = styledComponents.div` 
display: flex;
justify-content: space-between;
align-items: center; 

 `;
const TopMenuWrapper = styledComponents.div` 
display: flex;
justify-content: space-between;
align-items: center;  
height: 20px;
width: auto;


 `;
const Header = (props) => {
  const { MenuState } = StateValue();
  const [counter, setcounter] = useState();
  const { ModalDispatch } = StateValue();
  const [bounce, setbounce] = useState(false);

  useEffect(() => {
    setcounter(
      MenuState.map((item) => item.qnt).reduce((prev, next) => {
        return prev + next;
      })
    );

    return () => {
      setbounce(true);
      setTimeout(() => {
        setbounce(false);
      }, 500);
    };
  }, [MenuState]);

  const SignInClick = () => {
    ModalDispatch({ show: true, childComponent: <Menu /> });
  };
  const SignUpClick = () => {
    ModalDispatch({ show: true, childComponent: <>Other component</> });
  };
  return (
    <div className={layoutClasses.Header}>
      <Logo src="/logo.svg" alt="" className="Logo"></Logo>
      <TopMenuWrapper color=""></TopMenuWrapper>
      <ButtonsWrapper>
        <Button
          className={classNames(uiClasses.Button, [uiClasses.reverse], {
            [uiClasses.bounceTop]: bounce
          })}
          title={`${counter}`}
          submit={SignInClick}
          icon={<img src="/cart.svg" alt="cart" />}
        ></Button>
        <Button
          title={"Sign Up"}
          reverseTheme={true}
          submit={SignUpClick}
          className={uiClasses["Button"]}
        />
      </ButtonsWrapper>
    </div>
  );
};

export default Header;
