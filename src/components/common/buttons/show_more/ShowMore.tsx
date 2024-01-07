import {Link} from "react-router-dom";
import "./style.showmore.scss";

export const ShowMore = ({href}: any) => {
    return (
        <>
            <div className="show-more">
                <Link to={href}>
                    (<span>show more</span>)
                </Link>
            </div>
        </>
    )
}