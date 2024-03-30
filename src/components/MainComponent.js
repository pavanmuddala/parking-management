
import styles from "./MainComponent.module.css"
const MainComponent = () => {

    return <div style={{marginLeft:"200px"}}>
        <div style={{ display: "flex", backgroundColor: "lightblue", justifyContent: "center", alignItems: "center", height: "60px", fontSize: "24px", fontWeight: "bold" }}>
            <div>Welcome to Parking Management System</div>
        </div>
        <div style={{ display: "flex", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",margin:"10px" }}>
            <div style={{ padding: "20px", fontStyle: "italic", fontSize: "16px" }}>
                <p>Efficient, hassle-free, and convenient - that&apos;s what we strive to offer with our cutting-edge parking management solution. Whether you&apos;re a commercial establishment looking to optimize your parking space or a municipality aiming to streamline urban parking, we&apos;ve got you covered.</p>

                <p>Our system is designed to simplify the complexities of parking management, providing seamless integration of technology to enhance user experience and maximize efficiency. From automated entry and exit systems to real-time monitoring and analytics, we offer a comprehensive suite of features tailored to meet your parking needs.</p>

                <p>Our commitment to innovation drives us to continuously improve and evolve our platform. We stay ahead of the curve by integrating the latest technologies, such as license plate recognition, IoT sensors, and machine learning algorithms, to deliver unparalleled accuracy and efficiency.</p>
                <p>With our Parking Management System, you can optimize space utilization, improve customer satisfaction, and increase revenue streams. Experience the future of parking management today!</p>
            </div>
            <div style={{ padding: "20px" }}><img src="./images/parkingMain.jpg" height={"300px"}></img></div>
            {/* <div style={{height:"100vh"}}>
                <script type="text/javascript" src="https://12df09207176de9430943693b151d54a.cdn.bubble.io/f1696333530817x835991923915557500/iframeResizer.min.js"></script>
                <iframe style={{height:"85%"}} id="chatbot" src="https://bot.chatwhisperer.ai/chatbot/1711710402143x344292470453436400" frameborder="0" scrolling="no">
                </iframe>
                <script type="text/javascript">
                    {iFrameResize({ log: false, checkOrigin: false }, "#chatbot")}
                </script>
            </div> */}
        </div>
        <div >
            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                <div style={{ padding: "20px", fontSize: "20px", fontWeight: "bold" }}>Key Features</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "30px", padding: "20px" }}>
                <div className={styles.card}>
                    <div className={styles.cardHead}>Analytics</div>
                    {/* <div className={styles.cardText}>
                        In Analytics We provide Real time data regarding vehicles, type of vehicles and revenue generated per day
                    </div>
                    <div className={styles.cardText}>
                        Checkout this analytics by clicking here
                    </div> */}
                    <img src="./images/Analytics.png" height={"130px"}></img>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardHead}>Parking Spot Allocation</div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><img src="./images/parkingSpot.png" height={"130px"}></img></div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardHead}>Check Car</div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><img src="./images/checkCar.png" height={"130px"}></img></div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardHead}>Find My Car</div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><img src="./images/findMyCar.png" height={"130px"}></img></div>
                </div>
            </div>

        </div>

    </div>
}
export default MainComponent;