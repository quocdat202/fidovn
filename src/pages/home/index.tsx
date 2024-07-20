import React from 'react'
import { Layout } from 'antd';
import styles from 'styles/Home.module.scss'
import AntInput from 'components/AntInput';
import AntCarousel from 'components/AntCarousel';
import slide_1 from 'assets/images/slide_1.png'
import { SearchIcon } from 'assets/svg';

export const Home = () => {
    const { Content } = Layout;
    const items = [slide_1]
    return (
        <Content style={{ padding: '0' }}>
            <div className={styles.slideContentContainer} >
                <AntInput
                    size='large'
                    style={{ width: '1150px', padding: '12px, 12px, 12px, 24px', borderRadius: '30px' }}
                    placeholder='Tìm kiếm việc làm, công ty, bất động sản, thi công nội thất,...'
                    prefix={<SearchIcon />}
                />
                <AntCarousel
                    items={items}
                    style={{
                        width: '1150px',
                        borderRadius: '16px',
                    }}
                />
            </div>
        </Content>
    )
}
