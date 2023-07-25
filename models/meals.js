class Meal {
  constructor(id, title, categoryIds, image) {
    this.id = id;
    this.title = title;
    this.categoryIds = categoryIds;
    this.image = "https://mealmee-subscription.s3.amazonaws.com/meals/" + image;
  }
}

export default Meal;
