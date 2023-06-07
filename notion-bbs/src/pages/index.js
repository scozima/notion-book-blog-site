import Head from "next/head";
import { Inter } from "next/font/google";
import React, { useState } from "react";

// Ant-Design
import { Button, Layout, Menu, theme, List, Space, Avatar } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  StarOutlined,
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons";
// END_Ant-Design

const { Header, Sider, Content } = Layout;

export default function Home() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);
  const handleBreakpoint = (broken) => {
    if (broken) {
      setCollapsed(true);
    }
  };

  const data = Array.from({
    length: 23,
  }).map((_, i) => ({
    href: "https://ant.design",
    title: `タイトルが入ります ${i}`,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
    description: "著者名が入ります",
    content:
      "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。",
  }));
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <>
      <Head>
        <title>Notion Blog</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout className="min-h-screen h-[100%]">
        <Sider
          className="relative w-inherit"
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="md"
          onBreakpoint={handleBreakpoint}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
            setCollapsed(collapsed);
          }}
        >
          <div className="fixed top-0 w-inherit">
            <a
              href="#"
              className="h-[50px] m-[16px] flex items-center justify-start space-x-2 px-2"
            >
              <span className="text-lg">&#128216;</span>
              <h1 className="heading-1 text-white text-lg text-bold">
                Notion Blog
              </h1>
            </a>

            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <span>&#127968;</span>,
                  label: "Home",
                },
                {
                  key: "2",
                  icon: <span>&#128129;&#8205;&#9794;&#65039;</span>,
                  label: "About",
                },
                {
                  key: "3",
                  icon: <span>&#128214;</span>,
                  label: "Book",
                },
                {
                  key: "4",
                  icon: <span>&#9999;&#65039;</span>,
                  label: "Blog",
                },
              ]}
            />
          </div>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 10,
              }}
              dataSource={data}
              footer={
                <div>
                  <b>ant design</b> footer part
                </div>
              }
              renderItem={(item) => (
                <List.Item
                  key={item.title}
                  actions={[
                    <IconText
                      icon={StarOutlined}
                      text="156"
                      key="list-vertical-star-o"
                    />,
                    <IconText
                      icon={LikeOutlined}
                      text="156"
                      key="list-vertical-like-o"
                    />,
                    <IconText
                      icon={MessageOutlined}
                      text="2"
                      key="list-vertical-message"
                    />,
                  ]}
                  extra={
                    <img
                      width={272}
                      alt="logo"
                      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                  }
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                  />
                  {item.content}
                </List.Item>
              )}
            />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
