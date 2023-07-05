import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { auth } from "./Firebase";
import { signOut } from "firebase/auth";
function Profile(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const saveData = location.state.newList;
  const [useName, setUserName] = useState("");
  const [mail, setMail] = useState("");
  // console.log(saveData);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUserName(user.displayName);
        setMail(user.email);
      } else setUserName("");
    });
  }, []);
  console.log(useName);

  const onClickSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/sign-up", { replace: true });
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <div className="container">
        <img
          src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1688469980~exp=1688470580~hmac=285e8f2116a059188b7ad2b8a2aff2a17d69093762933396eced3492cd8c9c68"
          alt=""
          className="profile-img"
        />
        <div className="user-details">
          <h2 className="err">{`Welcome ${useName}!!!`}</h2>
          <p className="top-section-paragraph">{`Mail ID: ${mail}`}</p>
          <button className="save-Button" onClick={onClickSignOut}>
            Sign Out
          </button>
        </div>
      </div>
      <div className="profile-section-container">
        {saveData.map((eachData) => {
          return (
            <div>
              <div className="saved-list">
                <div>
                  <p className="profile-section-description">
                    {eachData.strCategory}
                  </p>
                </div>
                <img
                  src={eachData.strMealThumb}
                  className="profile-section-img"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
