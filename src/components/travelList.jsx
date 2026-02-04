import { useState } from "react"
import data from "../assets/travel-plans.json"

function TravelList() {

    const [travelList, setTravelList] = useState(data)

    const premiumLabelStyle = {color: "white", padding: "5px", backgroundColor: "#366ACA", borderRadius: "5px"}

    const deleteTravelPlan = (removeId) => {
        setTravelList((previous) => {
            return previous.filter((travelPlan) => travelPlan.id !== removeId)
        })
    }

    return (
        <div>
            {travelList.map((travel) => {
                return(
                    <div style={{padding: "20px", borderWidth: "1px", borderStyle: "solid", borderColor: "black", display: "flex", gap: "20px", margin: "10px"}}>
                        <img style={{height: "250px", width: "350px"}} src={travel.image} alt="place" />
                        <div style={{textAlign: "left"}}>
                            <h3>{travel.destination} ({travel.days} Days)</h3>
                            <p style={{fontStyle:"italic"}}>{travel.description}</p>
                            <p><span style={{fontWeight:"bold"}}>Price: </span>{travel.totalCost} €</p>
                            <div style={{display:"flex", gap: "10px"}}>
                                {travel.totalCost <= 350 && <label style={{color: "black", padding: "5px", backgroundColor: "#77BC76", borderRadius: "5px"}}>Great Deal</label>}
                                {travel.totalCost >= 1500 && <label style={premiumLabelStyle}>Premium</label>}
                                {travel.allInclusive && <label style={premiumLabelStyle}>All-inclusive</label>}
                            </div>
                            <br />
                            <button style={{color: "black", padding: "5px", backgroundColor: "#ABA9AB", borderRadius: "5px"}} onClick={() => deleteTravelPlan(travel.id)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
        
    )

}

export default TravelList