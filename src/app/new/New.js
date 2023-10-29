"use client";
import React, { useState } from 'react';
import styles from './new.module.css';
import Sidebar from '@/components/sidebar/Sidebar';
import Navbar from '@/components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = ({ inputs, title }) => {
    const [file, setFile] = useState("");
    return (
        <div className={styles.new}>
            <Sidebar />

            <div className={styles.newContainer}>
                <Navbar />

                <div className={styles.top}>
                    <h1 className={styles.title}>{title}</h1>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <img
                            src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                            alt=""
                            className={styles.img}
                        />
                    </div>
                    <div className={styles.right}>
                        <form className={styles.form}>
                            <div className={styles.formInput}>
                                <label className={styles.formLabel} htmlFor='file'>
                                    Image: <DriveFolderUploadOutlinedIcon className={styles.icon} />
                                </label>
                                <input onChange={e => setFile(e.target.files[0])} className={styles.inputField} type='file' id='file' style={{ display: "none" }} />
                            </div>
                            {inputs.map((input) => (
                                <div className={styles.formInput} key={input.id}>
                                    <label className={styles.formLabel}>{input.label}</label>
                                    <input className={styles.inputField} type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <button className={styles.formButton}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New