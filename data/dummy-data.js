import Category from "../models/category";
import Meal from "../models/meals";

export const CATEGORIES = [
  new Category("c1", "Italian", "#f5f42d"),
  new Category("c2", "Hamburgers", "#129cb9"),
  new Category("c3", "French", "#5f5f5f"),
];

export const MEALS = [
  new Meal("m1", "First Meal", ["c1"], "Chicken-burrito-bowl.jpg"),
  new Meal("m2", "Second Meal", ["c1", "c2"], "Sliced-fruits.jpg"),
  new Meal("m3", "Third Meal", ["c1", "c2"], "Breakie-club.jpg"),
  new Meal(
    "m4",
    "Fourth Meal",
    ["c1", "c2", "c3"],
    "Anti-oxidant-frittata.jpg"
  ),
];
