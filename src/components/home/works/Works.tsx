import {Work} from "../../common/work/Work";
import {WorksData} from "../../../data/worksData";
import {Link} from "react-router-dom";


export const Works = () => {
    return (
        <>
            <div className="works">
                {
                    WorksData.map((work) => (
                        <Work work={work}/>
                    ))
                }

                <div className="works--show-more">
                    <Link to={"#"}>
                        (<span>show more</span>)
                    </Link>
                </div>
            </div>
        </>
    )
}