import React, {useState} from 'react';
import Display from '../components/Display';

const Form = (props) => {
    //state variables
    const [all_colors, setAll_colors] = useState([]);
    const [color, setColor] = useState('');

    //function to handle the state of the form input and update it
    const handleForm = e => {
        
        setColor(e.target.value)
    }

    //function to handle the form submission via submit button
    const handleSubmit = e => {
        //first prevent default as React wants to send the data somewhere
        e.preventDefault();

        console.log(color);

        const newColor = {color};

        //call setAll_colors to update all_colors variable to add our new color. setAll_colors needs to be passed a BRAND NEW array of colors
        setAll_colors([...all_colors, newColor]);
        //use spread to add all existing colors plus the new color

        console.log(all_colors);

        // Ninja Bonus: clear out the color input on successful submission.
        //to clear the input box after submission, we need to set the input box to an empty string
        setColor('');

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="colorInput">Color</label>
            {/* adding event listener, otherwise not able to see what you are typing */}
            <input
                type="text" name="color" value={color}
                onChange={handleForm}
            />

            <button type="submit" >Add</button>
        </form>

        <Display all_colors={all_colors}/>
        </>
    );
}

export default Form;