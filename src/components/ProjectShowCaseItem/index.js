import './index.css'

const ProjectShowCaseItem = props => {
  const {details} = props
  const {name, imageUrl} = details
  return (
    <li className="app-li">
      <img src={imageUrl} className="image" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default ProjectShowCaseItem
