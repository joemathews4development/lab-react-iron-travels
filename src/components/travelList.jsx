import { useState } from "react"
import data from "../assets/travel-plans.json"
import TravelPlanCard from "./travelPlanCard"

function TravelList() {

    const [travelList, setTravelList] = useState(data)

    

    const deleteTravelPlan = (removeId) => {
        setTravelList((previous) => {
            return previous.filter((travelPlan) => travelPlan.id !== removeId)
        })
    }

    return (
        <div>
            {travelList.map((travel) => {
                return(
                    <TravelPlanCard key={travel.id} plan={travel} onDelete={deleteTravelPlan} />
                )
            })}
        </div>
        
    )

}

export default TravelList