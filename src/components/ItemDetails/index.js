import './index.css'

const ItemDetails = props => {
  const {appDetails} = props
  const {
    oldFloorNo,
    oldElevatorAvailability,
    oldParkingDistance,
    newFloorNo,
    newElevatorAvailability,
    newParkingDistance,
  } = appDetails
  //   const {estimateId} = appDetails

  return (
    <div>
      <div className="space-between">
        <h3>Additional Information</h3>
        <button type="button" className="black-button">
          Edit Additional Info
        </button>
      </div>
      <div>
        <p>Test Data</p>
      </div>

      <div className="space-between">
        <h3>House Details</h3>
        <button type="button" className="black-button">
          Edit House Details
        </button>
      </div>

      <div>
        <h4 className="color">Existing House Details</h4>
        <div className="Details">
          <div className="House-Details">
            <p>Floor No</p>
            <p>{oldFloorNo}</p>
          </div>

          <div className="House-Details">
            <p>Elevator Available</p>
            <p>{oldElevatorAvailability}</p>
          </div>

          <div className="House-Details">
            <p>Distance from Elevator/Staicase to truck</p>
            <p>{oldParkingDistance}</p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="color">New House Details</h4>
        <div className="Details">
          <div className="House-Details">
            <p>Floor No</p>
            <p>{newFloorNo}</p>
          </div>

          <div className="House-Details">
            <p>Elevator Available</p>
            <p>{newElevatorAvailability}</p>
          </div>

          <div className="House-Details">
            <p>Distance from Elevator/Staicase to truck</p>
            <p>{newParkingDistance}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemDetails
