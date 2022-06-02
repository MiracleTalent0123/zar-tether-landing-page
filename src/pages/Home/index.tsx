import { Link } from "react-router-dom";
import Slider from "react-slick";
import Image1 from "../../assets/images/ZAR TETHER COIN (FRONT).png";
import Image2 from "../../assets/images/ZAR TETHER LOGO ICON.png";
import { FAQS, LISTED } from "../../constants";
import Accordion from "../../components/Accordion";
import Logo from "../../assets/images/ZAR TETHER ICON.png";
import News from "../../components/News";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Home = () => {
  return (
    <div>
      <div className="section section-1">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <div className="col-lg-7 col-12">
              <div className="title">Zar Tether Token</div>
              <h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h1>
              <div className="mt-4 pt-2">
                <button>Create Account</button>
                <button className="outline ms-md-3 mt-md-0 mt-4">
                  Learn How ZarTether Works
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-10 mt-lg-0 mt-4 pt-lg-0 pt-4 m-auto m-lg-0">
              <img src={Image1} className="w-100" alt="coin" />
            </div>
          </div>
        </div>
      </div>
      <div className="section section-2">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <div className="col-lg-5 col-sm-6 col-10 m-auto m-lg-0">
              <img src={Image2} className="w-100" alt="coin" />
            </div>
            <div className="col-lg-5 col-12 mt-lg-0 mt-4 pt-lg-0 pt-4">
              <h1 className="fw-bold">Driving the Future of Money</h1>
              <div className="mt-4">
                <p>
                  Tether tokens are the most widely adopted stablecoins, having
                  pioneered the concept in the digital token space. A disruptor
                  to the conventional financial system and a trailblazer in the
                  digital use of traditional currencies, Tether Tokens support
                  and empower growing ventures and innovation throughout the
                  blockchain space. Tether Tokens exist as a digital token built
                  on multiple blockchains.
                </p>
              </div>
              <div className="mt-4 pt-4">
                <button className="outline">Learn How ZarTether Works</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-3">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <div className="col-lg-5 col-12">
              <h1 className="fw-bold">100% backed and fully transparent</h1>
              <div className="mt-4">
                <p>
                  All Tether tokens (USD₮) are pegged at 1-to-1 with a matching
                  fiat currency and are backed 100% by Tether’s reserves. We
                  publish a daily record of the current total assets and
                  reserves.
                </p>
              </div>
              <div className="mt-4 pt-4">
                <button className="outline">Go to Transparency Page</button>
              </div>
            </div>
            <div className="col-lg-5 col-sm-6 col-10 mt-lg-0 mt-4 pt-lg-0 pt-4 m-auto m-lg-0">
              <img src={Image1} className="w-100" alt="coin" />
            </div>
          </div>
        </div>
      </div>
      <div className="section section-4">
        <div className="container">
          <h2 className="fw-bold text-center">Widespread adoption</h2>
          <p className="col-md-6 m-auto text-center mt-4">
            From being the first, to the most used, stablecoin, and one of the
            most traded tokens by volume, Tether tokens have come a long way.
            Tether tokens are today the most widely adopted stablecoins across
            major exchanges, OTC desks, and wallets, including:
          </p>
        </div>
        <div className="mt-4">
          <Slider
            {...{
              infinite: true,
              slidesToShow: 5,
              slidesToScroll: 1,
              arrows: false,
              autoplay: true,
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ],
            }}
          >
            {LISTED.map((listed, index) => (
              <div className="p-2" key={index}>
                <div className="p-4 h-100 d-flex justify-content-center align-items-center logo-card">
                  <Link to={"/"}>
                    <img src={listed.img} alt="listed logo" className="w-100" />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="container mt-4 pt-4">
          <h2 className="fw-bold text-center col-md-7 m-auto">
            The token that is disrupting the global financial industry
          </h2>
          <div className="d-flex flex-wrap mt-4 pt-4">
            <div className="col-md-4 col-12 p-3">
              <div className="bg-white p-4 rounded">
                <h3 className="news-title fw-bold">Tether for Individuals</h3>
                <p className="mt-2">
                  Tether tokens offer exceptional liquidity on tier one
                  exchanges giving traders the ability to take advantage of
                  arbitrage opportunities in the fastest time possible.
                </p>
                <h6 className="fw-bold news-readmore d-flex align-items-center">
                  Learn More{" "}
                  <ArrowRightAltIcon
                    sx={{ fontSize: "1.5rem", color: "rgb(64, 37, 139)" }}
                  />
                </h6>
              </div>
            </div>
            <div className="col-md-4 col-12 p-3">
              <div className="bg-white p-4 rounded">
                <h3 className="news-title fw-bold">Tether for Individuals</h3>
                <p className="mt-2">
                  Tether tokens offer exceptional liquidity on tier one
                  exchanges giving traders the ability to take advantage of
                  arbitrage opportunities in the fastest time possible.
                </p>
                <h6 className="fw-bold news-readmore d-flex align-items-center">
                  Learn More{" "}
                  <ArrowRightAltIcon
                    sx={{ fontSize: "1.5rem", color: "rgb(64, 37, 139)" }}
                  />
                </h6>
              </div>
            </div>
            <div className="col-md-4 col-12 p-3">
              <div className="bg-white p-4 rounded">
                <h3 className="news-title fw-bold">Tether for Individuals</h3>
                <p className="mt-2">
                  Tether tokens offer exceptional liquidity on tier one
                  exchanges giving traders the ability to take advantage of
                  arbitrage opportunities in the fastest time possible.
                </p>
                <h6 className="fw-bold news-readmore d-flex align-items-center">
                  Learn More{" "}
                  <ArrowRightAltIcon
                    sx={{ fontSize: "1.5rem", color: "rgb(64, 37, 139)" }}
                  />
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-5">
        <div className="container">
          <h2 className="fw-bold text-center">FAQs</h2>
          <div className="col-md-8 m-auto mt-4">
            <Accordion data={FAQS} />
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <button className="mt-4">Read all FAQs</button>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h2 className="fw-bold text-center">Latest news</h2>
          <div className="mt-4 d-flex flex-wrap">
            <News
              img={Logo}
              title="Stress Tests, Resiliency and Bank Runs"
              content="In the 1800s and early 1900s, the United States experienced 5 major bank runs. These events, which resulted in enormous losses for depositors and weakened confidence in the banking system became seared into the American psyche.Outside of bank failures, such as Lehman Brothers during the 2008 financial crisis, the 21st century"
            />
            <News
              img={Logo}
              title="Stress Tests, Resiliency and Bank Runs"
              content="In the 1800s and early 1900s, the United States experienced 5 major bank runs. These events, which resulted in enormous losses for depositors and weakened confidence in the banking system became seared into the American psyche.Outside of bank failures, such as Lehman Brothers during the 2008 financial crisis, the 21st century"
            />
          </div>
          <div className="d-flex justify-content-center mt-4 pt-4">
            <button className="outline">Read all News</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
