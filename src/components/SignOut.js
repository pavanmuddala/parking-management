import { useRouter } from "next/router"
import styles from "./SignOut.module.css"
const SignOut = ({ setSignOut }) => {
    const router = useRouter()
    const cancelSignOut = () => {
        setSignOut(false)
    }
    const confirmSignOut = () => {
        setSignOut(false)
        localStorage.removeItem('token')
        localStorage.removeItem('userDetails')
        const now = new Date()
        document.cookie = `token=${'pavan7654'};expires='+${now.toUTCString()}+';path=/`;
        router.pathname!='/' ? router.push({ pathname: '/' }):window.location.reload()
    }

    return <div className={styles.signoutContainer}>
        <div className={styles.modalContent}>
            <div className={styles.header}>
                Sign Out
            </div>
            <div className={styles.body}>
                Are you sure you want to sign out
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.cancelBtn} onClick={cancelSignOut}>Cancel</button>
                <button className={styles.signoutBtn} onClick={confirmSignOut}>Sign Out</button>

            </div>
        </div>
    </div>
}
export default SignOut