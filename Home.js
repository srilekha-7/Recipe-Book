import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import Details from "./Details";
import Cards from "./Cards";
import { Link } from "react-router-dom";
function Home() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [url, setUrl] = useState(
    `https:/www.themealdb.com/api/json/v1/1/search.php?s=${"a"}`
  );

  const [savesList, setSavedList] = useState([]);

  let required = "";
  if (selectedCard) {
    const url = selectedCard.strYoutube;
    const splitUrl = url.split("=");
    required = splitUrl[1];
    // console.log(required);
  }

  // console.log(selectedCard.strIngredient1);
  const onClickSave = (id) => {
    setSavedList(savesList.concat(selectedCard));
    // console.log(savesList);
  };

  var newList = [];
  newList = savesList.filter(function (ele, pos) {
    return savesList.indexOf(ele) === pos;
    console.log(newList);
  });
  console.log(newList);
  const onClickSearchButton = () => {
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
  };
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((info) => {
        setShowSearchResults(true);
        setData(info.meals);
      });
    setShowSearchResults(false);
  }, [url]);

  const setDetails = (id) => {
    const card = data.filter((eachData) => eachData.idMeal === id);
    // console.log(card);
    setShowDetail(true);
    setSelectedCard(card[0]);
    // console.log(selectedCard);
  };
  {
    /* <FontAwesomeIcon icon="fa-solid fa-user" flip  /> */
  }
  return (
    <div>
      <div className="top-section">
        <div className="profile-container">
          <Link to="/profile" state={{ newList: newList }}>
            <button className="profile">
              <FontAwesomeIcon icon={faUser} className="font" />
              <p className="profile-style">My Profile</p>
              <FontAwesomeIcon icon={faArrowRight} className="font" />
            </button>
          </Link>
        </div>

        <h1 className="top-section-heading">
          Hungry? Choose Your favourite Delicious Food
        </h1>
        <p className="top-section-paragraph">Search Your favourite food item</p>
        <div>
          <input
            className="search-el"
            placeholder="search here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="search-button" onClick={onClickSearchButton}>
            Search
          </button>
        </div>
      </div>
      <div className="child-container">
        {showSearchResults ? (
          <>
            {data ? (
              <>
                <Cards data={data} setDetails={setDetails} />
                {showDetail ? (
                  <div>
                    <div className="details-card">
                      <h2 className="err">{selectedCard.strMeal}</h2>
                      <img
                        src={selectedCard.strMealThumb}
                        className="details-img"
                      />
                      <h2 className="err">Ingredients and Quantity Measures</h2>
                      <ul className="list-el">
                        <li>
                          {selectedCard.strIngredient1}:
                          {selectedCard.strMeasure1}
                        </li>
                        <li>
                          {selectedCard.strIngredient12}:
                          {selectedCard.strMeasure2}
                        </li>
                        <li>
                          {selectedCard.strIngredient3}:
                          {selectedCard.strMeasure3}
                        </li>
                        <li>
                          {selectedCard.strIngredient4}:
                          {selectedCard.strMeasure4}
                        </li>
                        <li>
                          {selectedCard.strIngredient5}:
                          {selectedCard.strMeasure5}
                        </li>
                        <li>
                          {selectedCard.strIngredient6}:
                          {selectedCard.strMeasure6}
                        </li>
                        <li>
                          {selectedCard.strIngredient7}:
                          {selectedCard.strMeasure7}
                        </li>
                        <li>
                          {selectedCard.strIngredient8}:
                          {selectedCard.strMeasure8}
                        </li>
                      </ul>
                      <h2 className="err">Instructions</h2>
                      <p className="list-el">{selectedCard.strInstructions}</p>
                      <iframe
                        src={`https://www.youtube.com/embed/${required}`}
                      ></iframe>
                      <div>
                        <button
                          className="save-Button"
                          onClick={() => onClickSave(selectedCard.idMeal)}
                        >
                          Click to save
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <h2 className="err">Select your Favourite Dish!</h2>
                )}
              </>
            ) : (
              <h2 className="err">Enter Proper Value!</h2>
            )}
          </>
        ) : (
          <h2 className="err">Search Your Favourite Category Dish</h2>
        )}
      </div>
    </div>
  );
}

export default Home;

/* <div>
  <Popup
    trigger={
      <div
        className="card"
        key={eachMeal.idMeal}
        onClick={() => onSelectCard(eachMeal.idMeal)}
      >
        <p className="card-paragraph">{eachMeal.strMeal}</p>
        <img src={eachMeal.strMealThumb} alt="" />
        <p className="card-paragraph-2">Area : {eachMeal.strArea}</p>
        <p className="card-paragraph-2">Category : {eachMeal.strCategory}</p>
      </div>
    }
  >
    {(close) => (
      <div>
        <div onClick={() => close()}>x</div>
        <img src={selectedCard.strMealThumb} alt="" />
      </div>
    )}
  </Popup>
</div>; */
