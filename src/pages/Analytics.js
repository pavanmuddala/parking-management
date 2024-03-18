import Layout from "@/components/Layout";
import styles from "./Analytics.module.css"
import Graph from "@/components/Graph";

const Analytics = () => {

    return <Layout>
        <div className={styles.analyticsContainer}>
            <div className={styles.headerContainer}>
                Analytics Dashboard
            </div>
            <Graph></Graph>

        </div>
    </Layout>
}
export default Analytics;