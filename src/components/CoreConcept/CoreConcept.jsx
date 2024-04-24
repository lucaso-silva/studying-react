import './CoreConcept.css'

// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }

//WE CAN DESTRUCTURUING THE ABOVE FUNCTION USING THE SYNTAX BELOW:

export default function CoreConcept({title, description, image}) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }