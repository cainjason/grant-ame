

function App() {
  return (
    <div className="App">
        <header>
            <div className="navbar bg-yellow-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-900 font-bold text-yellow-600 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Calender</a></li>
                        <li><a>Ministries</a></li>
                        <li><a>Contacts</a></li>
                        <li><a>Information</a></li>
                        <li><a>Online Giving</a></li>
                        <li><a>Our Media</a></li>
                    </ul>
                    </div>
                    </div>
                        <div className="navbar-center">
                        <a className="btn btn-ghost normal-case text-blue-900 font-bold text-2xl"> GRANT A.M.E. CHURCH </a>
                        </div>
                        <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
        <main>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("http://grantame-boston.org/templates/untitled/imag…91f5137bd787c8d616a85d4da9dc_grant_logo_trans.png
")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary bg-blue-900">Get Started</button>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div className="footer footer-center p-4 bg-base-300 text-base-content absolute bottom-0 ">
                <div>
                    <p>Copyright © 2023 - Grant A.M.E.
                        All Rights Reserved</p>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
