import { socialImgs } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <p>Terms & Conditions</p>
                </div>
                <div className="socials">
                    {socialImgs.map((img) => (
                        <a
                            className="icon"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={img.url || "#"}
                            key={img.name}
                        >
                            <img
                                src={img.imgPath}
                                alt={img.name}
                                className="social-icon-img w-5 h-5 md:w-6 md:h-6 object-contain"
                            />
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Muskan Ghedta. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
