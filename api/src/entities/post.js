module.exports = class Post {
  constructor(post) {
    this.userId = post.userId;
    this.desc = post.desc;
    this.img = post.img;
    this.likes = post.likes;
  }
};
