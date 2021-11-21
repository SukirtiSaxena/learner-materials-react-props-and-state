import { useState } from 'react';
function Form({ newCat }) {

    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [birthYear, setbirthYear] = useState('');
    const [food, setfood] = useState('');
    const [photo, setPhoto] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        newCat({
            name,
            species,
            birthYear,
            food,
            photo,
            desc
        });

        setName('')
        setSpecies('')
        setbirthYear('')
        setfood('')
        setPhoto('')
        setDesc('')
    }

    const handleName = (event) => { setName(event.target.value) }
    const handleSpecies = (event) => { setSpecies(event.target.value) }
    const handleBirthYear = (event) => { setbirthYear(event.target.value) }
    const handleFood = (event) => { setfood(event.target.value) }
    const handlePhoto = (event) => { setPhoto(event.target.value) }
    const handleDesc = (event) => { setDesc(event.target.value) }

    return (
        <div>
            <h3>Do you want to add your favourite Cat?</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" value={name} size="100" placeholder="Name.." onChange={handleName} />
                </div>
                <div>
                    <label for="species">species</label>
                    <input type="text" id="species" name="speciese" value={species} size="100" placeholder="species.." onChange={handleSpecies} />
                </div>
                <div>
                    <label for="birthYear">Birth Year</label>
                    <input type="text" id="birthYear" name="birthYear" value={birthYear} size="100" placeholder="Birth Year.." onChange={handleBirthYear} />
                </div>
                <div>
                    <label for="food">Favourite Food</label>
                    <input type="text" id="food" name="food" size="100" value={food} placeholder="Favourite Food.." onChange={handleFood} />
                </div>
                <div>
                    <label for="photo">photo</label>
                    <input type="text" id="photo" name="photo" size="100" value={photo} placeholder="Photo.." onChange={handlePhoto} />
                </div>
                <div>
                    <label for="desc">Image Description</label>
                    <input type="text" id="desc" name="desc" size="100" value={desc} placeholder="Image Description.." onChange={handleDesc} />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form
