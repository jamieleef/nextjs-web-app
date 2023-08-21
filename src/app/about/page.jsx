import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    fill={true}
                    alt=""
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDescription}>
                        Handcrafting award winning digital experiences.
                    </h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Similique dignissimos, vero quaerat natus sit
                        voluptatum nostrum, saepe numquam soluta quis obcaecati
                        ea vel. Modi incidunt optio laudantium ab aut quis.
                        <br />
                        <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Reprehenderit delectus dolorem accusamus
                        temporibus facere ipsam ullam dolorum dolores quas error
                        labore nostrum dolor dicta, quis, deserunt ipsa
                        aspernatur omnis quaerat.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What We Do</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Porro, unde. Ipsum error obcaecati saepe earum minus
                        sequi, voluptatem libero corporis. Est voluptatibus
                        praesentium assumenda officia soluta ea dolore minima
                        sint!
                        <br />
                        <br />
                        Creative Illustrations
                        <br />
                        <br />
                        Dynamic Websites
                        <br />
                        <br />
                        Fast and Handy Mobile Apps
                    </p>
                    <Button url="contact" text="Contact" />
                </div>
            </div>
        </div>
    );
};

export default About;
