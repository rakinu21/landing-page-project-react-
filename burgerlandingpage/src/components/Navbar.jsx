import React, { useEffect, useState } from 'react'
import dataBurger from '../server/data.js';
import '../styles/Navbar.css'
export const Navbar = () => {

    const [dataNav, setDataNav] = useState(null);

    useEffect(() => {
        setDataNav(dataBurger[0].navigation);
    }, []);

    if (!dataNav) return <p>Loading...</p>;

    return (
        <div className='Navbar'>

            <h2>{dataBurger[0].site.brand.name}</h2>

            {dataNav.links && dataNav.links.length > 0 ? (
                <ul className="nav">
                    {dataNav.links.map((itemNav, index) => (
                        <li key={index}>
                            {itemNav.label}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No data found</p>
            )}


            <button>{dataBurger[0].navigation.cta.label}</button>

        </div>
    );
};
