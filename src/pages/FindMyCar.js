import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

const FindMyCar = () => {

    const [carNum,setCarNum]=useState('')
    const [carData,setCarData] = useState("")
console.log(carData)
    const searchHandler=()=>{
        setCarData("")
        axios.get('https://parking-management-three.vercel.app/api/findMyCar', {
            params: {
                carNumber: btoa(carNum)
            }
          })
          .then((response) => {
            if(response.data.response.status==true){
                setCarData(response.data.response)
            }
            else{
                setCarData(false)
            }  
          }).catch(e=>setCarData(false))
    }

    return <Layout>
        <div className="container">
            <div style={{ height: "300px" }}>
                <div className="flexMiddle" style={{ margin: "30px" }}>
                    <div className="header">Please Enter Car Number</div>
                </div>
                <div className="flexMiddle">
                    <div>
                        <input value={carNum} onChange={(e)=>{setCarNum(e.target.value)}} type="text" style={{ height: "30px", marginBottom: "20px", fontSize: "24px" }}></input>
                        <div className="flexMiddle">
                            <div style={{display:"flex",gap:"20px"}}>
                                <button className="redBtn">Clear</button>
                                <button className="primaryBtn" onClick={searchHandler}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {carData!=''&&<div>{carData?.VehicleNum}</div>}
                </div>
            </div>
        </div>
    </Layout>
}
export default FindMyCar;