import { Fragment } from "react"; //聚合一个子元素列表，并且不在DOM中增加额外节点 <>子节点</>
import Head from "next/head";
import LayoutStyle from "./Layout.scss";
import Header from "../Header/Header";
import Link from "next/link";
export default ({ title, children }) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>博客平台</title>
      {/* <link rel="stylesheet" href="/_next/static/style.css" /> */}
    </Head>
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
      }
      body {
        font-family: Helvetica, "Hiragino Sans GB", "Microsoft Yahei",
          "微软雅黑", Arial, sans-serif;
      }
      .content-container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
    <Header title={title} />
    <div className="content-container">这里就是内容</div>
  </Fragment>
);
