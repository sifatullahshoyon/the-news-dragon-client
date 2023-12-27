import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditorsLeftSide from "./EditorsLeftSide/EditorsLeftSide";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    try {
      fetch("https://the-news-dragon-server-ffkcq17c2-sifat-ullah-shoyons-projects.vercel.app/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <h2>All Caterogy</h2>
      <div className="p-4">
        {categories?.map((category) => (
          <div key={category.id} className="p-2">
            <Link
              to={`/category/${category.id}`}
              className="text-secondary text-decoration-none"
            >
              {category.name}
            </Link>
          </div>
        ))}
      </div>
      <EditorsLeftSide />
    </div>
  );
};

export default LeftNav;
