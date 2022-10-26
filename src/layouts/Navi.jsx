import React, {useState} from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useNavigate } from "react-router-dom";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const navigate = useNavigate();

  function handleSignedOut(params) {
    setIsAuthenticated(false);
    navigate("/")
  }

  function handleSignedIn(params) {
    setIsAuthenticated(true);
  }


    return (
        <div>
        <Menu inverted fixed = "top">
          <Container>
            <Menu.Item name="LOGO" />
            <Menu.Item name="Sizin için seçtiklerimiz" />
            <Menu.Menu position="right">
              <CartSummary/>
              {isAuthenticated?<SignedIn signOut={handleSignedOut} bisey="1"/>:<SignedOut signIn={handleSignedIn}/>}
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
}
