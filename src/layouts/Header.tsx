import React, {Component, memo} from 'react';
import Navbar from "@/layouts/Navbar";
import styles from '@/styles/layout.module.scss'
import Toolbar from "@/layouts/Toolbar";

class Header extends Component {
    render() {
        return (
            <>
                <header className={styles.header}>

                    <Navbar/>
                </header>
            </>
        )
    }
}

export default memo(Header)
