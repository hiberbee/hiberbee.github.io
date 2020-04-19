/*
 * MIT License
 *
 * Copyright (c) 2020 Hiberbee
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from 'react';
import { register } from './serviceWorker';
import { Layout, Typography } from 'antd';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.compact.min.css';

function Index(): JSX.Element {
  return (
    <Layout.Content style={{ position: 'absolute', textAlign: 'center', top: '50%', transform: 'translateY(-50%)' }}>
      <Typography.Title level={1}>
        Perfection is achieved not when there is nothing left to add, but when there is nothing left to take away
      </Typography.Title>
      <Typography.Title level={2} type={'secondary'}>
        Antoine de Saint-Exupery
      </Typography.Title>
    </Layout.Content>
  );
}

function App(): JSX.Element {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}>
      <BrowserRouter>
        <Layout.Content style={{ position: 'relative', width: '80%', margin: '0 auto' }}>
          <Route path={'/'} exact component={Index} />
        </Layout.Content>
      </BrowserRouter>
    </Layout>
  );
}

render(<App />, document.getElementById('root'));
register();
