import React, { useState, useEffect } from 'react';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/users');
                const data = await response.json();
                setUsers(data.users);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`;
        return fullName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    function openLightbox(user) {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-100">
    <div class="lightbox-content p-5 bg-white shadow-2xl w-full h-full flex justify-between z-auto">
        <div class="leftdiv hidden lg:inline-block">
            <img src="${user.image}" alt="${user.firstName} ${user.lastName}" class="rounded-full mx-auto h-22 border-2 border-solid bg-white border-amber-600">
            <h2 class="text-2xl font-bold mt-5 text-center">${user.firstName} ${user.lastName}</h2>
            <p class="text-xs text-center text-amber-600">${user.gender.toUpperCase()}, <spam> ${user.age}</spam></p>
        </div>
        <div class="border-l mx-4 hidden lg:inline-block"></div> 
        <div class="rightdiv">
        
        
        <p class="text-gray-950 font-bold text-2xl text-center hidden lg:inline-block">Details</p>
        <h2 class="text-2xl font-bold mt-5 text-center lg:hidden">${user.firstName} ${user.lastName}</h2>

            <div class="flex justify-between mt-3">
            <div class="w-full pt-2">
            <p class="font-medium fa">Email:</p>
                <div class="border-solid border-b-2 pt-1 pb-1 mt-0.5 bg-white font-normal border-b-amber-600">
                    <p>${user.email}</p>
                </div>

            </div>
            <div class="w-full pt-2 ml-8">
            <p class="font-medium fa">Mobile:</p>
                <div class="border-solid border-b-2 pt-1 pb-1 mt-0.5 bg-white font-normal border-b-amber-600">
                    <p>${user.phone}</p>
                </div>

            </div>
            </div>

            <div class="flex justify-between mt-3">
            <div class="w-full pt-2">
            <p class="font-medium fa">Date of Birth:</p>
                <div class="border-solid border-b-2 pt-1 pb-1 mt-0.5 bg-white font-normal border-b-amber-600">
                    <p>${user.birthDate}</p>
                </div>

            </div>
            <div class="w-full pt-2 ml-8">
            <p class="font-medium fa">Blood Group:</p>
                <div class="border-solid border-b-2 pt-1 pb-1 mt-0.5 bg-white font-normal border-b-amber-600">
                    <p>${user.bloodGroup}</p>
                </div
            </div>
            </div>


            </div>
            <div class="mt-3">
            <p class="font-medium fa">Address:</p>
                <div class="border-solid border-b-2 pt-1 pb-1 mt-0.5 bg-white font-normal border-b-amber-600">
                    <p>${user.address.address+", "+ user.address.city}</p>
                </div>
                <div class="border-solid border-b-2 pt-1 pb-1 mt-0.5 bg-white font-normal border-b-amber-600">
                    <p>${user.address.state+"- "+ user.address.postalCode }</p>
                </div>
            </div>
            
            
            





            <button class="lightbox-close bg-amber-600 hover:bg-amber-700 text-yellow-50 font-bold py-2 mt-3 ml-3 px-4 rounded w-4/5 lg:hidden">Close</button>
            <button class="lightbox-close-lg bg-amber-600 hover:bg-amber-700 text-yellow-50 font-bold py-2 px-4 rounded w-4/5 mt-20 ml-10 hidden lg:inline-block">Close</button>

        </div>
    </div>
</div>

  `;

        document.body.appendChild(lightbox);

        const closeButton = lightbox.querySelector('.lightbox-close');
        closeButton.addEventListener('click', () => {
            lightbox.remove();
        });

        const closeButton2 = lightbox.querySelector('.lightbox-close-lg');
        closeButton2.addEventListener('click', () => {
            lightbox.remove();
        });
    }
    const itemsPerPage = 7;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };


    return (
        <div className="bg-gray-50 p-5 w-full">
            <h1 className="font-bold text-xl">User Details</h1>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearch}
                className="mt-3.5 p-2 w-6/12 border border-gray-300 rounded placeholder-opacity-5"
            />
            <table className="min-w-full mt-5" >
                <thead>
                <tr>
                    <th className="py-2 px-4 border-b text-gray-600 text-left">ID</th>
                    <th className="py-2 px-4 border-b text-gray-600 text-left">First Name</th>
                    <th className="py-2 px-4 border-b text-gray-600 text-left">Last Name</th>
                    <th className="py-2 px-4 border-b text-gray-600 text-left hidden lg:table-cell">Gender</th>
                    <th className="py-2 px-4 border-b text-gray-600 text-left hidden lg:table-cell">Age</th>
                    <th className="py-2 px-4 border-b text-gray-600 text-left hidden lg:table-cell">Location</th>
                </tr>
                </thead>
                <tbody className="min-w-full bg-white border border-gray-300 mt-5">
                {currentItems.map((user) => (
                    <tr key={user.id}>
                        <td className="py-2 px-4 border-b border-r text-left ">{user.id}</td>
                        <td className="py-2 px-4 border-b border-r text-left">{user.firstName}</td>
                        <td className="py-2 px-4 border-b border-r text-left">{user.lastName}</td>
                        <td className="py-2 px-4 border-b border-r text-left hidden lg:table-cell">{user.gender.toUpperCase()}</td>
                        <td className="py-2 px-4 border-b border-r text-left hidden lg:table-cell">{user.age}</td>
                        <td className="py-2 px-4 border-b border-r text-left hidden lg:table-cell">{user.address.city+", "+user.address.state}</td>
                        <td className="py-2 px-4 border-b border-r text-center">
                            <button
                                className="text-amber-600 hover:text-amber-800 font-bold py-2 px-4 rounded hidden lg:inline-block"
                                onClick={() => openLightbox(user)}
                            >


                                More Details
                            </button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                className="lg:hidden"
                                onClick={() => openLightbox(user)}
                            >
                                <path
                                    d="M4.8125 10.775C4.63005 9.95316 4.65806 9.09855 4.89394 8.29042C5.12982 7.48229 5.56593 6.74681 6.16183 6.15215C6.75773 5.5575 7.49413 5.12293 8.30276 4.88874C9.11138 4.65456 9.96604 4.62833 10.7875 4.8125C11.2396 4.10538 11.8625 3.52345 12.5987 3.12036C13.3349 2.71727 14.1607 2.50598 15 2.50598C15.8393 2.50598 16.6651 2.71727 17.4013 3.12036C18.1375 3.52345 18.7604 4.10538 19.2125 4.8125C20.0352 4.62753 20.8913 4.65364 21.7012 4.88839C22.5112 5.12315 23.2485 5.55893 23.8448 6.15519C24.4411 6.75146 24.8768 7.48884 25.1116 8.29875C25.3464 9.10866 25.3725 9.96479 25.1875 10.7875C25.8946 11.2396 26.4765 11.8625 26.8796 12.5987C27.2827 13.3349 27.494 14.1607 27.494 15C27.494 15.8393 27.2827 16.6651 26.8796 17.4013C26.4765 18.1375 25.8946 18.7604 25.1875 19.2125C25.3717 20.034 25.3454 20.8886 25.1113 21.6972C24.8771 22.5059 24.4425 23.2423 23.8478 23.8382C23.2532 24.4341 22.5177 24.8702 21.7096 25.1061C20.9014 25.3419 20.0468 25.3699 19.225 25.1875C18.7734 25.8973 18.1501 26.4818 17.4127 26.8866C16.6752 27.2915 15.8475 27.5038 15.0062 27.5038C14.165 27.5038 13.3373 27.2915 12.5998 26.8866C11.8624 26.4818 11.239 25.8973 10.7875 25.1875C9.96604 25.3717 9.11138 25.3454 8.30276 25.1113C7.49413 24.8771 6.75773 24.4425 6.16183 23.8478C5.56593 23.2532 5.12982 22.5177 4.89394 21.7096C4.65806 20.9014 4.63005 20.0468 4.8125 19.225C4.09994 18.7741 3.51301 18.1502 3.10631 17.4115C2.6996 16.6728 2.48633 15.8433 2.48633 15C2.48633 14.1567 2.6996 13.3272 3.10631 12.5885C3.51301 11.8498 4.09994 11.2259 4.8125 10.775Z"
                                    fill="#D97706"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path d="M15 20V15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15 10H15.0125" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="mt-3 flex justify-between">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="bg-amber-600 hover:bg-amber-700 text-yellow-50 font-bold py-2 px-4 rounded"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="bg-amber-600 hover:bg-amber-700 text-yellow-50 font-bold py-2 px-4 rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default UserTable;
