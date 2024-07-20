import React from 'react'
import { Layout } from 'antd';

export const Home = () => {

    const { Content } = Layout;
    return (
        <Content style={{ padding: '0 48px' }}>

            <div style={{
                padding: 24,
                minHeight: 380,
            }}>
                Content
            </div>
        </Content>
    )
}
