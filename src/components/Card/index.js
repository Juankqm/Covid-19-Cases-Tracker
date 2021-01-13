import React from "react";

export default function index({ titleCard,casesNumber, colorCard, colorNumberCard }) {
  return (
      <div className="c-card__content">
        <article className={colorCard}>
          <h6 className="c-card__content__title">{titleCard}</h6>
          <h2 className={colorNumberCard}>{casesNumber}</h2>
        </article>
    </div>
  );
}
