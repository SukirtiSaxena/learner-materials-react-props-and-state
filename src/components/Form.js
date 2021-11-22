import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Form({ newCat }) {

    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [birthYear, setbirthYear] = useState('');
    const [favFoods, setfood] = useState('');
    const [photo, setPhoto] = useState('');
    const [desc, setDesc] = useState('');
    const id = uuidv4();

    const handleSubmit = (event) => {
        event.preventDefault();
        newCat({
            name,
            species,
            birthYear,
            favFoods,
            photo,
            desc,
            id
        });
        setSpecies('');
    }

    const handleName = (event) => { setName(event.target.value) }
    const handleBirthYear = (event) => { setbirthYear(event.target.value) }
    const handlefavFoods = (event) => { setfood(event.target.value) }
    const handlePhoto = (event) => { setPhoto(event.target.value) }
    const handleDesc = (event) => { setDesc(event.target.value) }

    return (
        <div>
            <h3>Do you want to add your favourite Cat?</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={name} size="100" placeholder="Name.." onChange={handleName} />
                </div>
                <div>
                    <label htmlFor="species">species</label>
                    <input type="text" id="species" name="species" defaultValue="Cat" size="100" placeholder="species.." readOnly />
                </div>
                <div>
                    <label htmlFor="birthYear">Birth Year</label>
                    <input type="text" id="birthYear" name="birthYear" value={birthYear} size="100" placeholder="Birth Year.." onChange={handleBirthYear} />
                </div>
                <div>
                    <label htmlFor="favFoods">Favourite Food</label>
                    <input type="text" id="favFoods" name="favFoods" size="100" value={favFoods} placeholder="Favourite Food.." onChange={handlefavFoods} />
                </div>
                <div>
                    <label htmlFor="photo">photo</label>
                    <input type="text" id="photo" name="photo" size="100" value={photo} placeholder="Photo.." onChange={handlePhoto} />
                </div>
                <div>
                    <label htmlFor="desc">Image Description</label>
                    <input type="text" id="desc" name="desc" size="100" value={desc} placeholder="Image Description.." onChange={handleDesc} />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form
