import React from "react";
import {Route, Routes} from 'react-router-dom';
import "../styles/App.css";

import Header from "./Header";
import Footer from "./Footer";
import TechOp from "./TechOp";
import Units from "./main";
import DownCause from "./downCause";
import Sidebar from "./sidebar";
import LoginPage from "./Login";
import NoContent from "./NoContent";

import {AuthProvider} from "../context/AuthContext";
import PrivateRoute from "../utils/PrivateRoute";


function App() {

    return (
        <div>

            <header>
                <Header/>
            </header>

            <main className="wrapper" id={"wrapper"} style={{
                backgroundImage: `url('../media/background.jpg')`
            }}>

                <div className={"sidebar-content"}>
                    <AuthProvider>
                        <Sidebar pageWrapId={'wrapper'} outerContainerId={'outer-container'}/>
                    </AuthProvider>
                </div>


                <div className={"content-wrapper"}>
                    <AuthProvider>
                        <Routes>
                            <Route path={"/login/"}
                                   element={<LoginPage/>}/>

                            <Route path={"/cause/"}
                                   element={<PrivateRoute>
                                       <DownCause/>
                                   </PrivateRoute>}/>
                            {/*<Route path={"/shift"} element={<ShiftOp/>}/>*/}

                            <Route path={"/techOp/:id"}
                                   element={<PrivateRoute>
                                       <TechOp/>
                                   </PrivateRoute>}/>

                            <Route exact path={"/"}
                                   element={<PrivateRoute>
                                       <Units/>
                                   </PrivateRoute>}/>
                        </Routes>
                    </AuthProvider>
                </div>


            </main>

            <footer className="page-footer">
                <Footer/>
            </footer>

        </div>

    );

}

export default App;
