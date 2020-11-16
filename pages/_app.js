import App from "next/app";
import React from "react";
// Styles
import "../styles/main.css";
class MyApp extends App {
  render() {
    const { Component, pageProps, store, router } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;

/* 

<motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
*/
