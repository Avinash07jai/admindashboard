import React from 'react';
import './sidebar.css';
import { FaHome, FaListOl, FaMoneyBillWaveAlt, FaProductHunt, FaUserAlt } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { AiFillSetting, AiOutlineMail, AiOutlineShoppingCart, AiOutlineTransaction } from "react-icons/ai";
import { RiProductHuntLine, RiTodoFill } from "react-icons/ri";
import { MdFeedback, MdManageAccounts, MdReport } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div>
                <p style={{ textAlign: 'start', color:'#A5A1A1', margin:15 }}>Dashboard</p>
                <ul>
                    <li><FaHome className='logo-icon' /> <a href='#'>Home</a></li>
                    <li><FaMoneyBillWaveAlt className='logo-icon' /> <a href='#'>Sales</a></li>
                    <li><SiGoogleanalytics className='logo-icon' /> <a href='#'>Analytics</a></li>
                </ul>
            </div>

            <div>
                <p style={{ textAlign: 'start', color: '#A5A1A1', margin:15 }}>Quick Menu</p>
                <ul>
                    <li><FaUserAlt className='logo-icon' /> <a href='#'>User</a></li>
                    <li><FaProductHunt className='logo-icon' /> <a href='#'>Products</a></li>
                    <li><AiOutlineTransaction className='logo-icon' /> <a href='#'>Transation</a></li>
                    <li><AiOutlineMail className='logo-icon' /> <a href='#'>Email</a></li>
                    <li><AiFillSetting className='logo-icon' /> <a href='#'>Setting</a></li>
                    <li><RiTodoFill className='logo-icon' /> <a href='#'>Todo</a></li>
                    <li><MdFeedback className='logo-icon' /> <a href='#'>Feedback</a></li>
                    <li><RiProductHuntLine className='logo-icon' /> <a href='#'>New Product</a></li>
                    <li><FaListOl className='logo-icon' /> <a href='#'>Product List</a></li>
                </ul>
            </div>

            <div>
                <p style={{ textAlign: 'start', color: '#A5A1A1', margin:15 }}>Notifications</p>
                <ul>
                    <li><MdManageAccounts className='logo-icon' /> <a href='#'>Manage</a></li>
                    <li><MdReport className='logo-icon' /> <a href='#'>Report</a></li>
                    <li><AiOutlineShoppingCart className='logo-icon' /> <a href='#'>Orders</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar;
