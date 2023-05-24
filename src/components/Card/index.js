import './index.css'

import {
  BsFillArrowRightCircleFill,
  BsCalendar2DateFill,
  BsFillFileCheckFill,
} from 'react-icons/bs'

import {AiFillHome, AiFillWarning} from 'react-icons/ai'

import {TbSquareLetterS} from 'react-icons/tb'
import {BiCurrentLocation} from 'react-icons/bi'

import {RiPencilLine} from 'react-icons/ri'

const Card = props => {
  const {productData, clickTabItem} = props
  const {
    estimateId,
    movingTo,
    movingFrom,
    propertySize,
    totalItems,
    distance,
    dateCreated,
  } = productData
  console.log(productData)
  const onClickTabItem = () => {
    clickTabItem(estimateId)
  }

  return (
    <div>
      <div className="route-container">
        <div className="cards">
          <h3>From</h3>
          <p className="para">{movingTo}</p>
        </div>
        <BsFillArrowRightCircleFill className="arrow" />

        <div className="cards">
          <h3>To</h3>
          <p className="para">{movingFrom}</p>
        </div>
        <div className="cards">
          <h3>Request</h3>
          <p className="id">{estimateId}</p>
        </div>
      </div>

      <div className="icons-with-text">
        <div className="icon-text">
          <AiFillHome className="icon" />
          <p>{propertySize}</p>
        </div>
        <div className="icon-text">
          <TbSquareLetterS className="icon" />
          <p>{totalItems}</p>
        </div>

        <div className="icon-text">
          <BiCurrentLocation className="icon" />
          <p>{distance}</p>
        </div>

        <div className="icon-text">
          <BsCalendar2DateFill className="icon" />
          <p>{dateCreated}</p>
          <RiPencilLine />
        </div>

        <div className="icon-text">
          <BsFillFileCheckFill className="icon" />
          <p>is flexible</p>
        </div>

        <div className="icon-text">
          <button type="button" onClick={onClickTabItem} className="viewmore">
            view more details
          </button>
          <button type="button" className="quotes">
            Quotes Awaiting
          </button>
        </div>
      </div>

      <div className="dis">
        <AiFillWarning className="icon" />
        <p>Disclaimer:please update your move</p>
      </div>

      <hr />
    </div>
  )
}
export default Card
