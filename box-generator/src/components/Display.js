import React from 'react';


const Display = (props) => {
    //destructure props
    const { all_colors } = props;
    console.log("here they are", all_colors)
    // console.log("here they are")

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>

            {/* rendering a single color block. We will use map to loop through all blocks on the main App.js */}


            {
                all_colors.map((color, i) => {
                    return (
                        <div key={i} className="block" style={{ backgroundColor: color.color, height: '200px', width: '200px', margin: '4px' }}>

                            Color entered: <h3>{color.color}</h3>


                        </div>
                    )
                })

            }


        </div>





    );

}

export default Display;


