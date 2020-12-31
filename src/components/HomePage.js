import React from "react";
import Article from "./Article";

const articles = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    author: "Jan Kowalski",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem iure excepturi itaque voluptates iste dolores necessitatibus delectus assumenda aliquam. Exercitationem ex praesentium odio velit numquam ratione sapiente voluptate aliquam id.",
  },
  {
    id: 2,
    title: "Lorem ipsum doloameetur.",
    author: "Adam Nowak",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem iure excepturi itaque voluptates iscitationem ex praesentium odio velit numquam ratione sapiente voluptate aliquam id.",
  },
  {
    id: 3,
    title: "Lorem ipsumnsectetur adipisicing.",
    author: "Roman Grab",
    text:
      "Lorem ipsum dolor sit amet, consectetur adisitatibus delectus assumenda aliquam. Exercitationem ex praesentium odio velit numquam ratione sapiente voluptate aliquam id.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
