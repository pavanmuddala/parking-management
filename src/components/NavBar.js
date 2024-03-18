import Link from "next/link";
import styles from "./NavBar.module.css"
import { useState } from "react";
import SignOut from "./SignOut";
import { useRouter } from "next/router";

const NavBar = () => {
    const router = useRouter()
    const [signOut, setSignOut] = useState(false);
    return <div>
        <div style={{ float: "left" }}>
            <div className={styles.navBarContainer}>
                {/* <div>
                <Link href={'./'}>Home </Link>
            </div>
            <div>
                <Link href={'./signin'}>Sign in </Link>
            </div>
            <div>
                <Link href={'./getParking'}>Get parking </Link>
            </div>
            <div>
                <Link href={'./checkUser'}>Check User </Link>
            </div> */}
                <div>
                    <Link href={'./'} className={styles.linkStyle} style={{ display: "flex", alignItems: "center", flexDirection: "row", backgroundColor: "#76ABDF", padding: "10px" }}>
                        <img src="./images/carLogo.png" height={"40px"}></img>&nbsp;
                        <div style={{ fontSize: "24px", color: "#0047AB" }}>PMS</div>
                    </Link>

                </div>
                <Link href={'./Analytics'} className={styles.linkStyle}>
                    <div className={styles.tabDiv} style={router.pathname == "/Analytics" ? { backgroundColor: "#007FFF" } : {}}>
                        Analytics
                    </div>
                </Link>
                <div className={styles.tabDiv}>
                    Parking Spot Allocation
                </div>
                <div className={styles.tabDiv}>
                    Check Car
                </div>
                <div className={styles.tabDiv}>
                    Find My Car
                </div>
                <div className={styles.tabDiv}>
                    Parking Fee Management
                </div>
                <div className={styles.tabDiv}>
                    Parking Lot Management
                </div>

                <div className={styles.tabDiv}>
                    Pavan
                </div>
                <div className={styles.tabDiv}>
                    User Management
                </div>
                <Link href={'./CustomerSupport'} className={styles.linkStyle}>
                    <div className={styles.tabDiv} style={router.pathname == "/CustomerSupport" ? { backgroundColor: "#007FFF" } : {}}>
                        Customer Support
                    </div>
                </Link>
                <div className={styles.tabDiv} onClick={() => { setSignOut(true) }}>
                    Sign Out
                </div>
            </div>

        </div>
        <div>
            {signOut && <SignOut setSignOut={setSignOut}></SignOut>}
        </div>
    </div>
}
export default NavBar;