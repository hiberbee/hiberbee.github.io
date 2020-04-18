import React from 'react';
import { Col, Layout, Row } from 'antd';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import { IndexPage } from '../pages/IndexPage';
import { AiOutlineGithub } from 'react-icons/all';

export const App = (): JSX.Element => {
  return (
    <Layout style={{ minHeight: '100vh', backgroundImage: 'url("img/background.webp")', backgroundSize: 'cover' }}>
      <BrowserRouter>
        <Layout.Content style={{ padding: '20px 50px' }}>
          <Route path={'/'} exact component={IndexPage} />
        </Layout.Content>
      </BrowserRouter>
      <Layout.Footer>
        <Row justify={'center'}>
          <Col>
            Typescript Antd React Project Template © {new Date().getFullYear()} Created by <AiOutlineGithub className={'anticon'} />{' '}
            <a href={'https://hiberbee.com'} target={'_blank'} rel='noopener noreferrer'>
              Hiberbee
            </a>
          </Col>
        </Row>
      </Layout.Footer>
    </Layout>
  );
};
