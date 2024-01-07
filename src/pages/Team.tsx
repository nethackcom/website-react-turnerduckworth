import {TeamHero} from "../components/team/hero/TeamHero";
import {Company} from "../components/common/company/Company";
import {Personnel} from "../components/team/personnel/Personnel";


export const Team = () => {
    return (
        <>
            <TeamHero />
            <Personnel />
            <Company />
        </>
    )
}