
import bujji from "../images/bujji.png"

const Bujji = () => {
    return (
        <div class="bujji-container">
        <h1 class="title">Chef Animation</h1>
        <div class="image-container">
            <img src={bujji} alt="Chef Image" class="revolving-image"/>
        </div>
    </div>

    )
}

export default Bujji