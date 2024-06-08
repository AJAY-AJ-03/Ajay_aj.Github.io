// src/ProfileCard.js
import React from 'react';
import './ProfileCard.css';
import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin, FaHeart, FaComment, FaShare } from 'react-icons/fa';

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <div className="profile-photo" />
            <h2 className="profile-name">V. Ajay Rathnam</h2>
            <p className="profile-bio">FullStack Developer</p>
            <div className="social-links">
                <a href="https://www.instagram.com/sparrow_._0?igsh=eW05dXlvZ3UyN2Z0" target="_blank" rel="noopener noreferrer" className="instagram">
                    <FaInstagram size={30} />
                </a>
                <a href="https://wa.me/qr/TQHENQOSBMYDG1" target="_blank" rel="noopener noreferrer" className="whatsapp">
                    <FaWhatsapp size={30} />
                </a>
                <a href="https://www.facebook.com/share/ggJr1shYiDHbzaF9/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="facebook">
                    <FaFacebook size={30} />
                </a>
                <a href="www.linkedin.com/in/ajay-rathnam-a1s2d3f4" target="_blank" rel="noopener noreferrer" className="linkedin">
                    <FaLinkedin size={30} />
                </a>
            </div>
            <div className="interaction-buttons">
                <button className="like-btn">
                    <FaHeart size={20} /> 1.3M
                </button>
                <button className="comment-btn">
                    <FaComment size={20} /> 10k
                </button>
                <button className="share-btn">
                    <FaShare size={20} /> Share
                </button>
            </div>
        </div>
    );
}

export default ProfileCard;
