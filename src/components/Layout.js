import { useEffect } from "react";
import NavBar from "./NavBar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {

    
    return <div>
            <NavBar></NavBar>

            <div>{children}</div>
        </div>
}
export default Layout;