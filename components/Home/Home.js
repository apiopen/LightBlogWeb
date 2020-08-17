import React, { Fragment } from "react";
import Link from "next/link";
import Layout from "../Layout/Layout";
const Home = () => (
  <Layout title="首页">
    <Fragment>
      <h1>Hello Next.js</h1>
      <Link href="/userList"><a>用户列表页</a></Link>
    </Fragment>
  </Layout>
);
export default Home;
