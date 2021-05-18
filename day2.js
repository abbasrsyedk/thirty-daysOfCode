function solve(meal_cost=0, tip_percent=0, tax_percent=0) {
    // Write your code here
    meal_cost = Math.round(meal_cost+(meal_cost*tip_percent/100)+(meal_cost*tax_percent/100));
    
    console.log(meal_cost)

}