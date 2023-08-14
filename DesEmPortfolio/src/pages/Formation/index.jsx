import Layout from "../../components/Layout";  
import { useSelector } from "react-redux"; 
function Formation (){
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    const backgroundColorClass = darkMode ? "formation--dark" : "formation--light";
    return (
        <Layout>
            <div className={`formation ${backgroundColorClass}`}>
            <h1 className="formation__title">Formation</h1>
            </div>
        </Layout>
    )
}
export default Formation;