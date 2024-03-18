'use client';
import Layout from "@/components/Layout"
import styles from "./CustomerSupport.module.css"
import { useEffect,useState  } from "react";
import { useRouter} from "next/router";

const CustomerSupport = () => {
    const router = useRouter()
    const [token,setToken] = useState('')
    useEffect(() => {
        let t=process?.browser && localStorage.getItem("token")
        if (!t) {
            router.push({ pathname: '/' })
        }
        else {
            setToken(t)
        }
    }, [])
    return <>{token ?
        <Layout>
            <div className={styles.customerSupportcontainer} style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "14px" }}>

                <div style={{ background: 'url(./images/contactus.jpg)', width: "1000px", height: "500px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                    <div style={{ padding: "20px" }}>
                        <div style={{ fontSize: "26px", color: "#00308F", marginBottom: "20px" }}>Contact us</div>
                        <div><input placeholder="Name" style={{ height: "25px", width: "300px", borderRadius: "6px", border: "1px solid #00356B", marginBottom: "10px", padding: "5px" }}></input></div>
                        <div><input placeholder="Email" style={{ height: "25px", width: "300px", borderRadius: "6px", border: "1px solid #00356B", marginBottom: "10px", padding: "5px" }}></input></div>
                        <div><input placeholder="Phone Number" style={{ height: "25px", width: "300px", borderRadius: "6px", border: "1px solid #00356B", marginBottom: "10px", padding: "5px" }}></input></div>
                        <div><textarea placeholder="Message" type="textArea" style={{ height: "200px", width: "300px", borderRadius: "6px", border: "1px solid #00356B", marginBottom: "10px", padding: "5px" }}></textarea></div>
                        <button style={{ border: "none", backgroundColor: "red", padding: "10px", color: "white", width: "fit-content", borderRadius: "4px", cursor: "pointer" }}>Clear all</button>
                        &nbsp;&nbsp;
                        <button style={{ border: "none", backgroundColor: "blue", padding: "10px", color: "white", width: "fit-content", borderRadius: "4px", cursor: "pointer", }}>Send</button>
                    </div>
                </div>
            </div>
        </Layout> : "loading..."}
    </>
}
export default CustomerSupport