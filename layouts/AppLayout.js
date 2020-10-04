import styles from '../styles/AppLayout.module.css'
import { useState } from 'react'
import { Layout, Menu, Breadcrumb, Typography } from 'antd';
import {
  DollarOutlined,
  FileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

export default function AppLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return(
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <div className={styles.logo} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<FileOutlined />}>
              <Link href="/">Courses</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Students">
              <Menu.Item key="3">
                <Link href="/students/local-students">
                  Local
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link href="/students/international-students">
                  International
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<DollarOutlined />} title="Payments">
              <Menu.Item key="6">
                <Link href="/payments/local-payments">
                  Local
                </Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link href="/payments/international-payments">
                  International
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, display: 'flex' }}>
            <h1 className={styles.appTitle}>Registration and Accounting System</h1>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Courses</Breadcrumb.Item>
              {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
            <div className={styles.siteLayoutContent} style={{ padding: 24, minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>IdeaMappers ©2020 Created by IdeaMappers - WA</Footer>
        </Layout>
      </Layout>
  )
}
