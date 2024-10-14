import { Link } from "react-router-dom";

export default function Register() {
    return(
        <div className="flex items-center px-[5%] lg:px-[7%] 2xl:px-[20%] w-full justify-between gap-[5%] py-[2.5%]">
            {/* RIGHT SIDE */}
            <div className="w-1/2 pr-[5%]">
                <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold pt-2 md:pt-4 lg:pt-4 pb-10">Register</h1>

                <h2 className="text-sm font-medium text-secondary">Account type</h2>
                <div className="grid grid-cols-2 w-full gap-3 mt-3">
                    <button type="button" className="border border-secondary p-8 rounded hover:bg-background duration-200 text-sm font-medium text-secondary">Venue Manager</button>
                    <button type="button" className="border border-secondary p-8 rounded hover:bg-background duration-200 text-sm font-medium text-secondary">Guest</button>
                </div>

                <form className="pt-4 pb-12 space-y-3 lg:space-y-4 xl:space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm font-medium text-secondary">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-2 w-full px-3 py-2 border border-secondary rounded text-sm md:text-base h-12"
                            required
                        />
                        </div>
            
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-secondary">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-2 w-full px-3 py-2 border border-secondary rounded text-sm md:text-base h-12"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-secondary">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-2 w-full px-3 py-2 border border-secondary rounded text-sm md:text-base h-12"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="repeatPassword" className="text-sm font-medium text-secondary">
                                Repeat password
                            </label>
                            <input
                                type="repeatPassword"
                                id="repeatPassword"
                                name="repeatPassword"
                                className="mt-2 w-full px-3 py-2 border border-secondary rounded text-sm md:text-base h-12"
                                required
                            />
                        </div>
                        <div>

                        <div className="flex flex-col space-y-4 pt-2 pb-8">
                            <div className="flex gap-4 items-center">
                                <input type="checkbox" name="rememberMe" className="h-6 w-6"/>
                                <label htmlFor="rememberMe">Remember me</label>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input type="checkbox" name="rememberMe" className="h-6 w-6"/>
                                <label htmlFor="rememberMe" className="flex gap-1">I agree to the 
                                    <Link to="/terms" className="text-contrast underline font-medium">terms & conditions.</Link>
                                </label>
                            </div>
                        </div>    
                        <button type="submit" className="w-full h-12 px-4 py-2 bg-contrast text-white rounded font-medium text-sm xl:text-base">
                            Register
                        </button>

                        <p className="text-secondary pt-6 flex gap-1">Already have an account? 
                            <button className="font-medium underline" type="button">Log in here.</button>
                        </p>
                    </div>
                </form>
            </div>

            {/* LEFT SIDE */}
            <div className="w-1/2">
                <img src="register.png" alt="" className="w-full object-cover"/>
            </div>
        </div>
    )
}