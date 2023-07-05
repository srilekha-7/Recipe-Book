import React from "react";

function Cards(props) {
  const { data, setDetails } = props;

  return (
    <div>
      <div>
        <div className="cards-container-1">
          {data.map((eachMeal) => {
            return (
              <div
                className="card"
                key={eachMeal.idMeal}
                onClick={() => {
                  setDetails(eachMeal.idMeal);
                }}
              >
                <p className="card-paragraph">{eachMeal.strMeal}</p>
                <img src={eachMeal.strMealThumb} alt="" />
                <p className="card-paragraph-2">Area : {eachMeal.strArea}</p>
                <p className="card-paragraph-2">
                  Category : {eachMeal.strCategory}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
