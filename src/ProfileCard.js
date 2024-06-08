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
                <a href="https://www.instagram.com/a_j_a_y._.aj?igsh=MXhiOWZ2aHd1bXBxMA==" target="_blank" rel="noopener noreferrer" className="instagram">
                    <FaInstagram size={30} />
                </a>
                <a href="https://wa.me/8903422902" target="_blank" rel="noopener noreferrer" className="whatsapp">
                    <FaWhatsapp size={30} />
                </a>
                <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="facebook">
                    <FaFacebook size={30} />
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="linkedin">
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
