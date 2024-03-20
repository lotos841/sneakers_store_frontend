import Classes from '../SneakersPage.module.scss'

const Specifications = ({info}) => {
  return (
    <ul className={Classes.specifications}>
        {info.map((i) =>
            <li key={i.title} className={Classes.characteristic}>
                <p className={Classes.title}>{i.title}</p>
                <p className={Classes.description}>{i.description}</p>
            </li>   
        )}
    </ul>
  )
}

export default Specifications