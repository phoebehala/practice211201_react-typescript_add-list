import React from 'react';

interface IProps{
    people: {
        name: string,
        age: number,
        url: string,
        note?: string
      }[]
}

// const List = (props:IProps) => { return( <> </> ) }
// const List = ({people}:IProps) => { return( <> </> ) }
//  the type of const List is React.FC (functional component)
const List: React.FC<IProps> = ({people}) => {
    
    // another approach: instead of render directly, creating function which resturn jsx 
    const rederList = (): JSX.Element[]  =>{
        return people.map( (person)=>{
            return (
                // jsx
                <li className="List"> 
                    <div className="List-header">
                        <img className="List-img" src={person.url} />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }
                  

    return (
        <div>
            I am a list component
            {rederList()}
        </div>
    )
}

export default List
