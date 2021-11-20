function CatCard(props) {
    console.log("CatCard receiving props from App?! Come in App?! 😸 Props received are: ", props)
    return (
        <div className="card">
            <h3 className="card__text card__header"> {props.name} </h3>
            <img className="card__image" src={props.photo} alt={props.alt}></img>
            <p className="card__text">Species: {props.species}</p>
            <p className="card__text">Favourite Food(s): {props.favFoods}</p>
            <p className="card__text">Birth Year: {props.birthYear}</p>
        </div>
    )
}

export default CatCard