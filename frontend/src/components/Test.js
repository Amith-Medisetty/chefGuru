import Login from "./Login"
import SlideshowImages from "./SlideshowImages"

const Test = () =>{
    return (
        <div class="container">
        <div class="left-section">
            <h1>The Chef</h1>
            <div class="about">
                <h2>About</h2>
                <p>There are only three ways to make this work. The first is to let me take care of everything. The second is for you to take care of everything. The third is to split everything 50/50. I think the last option is the most preferable, but I'm certain it'll also mean the end of our marriage.</p>
            </div>
        </div>
        <div class="right-section">
            <div class="login-container">
                <h2>Login</h2>
                <form>
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" />
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" />
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <a href="#">Sign Up</a></p>
            </div>
        </div>
    </div>
    )
}

export default Test