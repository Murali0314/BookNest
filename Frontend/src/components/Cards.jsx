import React from 'react';
import {Link} from 'react-router-dom'
function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200">
          <figure className="h-[280px] flex justify-center items-center overflow-hidden">
            <img
              src={item.image}
              alt="Books"
              className="w-[180px] h-[260px] object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/180x260?text=No+Image";
              }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <Link to={`/book/${item._id}`}>

              <div className="badge badge-outline hover:bg-pink-500 hover:text-white p-2 duration-200">
                More Details
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
