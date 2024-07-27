import NavMenu from "@/pages/NavMenu";
import React,{useEffect,useState} from "react";
import styles from '@/styles/Contacto.module.css';

    const Contacto = () => {
        const [contactInfo, setContactInfo] = useState(null);

        useEffect(() => {
            if (typeof window !== "undefined") {
                const info = localStorage.getItem('contactInfo');
                setContactInfo(info);
            }
        }, []);
    return (
        <div className={styles.container}>
            <NavMenu />
            <h1>Contatto</h1>
            <p>Siamo qui per aiutarti!</p>

        </div>
    );
}

export default Contacto;
