import React,{ useState , useCallback , useEffect} from "react";
import Card from "../UI/Card/Card";
import classes from './AvailableMeals.module.css';
import MealItem from "./MealItem/MealItem";

const meals = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];



const AvailableMeals = () =>{

  //const [meals,setMeals] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);





// const fetchMealsHandler = useCallback(async() =>{
//   setIsLoading(true);
//   setError(null);
//   try {
//     const response = await fetch('https://food-order-app-fcc45-default-rtdb.firebaseio.com/meals.json');
//     if (!response.ok) {
//       throw new Error('Something went wrong!');
//     }

//     const data = await response.json();
//     const DUMMY_MEALS = [] ;
//     for(const key in data){
//       DUMMY_MEALS.push({
//         id: key,
//         name: data[key].name,
//         description: data[key].description,
//         price: data[key].price 
//       });
//     }
//     setMeals(DUMMY_MEALS);
//   }
//   catch (error){
    
//     setError(error.message);
//   }
//   setIsLoading(false);
// } ,[] );

// useEffect(() => {
//   fetchMealsHandler();
// }, [fetchMealsHandler]);


// if(error){
//   return(
//     <section className={classes.mealsError}>
//        <p>{error}</p>
//     </section>
//   )
// }


// if(isLoading){
//   return(
//     <section className={classes.mealsLoading}>
//        <p>Loading......</p>
//     </section>
//   )
// }


    const mealsList = meals.map( (meal) => 
            < MealItem id={meal.id} key={meal.id} name={meal.name} price={meal.price} description={meal.description} />
         );

    return(
        <section className={classes.meals}>
            <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
        </section>
    );
};

export default AvailableMeals;