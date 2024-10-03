import './Hero.css'
import hero_img from '../Assets/hero.png'

const Hero = () => {
    return (
        <div className='hero'>
            <h2>New Products!!</h2>
            <img src={hero_img} alt="" />
        </div>
    )
}
export default Hero