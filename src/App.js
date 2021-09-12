import React, { useState } from "react";
import "./styles.css";

// ログイン状態で表示されるLogoutButtonコンポーネント
const LogoutButton = (props) => {
  return <button onClick={props.toggleIsLoggedIn}>ログアウト</button>;
};

// ログアウト状態で表示されるLoginButtonコンポーネント
const LoginButton = (props) => {
  return <button onClick={props.toggleIsLoggedIn}>ログイン</button>;
};

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedInState] = useState(false);

  const toggleIsLoggedIn = () => {
    setIsLoggedInState(!isLoggedIn);
  };

  if (isLoggedIn) {
    // ログイン状態で、ログアウトボタンを表示させる
    return <LogoutButton ToggleIsLoggedIn={toggleIsLoggedIn} />;
  }
  // ログアウト状態で、ログインボタンを表示させる
  return <LoginButton toggleIsLoggedIn={toggleIsLoggedIn} />;
};

export default function App() {
  return <LoginControl />;
}
