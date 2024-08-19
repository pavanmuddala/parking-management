'use client';
import Layout from "@/components/Layout"
import styles from "./CustomerSupport.module.css"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CustomerSupport = () => {
    const router = useRouter()
    const [token, setToken] = useState('')
    useEffect(() => {
        let t = process?.browser && localStorage.getItem("token")
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
                        <div className={"displayRow"}>
                            <input placeholder="Name" className={styles.inputBox}>
                            </input>
                            <div className="redAstrik">*</div>
                        </div>
                        <div className={"displayRow"}>
                            <input placeholder="Email"  className={styles.inputBox}>
                            </input>
                            <div className="redAstrik">*</div>
                        </div>
                        <div className={"displayRow"}>
                            <input placeholder="Phone Number" className={styles.inputBox}>
                            </input>
                            <div className="redAstrik">*</div>
                        </div>
                        <div className={"displayRow"}>
                            <textarea placeholder="Message" type="textArea" className={styles.inputBox} style={{height:"200px"}}>
                            </textarea>
                            <div className="redAstrik">*</div>
                        </div>
                        <button className={styles.btn}>Clear all</button>
                        &nbsp;&nbsp;
                        <button className={styles.btn} style={{backgroundColor:"blue"}}>Send</button>
                    </div>
                </div>
            </div>
        </Layout> : "loading..."}
    </>
}
export default CustomerSupport