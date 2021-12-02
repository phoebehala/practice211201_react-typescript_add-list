import React, { useState } from 'react'
import {IState} from '../App'

interface IProps {
    people: IState['people']
    setPeople: React.Dispatch<React.SetStateAction<IState['people']>>
    // setPeopel: React.Dispatch<React.SetStateAction<{
    //     name: string;
    //     age: number;
    //     url: string;
    //     note?: string | undefined;
    // }[]>>

}

const AddToList: React.FC<IProps> = ( {people, setPeople} ) => {

    // useState({}) >>> {} object
    const [input, setInput] = useState({
        name: "",
        age:"",
        img:"",
        note:"",
    })

     const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>):void =>{
         setInput(
            {...input, [e.target.name]: e.target.value}
         )
     }


     const handleClick = ()=>{
        if (
            !input.name || 
            !input.age  ||
            !input.img
            ){return // don't do anything
        }
        // else
        setPeople([
            ...people,
            // add new person
            {
                name: input.name,
                age:parseInt(input.age),  // parseInt()   >>> parse to string
                url:input.img,
                note:input.note,
            }
        ])

        // clean the input field
        setInput({
            name: "",
            age:"",
            img:"",
            note:"",
        })

     }


    return (
        <div className="AddToList"> 
            <input 
                type="text"
                placeholder="Name"
                className="AddToList-input"
                value={input.name}
                onChange={handleChange}
                // onChange={(e)=>{setInput(
                //     {...input, [e.target.name]: e.target.value}
                // )}}
                name="name"
    
                
            />
            <input 
                type="text"
                placeholder="Age"
                className="AddToList-input"
                value={input.age}
                onChange={handleChange}
                name="age"

                
            />
            <input 
                type="text"
                placeholder="Image Url"
                className="AddToList-input"
                value={input.img}
                onChange={handleChange}
                name="img"
              
                
            />
            <textarea
                className="AddToList-input"
                placeholder="Note"
                value={input.note}
                onChange={handleChange}
                name="note"
              
                
            />
            <button
                className="AddToList-btn"
                onClick={handleClick}
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList
