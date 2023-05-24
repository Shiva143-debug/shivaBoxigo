import './index.css'
import {BsChevronDown} from 'react-icons/bs'

const Inventory = props => {
  const {Details} = props
  const {items} = Details
  console.log(Details)
  //   console.log(items.inventory[0])
  return (
    <div>
      <div className="in-le space-betwween">
        <div className="in-le">
          <p className="name">{items.inventory[0].displayName}</p>
          <p className="length">{items.inventory[0].category.length}</p>
        </div>
        <BsChevronDown />
      </div>
      <div className="in-le space-betwween">
        <div className="in-le">
          <p className="name">{items.inventory[1].displayName}</p>
          <p className="length">{items.inventory[1].category.length}</p>
        </div>
        <BsChevronDown />
      </div>
      <div className="in-le space-betwween">
        <div className="in-le">
          <p className="name">{items.inventory[2].displayName}</p>
          <p className="length">{items.inventory[2].category.length}</p>
        </div>
        <BsChevronDown />
      </div>
      <div className="in-le space-betwween">
        <div className="in-le">
          <p className="name">{items.inventory[3].displayName}</p>
          <p className="length">{items.inventory[3].category.length}</p>
        </div>
        <BsChevronDown />
      </div>
      <div className="in-le space-betwween">
        <div className="in-le">
          <p className="name">{items.inventory[4].displayName}</p>
          <p className="length">{items.inventory[4].category.length}</p>
        </div>
        <BsChevronDown />
      </div>
    </div>
  )
}
export default Inventory
