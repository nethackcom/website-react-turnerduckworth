import {Company} from "../components/common/company/Company";
import {HomeHero} from "../components/home/hero/HomeHero";
import {Works} from "../components/home/works/Works";


export const Home = () => {
    return (
        <>
            <main>
                <HomeHero />
                <Works />
                <Company />
            </main>
        </>
    )
}