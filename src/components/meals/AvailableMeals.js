import { useEffect,useState } from "react";
import classes from "../css/AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals,setMeals] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch( "https://react-resto-567de-default-rtdb.firebaseio.com/meals.json");
      const responseData = await response.json();
    
      const loadMeals = [];
      for (const key in responseData){
        loadMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }
      setMeals(loadMeals)
      setIsLoading(false)
    };

    fetchMeals();
  }, []);
  if (isLoading) {
    return <section className={classes.mealsloading}><p>Loading Please Be Patient</p></section>
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
