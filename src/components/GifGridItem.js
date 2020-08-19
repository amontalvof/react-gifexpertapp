import React from "react";

export const GifGridItem = ({ img }) => {
  const { title, url } = img;
  //console.log(title);
  return (
    <div className="card animate__animated animate__fadeIn ">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
