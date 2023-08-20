import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>©2023 Jamie Feliu. All rights reserved.</div>
            <div className={styles.social}>
                <Image
                    src="/1.png"
                    width={15}
                    height={15}
                    className={styles.icon}
                    alt="Jamie Lee Facebook"
                />
                <Image
                    src="/2.png"
                    width={15}
                    height={15}
                    className={styles.icon}
                    alt="Jamie Lee Instagram"
                />
                <Image
                    src="/3.png"
                    width={15}
                    height={15}
                    className={styles.icon}
                    alt="Jamie Lee Twitter"
                />
                <Image
                    src="/4.png"
                    width={15}
                    height={15}
                    className={styles.icon}
                    alt="Jamie Lee Youtube"
                />
            </div>
        </div>
    );
};

export default Footer;
