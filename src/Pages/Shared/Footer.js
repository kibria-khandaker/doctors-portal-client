import React from 'react';
import footerImg from '../../assets/images/footer.png';
const Footer = () => {
    return (
        <footer className="p-10  bg-center bg-no-repeat bg-cover" style={{
            backgroundImage: `url('${footerImg}')`,
            backgroundBlendMode: 'overlay'
        }}>
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <p className="link link-hover">Branding</p>
                    <p className="link link-hover">Design</p>
                    <p className="link link-hover">Marketing</p>
                    <p className="link link-hover">Advertisement</p>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <p className="link link-hover">About us</p>
                    <p className="link link-hover">Contact</p>
                    <p className="link link-hover">Jobs</p>
                    <p className="link link-hover">Press kit</p>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <p className="link link-hover">Terms of use</p>
                    <p className="link link-hover">Privacy policy</p>
                    <p className="link link-hover">Cookie policy</p>
                </div>
            </div>

            <div className="footer footer-center p-2  mt-24">
                <div>
                    <p>Copyright © 2022 - All right reserved </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;