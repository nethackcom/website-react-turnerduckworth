import {Link} from "react-router-dom";
import {IWorksData} from "../../../data/worksData";
import "./style.work.scss";

interface WorkProps {
    work: IWorksData,
}

interface CategoryProps {
    title: string,
    url: string,
}

const Category = ({title, url}: CategoryProps) => {
    return (
        <>
            <div className="category">
                <Link to={url}>
                    {title}
                </Link>
            </div>
        </>
    )
}

export const Work = ({work}: WorkProps) => {

    return (
        <>
            <article className="work">
                <div className="work--categories">
                    {
                        work.category.map((category) => (
                            <Category title={category.title} url={category.url} />
                        ))
                    }
                </div>
                <Link to={"#"} className="work--categories-link">
                    <div className="work--image" style={{backgroundImage: `url(${work.img_src})`}}></div>
                    <div className="work--description">
                        <div className="work--title">
                            <h1>
                                {work.title}
                                <span className="text-orange"> (for a store)</span>
                            </h1>
                        </div>
                        <div className="work--date">{work.date}</div>
                    </div>
                </Link>
            </article>
        </>
    )
}