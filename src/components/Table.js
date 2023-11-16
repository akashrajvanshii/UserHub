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
    <div class="lightbox-content p-5 bg-white shadow-2xl w-full h-full flex justify-between">
        <div class="leftdiv">
            <img src="${user.image}" alt="${user.firstName} ${user.lastName}" class="rounded-full mx-auto h-22 border-2 border-solid bg-white border-amber-600">
            <h2 class="text-2xl font-bold mt-5 text-center">${user.firstName} ${user.lastName}</h2>
            <p class="text-xs text-center text-amber-600">${user.gender.toUpperCase()}, <spam> ${user.age}</spam></p>
        </div>
        <div class="border-l mx-4"></div> <!-- Separator with margin -->
        <div class="rightdiv">
        <p class="text-gray-950 font-bold text-2xl text-center">Details</p>

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





            <button class="lightbox-close bg-amber-600 hover:bg-amber-700 text-yellow-50 font-bold py-2 px-4 rounded w-4/5 mt-20 ml-10">Close</button>

        </div>
    </div>
</div>

  `;

        document.body.appendChild(lightbox);

        const closeButton = lightbox.querySelector('.lightbox-close');
        closeButton.addEventListener('click', () => {
            lightbox.remove();
        });
    }
    const itemsPerPage = 8;
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
                    <th className="py-2 px-4 border-b text-gray-600 text-left">Gender</th>
                    <th className="py-2 px-4 border-b text-gray-600 text-left">Age</th>
                    <th className="py-2 px-4 border-b text-gray-600 text-left">Location</th>
                </tr>
                </thead>
                <tbody className="min-w-full bg-white border border-gray-300 mt-5">
                {currentItems.map((user) => (
                    <tr key={user.id}>
                        <td className="py-2 px-4 border-b border-r text-left ">{user.id}</td>
                        <td className="py-2 px-4 border-b border-r text-left">{user.firstName}</td>
                        <td className="py-2 px-4 border-b border-r text-left">{user.lastName}</td>
                        <td className="py-2 px-4 border-b border-r text-left">{user.gender.toUpperCase()}</td>
                        <td className="py-2 px-4 border-b border-r text-left">{user.age}</td>
                        <td className="py-2 px-4 border-b border-r text-left">{user.address.city+", "+user.address.state}</td>
                        <td className="py-2 px-4 border-b border-r text-center">
                            <button
                                className="text-amber-600 hover:text-amber-800 font-bold py-2 px-4 rounded"
                                onClick={() => openLightbox(user)}
                            >
                                More Details
                            </button>
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
