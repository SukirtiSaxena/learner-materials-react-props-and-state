function DogCard(props) {

    return (
        <div className="card">
            <h3 className="card__text card__header"> {props.dogObject.name} </h3>
            <img className="card__image" src={props.dogObject.photo} alt={props.dogObject.alt}></img>
            <p className="card__text">Species: {props.dogObject.species}</p>
            <p className="card__text">Favourite Food(s): {props.dogObject.favFoods}</p>
            <p className="card__text">Birth Year: {props.dogObject.birthYear}</p>
        </div>
    )
}

export default DogCard