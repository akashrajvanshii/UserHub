import react, {useState} from "react";
import Register from "./Register";
import UserTable from "./Table";

const Home = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
    };

    return (
        <div className="mt-4">
            <div className="header ml-5 mr-5 flex justify-between">
                <div className="logo flex pl-1">
                    <h1 className="font-bold text-2xl mr-1">UserHub  </h1><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M4.8125 10.775C4.63005 9.95316 4.65806 9.09855 4.89394 8.29042C5.12982 7.48229 5.56593 6.74681 6.16183 6.15215C6.75773 5.5575 7.49413 5.12293 8.30276 4.88874C9.11138 4.65456 9.96604 4.62833 10.7875 4.8125C11.2396 4.10538 11.8625 3.52345 12.5987 3.12036C13.3349 2.71727 14.1607 2.50598 15 2.50598C15.8393 2.50598 16.6651 2.71727 17.4013 3.12036C18.1375 3.52345 18.7604 4.10538 19.2125 4.8125C20.0352 4.62753 20.8913 4.65364 21.7012 4.88839C22.5112 5.12315 23.2485 5.55893 23.8448 6.15519C24.4411 6.75146 24.8768 7.48884 25.1116 8.29875C25.3464 9.10866 25.3725 9.96479 25.1875 10.7875C25.8946 11.2396 26.4765 11.8625 26.8796 12.5987C27.2827 13.3349 27.494 14.1607 27.494 15C27.494 15.8393 27.2827 16.6651 26.8796 17.4013C26.4765 18.1375 25.8946 18.7604 25.1875 19.2125C25.3717 20.034 25.3454 20.8886 25.1113 21.6972C24.8771 22.5059 24.4425 23.2423 23.8478 23.8382C23.2532 24.4341 22.5177 24.8702 21.7096 25.1061C20.9014 25.3419 20.0468 25.3699 19.225 25.1875C18.7734 25.8973 18.1501 26.4818 17.4127 26.8866C16.6752 27.2915 15.8475 27.5038 15.0062 27.5038C14.165 27.5038 13.3373 27.2915 12.5998 26.8866C11.8624 26.4818 11.239 25.8973 10.7875 25.1875C9.96604 25.3717 9.11138 25.3454 8.30276 25.1113C7.49413 24.8771 6.75773 24.4425 6.16183 23.8478C5.56593 23.2532 5.12982 22.5177 4.89394 21.7096C4.65806 20.9014 4.63005 20.0468 4.8125 19.225C4.09994 18.7741 3.51301 18.1502 3.10631 17.4115C2.6996 16.6728 2.48633 15.8433 2.48633 15C2.48633 14.1567 2.6996 13.3272 3.10631 12.5885C3.51301 11.8498 4.09994 11.2259 4.8125 10.775Z" fill="#f59e0b" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.25 15L13.75 17.5L18.75 12.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>

                <div className="flex z-10">
                    <div className="Tabs absolute mt-16 -ml-52">
                        <ul className="nav bg-amber-600 w-80 flex items-center justify-between rounded-3xl">
                            <li
                                className={`w-1/2 text-center p-2 list-none ${activeTab === "tab1" ? "active" : ""}`}
                                onClick={handleTab1}

                            >
                                Resgister
                            </li>
                            <li
                                className={`w-1/2 text-center p-2 list-none ${activeTab === "tab2" ? "active" :""}`}
                                onClick={handleTab2}
                            >
                                User Table
                            </li>
                        </ul>
                    </div>
                </div>


                <div>

                    <a href="https://github.com/akashrajvanshii">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <rect x="0.25" y="0.25" width="35.5" height="35.5" rx="17.75" stroke="black" stroke-width="0.5"/>
                        <path d="M21.75 30.5V25.5C21.9239 23.9341 21.4749 22.3627 20.5 21.125C24.25 21.125 28 18.625 28 14.25C28.1 12.6875 27.6625 11.15 26.75 9.875C27.1 8.4375 27.1 6.9375 26.75 5.5C26.75 5.5 25.5 5.5 23 7.375C19.7 6.75 16.3 6.75 13 7.375C10.5 5.5 9.24999 5.5 9.24999 5.5C8.87499 6.9375 8.87499 8.4375 9.24999 9.875C8.33983 11.1449 7.89808 12.691 7.99999 14.25C7.99999 18.625 11.75 21.125 15.5 21.125C15.0125 21.7375 14.65 22.4375 14.4375 23.1875C14.225 23.9375 14.1625 24.725 14.25 25.5V30.5" fill="#f59e0b"/>
                        <path d="M21.75 30.5V25.5C21.9239 23.9341 21.4749 22.3627 20.5 21.125C24.25 21.125 28 18.625 28 14.25C28.1 12.6875 27.6625 11.15 26.75 9.875C27.1 8.4375 27.1 6.9375 26.75 5.5C26.75 5.5 25.5 5.5 23 7.375C19.7 6.75 16.3 6.75 13 7.375C10.5 5.5 9.24999 5.5 9.24999 5.5C8.87499 6.9375 8.87499 8.4375 9.24999 9.875C8.33983 11.1449 7.89808 12.691 7.99999 14.25C7.99999 18.625 11.75 21.125 15.5 21.125C15.0125 21.7375 14.65 22.4375 14.4375 23.1875C14.225 23.9375 14.1625 24.725 14.25 25.5V30.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.25 25.5C8.6125 28 8 23 5.5 23" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </a>
                </div>

            </div>
            <div className="main items-center bg-gray-50 ml-5 mr-5 mt-5 border-solid rounded-xl border-2 overflow-hidden" style={{ position: 'relative' }}>
                {activeTab === "tab1" ? <Register /> : <UserTable />}


            </div>
        </div>

    )

}

export default Home;