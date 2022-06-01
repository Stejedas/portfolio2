import HeaderPortfolio from "../../Components/HeaderPortfolio/HeaderPortfolio";
import Footer from "../../Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import React, { Suspense, lazy } from "react";
const BodyPortfolio = lazy(() =>
  import("../../Components/BodyPortfolio/BodyPortfolio")
);
// ..

AOS.init();

function PortolioPage() {
  return (
    <>
      <HeaderPortfolio></HeaderPortfolio>
      <Suspense
        fallback={
            <div className="loading_lazy_container">
      <p>Espere un momento. Esto puede tomar unos segundos...</p>
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
        }
      >
        <BodyPortfolio />
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default PortolioPage;
