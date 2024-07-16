import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import { Slide, Zoom } from "react-awesome-reveal";
import useAuth from "../Hooks/useAuth";
import { AiOutlineLoading } from "react-icons/ai";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { imageUpload } from "../utils/ImageUpload";

const Register = () => {
    // show password
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const { createUser, updateUserProfile } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();


    const handleRegister = async (e) => {
        e.preventDefault();
        // console.log('register ');
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        // const image = form.image.files[0].name;
        const phone = form.phone.value;
        const password = form.password.value;
        if (password.length < 5) {
            return toast.error('your Pin should at least 5 character long');
        }
        if (!/^\d+$/.test(password)) {
            return toast.error('Your Pin should contain only numbers');
        }
        setLoading(true);
        // console.log(image);
        // console.log(user);
        // const img_url = await imageUpload(image);
        const user = { name, email, phone, password };
        createUser(email, password)
            .then((result) => {
                axiosPublic.post('/save/user', user)
                    .then((res) => {
                        console.log(res.data);
                    })
                // updateUserProfile(name, img_url)
                //     .then((res) => {
                //         console.log(res);
                //         setLoading(false);
                //         navigate('/login');
                //         toast.success('User Created Successfully');
                //     })

                //     .catch(err => {
                //         setLoading(false);
                //         toast.error(`${err.message}`);
                //         console.log(err);
                //     })
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                return toast.error('Something Wrong reload the page')
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <Slide direction="down" duration={1500}>
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </Slide>
                </div>
                <Zoom duration={1500}>
                    <div className="card shrink-0 max-w-2xl shadow-2xl bg-gradient-to-tr from-red-400 to-fuchsia-400">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="flex gap-5">
                                <Slide duration={2000} direction="down">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                                    </div>
                                </Slide>
                                <Slide duration={2100} direction="right">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                    </div>
                                </Slide>
                            </div>
                            <Slide duration={2200} direction="left">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="number" placeholder="Phone Number" name="phone" className="input input-bordered" required />
                                </div>
                            </Slide>
                            {/* <Slide duration={2400} direction="right">
                                <div>
                                    <label htmlFor='image' className='block text-gray-700 dark:text-gray-200'>
                                        Select Image:
                                    </label>
                                    <input
                                        className="block w-full px-4 py-2 mt-2 text-violet-700/70 bg-white border border-gray-200 rounded-md dark:bg-indigo-200/30 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring"
                                        required
                                        type='file'
                                        id='image'
                                        name='image'
                                        accept='image/*'
                                    />

                                </div>
                            </Slide> */}
                            <Slide duration={2600} direction="left">
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={show ? 'text' : 'password'} placeholder="password" name="password" className="input input-bordered" required />
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
                            <Slide duration={2800} direction="up">
                                <div className="form-control mt-6">
                                    {
                                        loading ? <button className="btn flex justify-center items-center"><AiOutlineLoading className="animate-spin" /></button>
                                            : <button className="btn font-bold text-black hover:text-white bg-[#b2cfb9]">Register</button>
                                    }
                                </div>
                                <p>All Ready Have An Account? <Link
                                    className="underline" to="/login"
                                >Login</Link></p>
                            </Slide>
                        </form>
                    </div>
                </Zoom>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;