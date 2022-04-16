import React,{useState} from 'react'

function Dropdown() {

  const [isSelected,SetIsSelected] = useState(false);         //useState hook is used to store the state of the component. Default value is false here 

  const optionsArray = ["Coding", "Ninjas", "By","Harsh"];      // The dropdown options array

  return (
    
     //on hovering upon the select container , the options list is shown
    

    <div className='dropdown'> 
      <div className="dropdown-btn"  onMouseEnter={e => SetIsSelected(!isSelected)}  onClick={e => SetIsSelected(!isSelected)} >Select One   
      <span className="fa fa-caret-down" ></span>
      </div>
      {isSelected &&                          //conditional rendering
      <ul className='dropdown-container'>
      {optionsArray.map((option, index) => {                  // the array is traversed and the dropdown list is generated. Option parameter is the array element here.
        
        //the index is used as key as the options are not dynamic here. When clicked the state is changed to the negation of previous state value.
     
          return (
            <li className="dropdown-item" key={index} onClick={e => SetIsSelected(!isSelected)} >   
              {option}
            </li>
          );
        })}
        </ul>}
      </div>
  )
}

export default Dropdown