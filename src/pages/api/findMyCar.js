import { carData } from "@/Data/CarData"

export default function handler(req, res) {
    const q = req.query
    let response={}
    if(atob(q?.carNumber)){
        response = checkCar(atob(q?.carNumber))
    }
    else{
        response = {"status":false, "message" :"Car not found"}
    }
    res.status(200).json({ response})
}

const checkCar=(num)=>{
    if(carData?.[num]?.parked){
        let k=carData?.[num]
        k['status']=true
        return k
    }
    else{
        return {status:false,message:"Car not found"}
    }
}