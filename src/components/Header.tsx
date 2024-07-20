import React from 'react'
import { Row, Layout, Menu, Col } from 'antd';
import logo_fidovn from 'assets/images/logo_fidovn.png'
import vi_language from 'assets/images/vi_language.png'
import styles from '@/styles/Header.module.scss'
import AntButton from './AntButton';
import { BuildingsIcon, ProfileIocn, RegisterIcon } from 'assets/svg';
export const HeaderApp = () => {
    const { Header } = Layout;
    const items = [
        {
            key: '1',
            label:
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo_fidovn} />
                </div>
        },
        {
            key: '2',
            icon: null,
            label: 'Việc làm',
            path: '/',
            children: [
                { key: '7', label: 'Option 7' },
                { key: '8', label: 'Option 8' },
            ],
        },
        {
            key: '3',
            icon: null,
            label: 'Bất động sản',
            path: '/real-estate',
        },
        {
            key: '4',
            icon: null,
            label: 'Công ty',
            path: '/company',
        },
        {
            key: '5',
            icon: null,
            label: 'Công cụ',
            path: '/tools',
        },
        {
            key: '6',
            icon: null,
            label: 'Blog Fidovn',
            path: '/blogs',
        },
    ]
    const styleButton = {
        borderColor: '#FA9806', color: '#FA9806', borderRadius: 16,
    }


    return (
        <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                backgroundColor: 'white',
                padding: 0,
            }}
        >
            <Row style={{ padding: '0 20px' }} >
                <Col span={12}>
                    <Menu
                        mode="horizontal"
                        items={items}
                        style={{
                            display: 'flex',
                            width: '100%',
                            minWidth: 0,
                            alignItems: 'center',
                            fontSize: 18,
                            fontWeight: 500,
                            border: 'none'
                        }}
                    />
                </Col>
                <Col style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    justifyContent: 'flex-end',
                }} span={12}>
                    <AntButton
                        size='large'
                        text="Đăng ký"
                        icon={<RegisterIcon />}
                        style={{ borderColor: '#FA9806', color: '#FA9806', borderRadius: 16, }}
                    />
                    <AntButton
                        size='large'
                        text="Đăng nhập"
                        icon={<ProfileIocn />}
                        style={{ backgroundColor: '#FA9806', borderColor: '#FA9806', color: 'white', borderRadius: 16, }}
                    />
                    <AntButton
                        size='large'
                        text="Đăng tuyển & Mua bán"
                        icon={<BuildingsIcon />}
                        style={{ backgroundColor: '#1B1B1B', borderColor: '#1B1B1B', color: 'white', borderRadius: 16, }}
                    />
                    <AntButton
                        size='large'
                        icon={<img style={{ borderRadius: 16, }} src={vi_language} />}
                    />
                </Col>
            </Row>

        </Header>
    )
}
