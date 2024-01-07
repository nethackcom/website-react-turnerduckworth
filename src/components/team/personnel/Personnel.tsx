import {PersonnelData} from "../../../data/personnelData";
import {ShowMore} from "../../common/buttons/show_more/ShowMore";
import "./style.personnel.scss";

export const Personnel = () => {
    return (
        <>
            <section className="personnel">
                <div className="personnel-container">
                    {
                        PersonnelData.map((person) => (
                            <>
                                <div className="person--image" style={{backgroundImage: `url(${person.img_url})`}}></div>
                                {/*<img src={person.img_url} alt=""/>*/}
                            </>
                        ))
                    }
                </div>
                <ShowMore
                    href="#"
                />
            </section>
        </>
    )
}