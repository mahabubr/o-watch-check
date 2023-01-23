import React from 'react';

const CardSideBar = () => {
    return (
        <div className="drawer drawer-end">
            <input id="card-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                {/* <label htmlFor="card-drawer" className="drawer-button btn btn-primary">Open drawer</label> */}
            </div>
            <div className="drawer-side">
                <label htmlFor="card-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    );
};

export default CardSideBar;