
import React, { useState } from 'react';
import './App.css';
import { Layout, Avatar, Menu, Button,Typography,theme,Space,Breadcrumb, Table, Statistic} from 'antd';
// import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { UserOutlined ,MailOutlined,LineChartOutlined,CheckOutlined, VerticalAlignMiddleOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import 'antd/dist/reset.css';
import { Progress } from 'antd';






const { Header, Content, Footer,Sider } = Layout;
const { Title } = Typography;


const headerStyle = {
  textAlign: 'left',
  color: '#fff',
  height: 75,
  paddingInline: 50,
  lineHeight: '10px',
  backgroundColor: '#00475F',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const contentStyle = {
  textAlign: 'left',
  paddingInline: 50,
  minHeight: 600,
  lineHeight: '650px',
  color: '#fff',
  backgroundColor: '#FFFFFF',
};
const siderStyle = {
  textAlign: 'center',
  height: 800,
  lineHeight: '600px',
  color: '#61dafb',
  backgroundColor: '#287287',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#FFFFFF',
};
const buttonStyle = {
    backgroundColor: '#EAE2B7',
    color: '#ffffff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  };

function App(){
  return(
    <Layout>
    <Header style={headerStyle}>
        <Title style={{ color: 'white'}} level={3}>
          AFSHAN
        </Title>
        <div style={{ display: 'flex' }}>
        <button style={buttonStyle}>Click Me</button>
          <Avatar size={32} src='./pic.png' style={{ marginRight: '16px' }} />
          
        </div>
      </Header>
      <Layout>
      <Sider style={siderStyle}>
      <div style={{ display: 'flex' }}>
        <img src='./logoship.png' idth={50} height={100} alt="logo" style ={{paddingTop:20,paddingLeft:50,paddingBottom: 10}}/>
          </div>
      <Menu 
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
              <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">
                  afshan.ajmer@gmail.com
                </a> 
              </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon component={LineChartOutlined} />
                    <span>TO DO LIST</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='Task' title='Complete it!'>
                  <Menu.Item key='location1'>
                  <a href="https://react.dev/learn/react-developer-tools" target="_blank" rel="noopener noreferrer">
                    React Tools
                  </a> 
                  </Menu.Item>
                  <Menu.Item key='location2'>
                  <a href="https://react.dev/learn/react-developer-tools" target="_blank" rel="noopener noreferrer">
                    Ant-Design
                  </a>
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu
                title={
                  <span>
                    <Icon component={CheckOutlined } />
                    <span>TASK DONE</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='Task' >
                  <Menu.Item key='location1'> Dashboard</Menu.Item>
                  <Menu.Item key='location2'> 
                  <a href="https://leetcode.com/tag/linked-list/" target="_blank" rel="noopener noreferrer">
                    Leetcode LinkedList
                  </a>
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
            
      </Sider>
      <Layout>
      <Content style={contentStyle}>
         
        <Title style={{color: 'black',paddingInline: 50,paddingTop: 50}} level={4}>Welcome Back!</Title>
      </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
    </Layout>
  );
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <Layout className="layout">
//       <Header style={{ padding: 10,alignItems: 'left' }}>
//       {/* <Header
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           padding: 10,
//         }}
//       > */}
//           <Avatar style={{ float: 'right'}} size={32} icon={<UserOutlined />} />
//           <Title style={{ color: 'white' }} level={3}>AFSHAN</Title>
//         </Header>
//         <Layout>
//           <Sider>
//             <Menu
//               defaultSelectedKeys={['Dashboard']}
//               mode="inline"
//             >
//               <Menu.Item key='Dashboard'>
//                 Dashboard
//             </Menu.Item>
//               <SubMenu
//                 title={
//                   <span>
//                     <Icon component={LineChartOutlined} />
//                     <span>TO DO LIST</span>
//                   </span>
//                 }
//               >
//                 <Menu.ItemGroup key='Task' title='nikita@gmail.com'>
//                   <Menu.Item key='location1'> Task 1</Menu.Item>
//                   <Menu.Item key='location2'> TAsk 2</Menu.Item>
//                 </Menu.ItemGroup>
//               </SubMenu>
//               <SubMenu
//                 title={
//                   <span>
//                     <Icon component={CheckOutlined } />
//                     <span>TASK DONE</span>
//                   </span>
//                 }
//               >
//                 <Menu.ItemGroup key='Task' >
//                   <Menu.Item key='location1'> Dashboard</Menu.Item>
//                   <Menu.Item key='location2'> Leetcode LinkedList</Menu.Item>
//                 </Menu.ItemGroup>
//               </SubMenu>
//             </Menu>
//           </Sider>

          
//       </Layout>
//       </Layout>
//     </div>
//   );
// }


