import React, { useState } from "react";
import app from "../../../firebase.init";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from "firebase/auth";

const Login_page = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const loggedUser = result.user;
                setUser(loggedUser);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    const handleGithubLogin = () => {
        signInWithPopup(auth, gitHubProvider)
            .then((res) => {
                const loggedUser = res.user;
                setUser(loggedUser);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const handleLogOut = () => {
        signOut(auth)
            .then((res) => {
                setUser(null);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            {/* <form>
                <label htmlFor="">Email Address</label>
                <br />
                <input type="text" name='email' className='border-2'/>
                <br />
                <label htmlFor="">Password</label>
                <br />
                <input type="password" name="password" className='border-2'/>
                <br />
                <input type="submit" value="Submit" className='border-2'/>
            </form> */}

            {user ? (
                <button className="border-2 px-2 py-1" onClick={handleLogOut}>
                    LogOut
                </button>
            ) : (
                <div>
                    <button
                        className="border-2 px-2 py-1"
                        onClick={handleGoogleLogin}
                    >
                        Google
                    </button>
                    <button
                        className="border-2 px-2 py-1"
                        onClick={handleGithubLogin}
                    >
                        GitHub
                    </button>
                </div>
            )}
            <div>
                <div>
                    <h1 className="text-4xl">{user?.displayName}</h1>
                    <img src={user?.photoURL} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login_page;
