import {  useState } from "react";
import { FaEye, FaEyeSlash, } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { JackInTheBox, Slide, Zoom } from "react-awesome-reveal";
import useAuth from "../Hooks/useAuth";

const Login = () => {
    const location = useLocation();
    console.log(location);
    // const navigate = useNavigate();
    // show password
    const [show, setShow] = useState(false);
    const { isLoading, } = useAuth();
    if (isLoading) {
        <span className="loading loading-bars loading-lg"></span>
    }

    const handleLogin = (e) => {
        // e.preventDefault();
        // const form = e.target;
        // const email = form.email.value;
        // const password = form.password.value;
        // signInUser(email, password)
        //     .then((result) => {
        //         console.log(result.user);
        //         navigate(location?.state ? location.state : '/');
        //         return toast.success('User Login Successfully');
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         return toast.error('opps! Something wrong please reload the page and try again')
        //     })
    }

    //google login
    // const handleGoogleLogin = () => {
        // googleLogin()
        //     .then((result) => {
        //         console.log(result.user);
        //         navigate(location?.state ? location.state : '/');
        //         return toast.success('User Login Successfully')
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         return toast.error('Opps! Something wrong please reload the page')
        //     })
    // };
    //github login
    // const handleGithubLogin = () => {
        // githubLogin()
        //     .then((result) => {
        //         console.log(result.user);
        //         navigate(location?.state ? location.state : '/');
        //         return toast.success('User Login Successfully')
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         return toast.error('Opps! Something wrong please reload the page')
        //     })
    // };
    return (
        <div className="md:w-1/2 w-3/4 mx-auto my-3" >
            <JackInTheBox>
                <form onSubmit={handleLogin} className="bg-blue-200 p-10  rounded-2xl">
                    <Slide delay={500}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                    </Slide>
                    <Slide delay={800} direction="right">
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? 'text' : 'password'} placeholder="password" name="password" className="input input-bordered" />
                            <span className="absolute top-[52px] right-3" onClick={() => setShow(!show)}>
                                {show ?
                                    <FaEye /> :
                                    <FaEyeSlash />
                                }
                            </span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                    </Slide>
                    <Slide delay={1100}>
                        <div className="form-control my-3">
                            <button className="btn bg-[#adf010]">Login</button>
                        </div>
                    </Slide>
                    <Slide delay={1500} direction="right">
                        <p>Do not Have An Account? <Link className="underline" to="/register">Register One</Link></p>
                    </Slide>
                </form>
            </JackInTheBox>
            {/* <Zoom delay={1700}>
                <div className="divider my-10">Or</div>
            </Zoom> */}
            {/* <Bounce delay={2000}>
                <div onClick={handleGoogleLogin} className="flex items-center gap-3 btn text-xl my-2">
                    <FaGoogle size={20} />
                    <span>Google Login</span>
                </div>
            </Bounce> */}
            {/* <Bounce delay={1000}>
                <div onClick={handleGithubLogin} className="flex items-center gap-3 btn text-xl my-2">
                    <FaGithub size={20} />
                    <span>Github Login</span>
                </div>
            </Bounce> */}
        </div>
    );
};

export default Login;