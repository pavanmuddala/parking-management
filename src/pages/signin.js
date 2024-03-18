import { useEffect, useState } from 'react'
import styles from './signin.module.css'
import { useRouter } from 'next/router'
import { userDetails } from '@/Data/UserDetails'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignIn = () => {

    const notify = (msg) => {
        return toast.error(msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: "bounce",
        });
    }
    const router = useRouter()
    const [formFields, setFormFields] = useState({ 'userName': '', 'password': '' })
    const [formFieldErros, setFormFieldErros] = useState({ 'userName': '', 'password': '' })

    const changeHandler = (e) => {
        setFormFields({ ...formFields, [e.target.name]: [e.target.value] })
        setFormFieldErros({ ...formFieldErros, [e.target.name]: [''] })
    }

    const signinHandler = (e) => {
        e.preventDefault()
        let tempFormFieldErrors = JSON.parse(JSON.stringify(formFieldErros))
        if (formFields.userName == '') {
            tempFormFieldErrors['userName'] = 'User name is required'
        }
        if (formFields.password == '') {
            tempFormFieldErrors['password'] = 'Password is required'
        }
        if (formFields.userName != '' && formFields.password == userDetails[formFields.userName]?.pwd) {
            localStorage.setItem('token', "abcd123!@#$%")
            localStorage.setItem('userDetails', JSON.stringify(userDetails?.[formFields?.userName]))

            var now = new Date();
            var time = now.getTime();
            var expireTime = time + (24 * 60 * 60 * 1000)//24 hrs
            now.setTime(expireTime);
            document.cookie = `token=${'pavan7654'};expires='+${now.toUTCString()}+';path=/`;
            router.push({ pathname: '/' })
        }
        else if (formFields.userName != '' && formFields.password != '') {
            // alert('invalid username or password')
            notify("Invalid user name or password")

        }
        setFormFieldErros(tempFormFieldErrors)
    }

    return <div style={{ height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src='./images/carLogo.png' height={'50px'}></img>
            <div style={{ fontSize: "25px", fontStyle: "italic", fontWeight: "bold", color: "#0047AB", paddingTop: '10px' }}>Parking Management System</div>
        </div>
        <div className={styles.signinContainer}>

            <div className={styles.signinHead}>Sign in to your Account</div>
            <form onSubmit={signinHandler}>
                <div style={{ margin: "30px" }}>
                    <div style={{ marginBottom: "10px" }}>
                        User Name <span style={{ color: 'red' }}>*</span>
                    </div>
                    <div>
                        <input name='userName' value={formFields.userName} onChange={changeHandler} type='text' className={styles.inputBoxStyling}></input>
                    </div>
                    <div className={styles.dangerText}>{formFieldErros.userName != '' && ('*' + formFieldErros.userName)}</div>
                    <div style={{ marginBottom: "10px" }}>
                        Password <span style={{ color: 'red' }}>*</span>
                    </div>
                    <div>
                        <input name='password' type='text' onChange={changeHandler} value={formFields.password} className={styles.inputBoxStyling}></input>
                    </div>
                    <div className={styles.dangerText}>{formFieldErros.password != '' && ('*' + formFieldErros.password)}</div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button className={styles.signinBtn} type='submit' onClick={signinHandler}>Sign in</button>
                    </div>
                </div>
            </form>
        </div>
        <ToastContainer />
    </div>
}
export default SignIn