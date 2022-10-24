//import { Html, Head, Main, NextScript } from "next/document";

//export default function Document() {
//    return (
//        <Html>
//            <Head />
//            <body>
//                {/* Chakra ui color script mode */}

//                <Main />
//                <NextScript />
//            </body>
//        </Html>
//    );
//}

import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          {/*Below we add the modal wrapper*/}
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}

export default MainDocument;