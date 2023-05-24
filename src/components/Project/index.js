import './index.css'
import {Component} from 'react'
import {MdRemoveShoppingCart} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {RiChatQuoteFill, RiLogoutCircleRFill} from 'react-icons/ri'

import Card from '../Card'

// var cors = require('cors')
import ItemDetails from '../ItemDetails'
import Inventory from '../Inventory'

// const cors = require('cors')

class Project extends Component {
  state = {List: [], activeTabId: ''}

  componentDidMount() {
    this.getProducts()
  }

  clickTabItem = estimateId => {
    this.setState({activeTabId: estimateId})
  }

  getProducts = async () => {
    const apiUrl = 'http://test.api.boxigo.in/sample-data/'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.Customer_Estimate_Flow.map(product => ({
        items: product.items,
        estimateId: product.estimate_id,
        movingTo: product.moving_to,
        movingFrom: product.moving_from,
        propertySize: product.property_size,
        totalItems: product.total_items,
        distance: product.distance,
        dateCreated: product.date_created,
        oldFloorNo: product.old_floor_no,
        oldElevatorAvailability: product.old_elevator_availability,
        oldParkingDistance: product.old_parking_distance,

        newFloorNo: product.new_floor_no,
        newElevatorAvailability: product.new_elevator_availability,
        newParkingDistance: product.new_parking_distance,
      }))
      this.setState({
        List: updatedData,
      })
    }
  }

  getFilteredApps = () => {
    const {activeTabId, List} = this.state
    console.log(List)
    const filteredApps = List.filter(
      eachAppDetails => eachAppDetails.estimateId === activeTabId,
    )
    return filteredApps
  }

  render() {
    const {List, activeTabId} = this.state

    const filteredApps = this.getFilteredApps()
    // console.log(filteredApps)
    return (
      <div>
        {activeTabId === '' ? (
          <div className="container">
            <div className="header">
              <div className="i-te">
                <MdRemoveShoppingCart className="icon" />
                <h3>MY MOVES</h3>
              </div>

              <div className="i-t">
                <CgProfile className="icon" />
                <h3>MY PROFILE</h3>
              </div>

              <div className="i-t">
                <RiChatQuoteFill className="icon" />
                <h3>GET QUOTE</h3>
              </div>

              <div className="i-t">
                <RiLogoutCircleRFill className="icon" />
                <h3>LOGOUT</h3>
              </div>
            </div>
            <div>
              <h1 className="heading">MY MOVES</h1>

              <ul className="products-list">
                {List.map(product => (
                  <Card
                    productData={product}
                    key={product.estimateId}
                    clickTabItem={this.clickTabItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <ul className="App-list-container">
              {filteredApps.map(product => (
                <Card
                  productData={product}
                  key={product.estimateId}
                  clickTabItem={this.clickTabItem}
                />
              ))}
            </ul>

            <ul className="App-list-container">
              {filteredApps.map(appDetails => (
                <ItemDetails
                  key={appDetails.estimateId}
                  appDetails={appDetails}
                />
              ))}
            </ul>

            <div className="inventory">
              <h1 className="i-details">Inventory Details</h1>
              <button type="button" className="black-button">
                Edit Inventory
              </button>
            </div>

            <ul className="App-list-container">
              {filteredApps.map(InventoryDetails => (
                <Inventory
                  key={InventoryDetails.estimateId}
                  Details={InventoryDetails}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Project
