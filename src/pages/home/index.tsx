import React from 'react'
import { Layout } from 'antd';
import styles from 'styles/Home.module.scss'

export const Home = () => {

    const { Content } = Layout;
    return (
        <Content style={{ padding: '0' }}>

            <div className={styles.slideContentContainer} >

            </div>
        </Content>
    )
}
