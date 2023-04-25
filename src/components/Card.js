function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
    //console.log(props.card);
  }

  return (
    <article className="element">
      <img
        className="element__image"
        src={props.card.link}
        onClick={handleClick}
      />
      <div className="element__group">
        <h2 className="element__title">{props.card.name}</h2>
        <div>
          <button className="element__like" type="button"></button>
          <p className="element__like-total">{props.card.likes.length}</p>

          <button className="element__del" type="button"></button>
        </div>
      </div>
    </article>
  );
}

export default Card;
