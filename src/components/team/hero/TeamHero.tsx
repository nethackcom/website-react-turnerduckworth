import "./style.team_hero.scss"

export const TeamHero = () => {
    return (
        <>
            <div className="hero-container">
                <div className="team-hero-container--left">
                    <div className="team-hero-container--image-left hero-img-background"></div>
                    <span className="team-hero-container--right-text">
                        A community <span className="text-orange">(union / community)</span> building the brands of the future
                    </span>
                </div>
                <div className="team-hero-container--center">
                    <div className="hero-container--title">
                        <span>Team</span>
                    </div>
                </div>
                <div className="team-hero-container--right">
                    <div className="team-hero-container--image-right hero-img-background"></div>
                </div>
            </div>
        </>
    )
}