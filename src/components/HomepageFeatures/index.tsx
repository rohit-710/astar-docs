import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import React from "react";
import "../../css/homepage-features.scss";

type FeatureItem = {
  title: JSX.Element;
  link: string;
  img: string;
  button: JSX.Element;
  color: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate>Learn about Astar</Translate>,
    link: "/docs/about/astar",
    img: "learn.svg",
    button: <Translate>Read the docs</Translate>,
    color: "#E0338F",
    description: (
      <>
        <Translate>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Use ASTAR tokens</Translate>,
    link: "/docs/about/astar",
    img: "use.svg",
    button: <Translate>See how to use</Translate>,
    color: "#9256ED",
    description: (
      <>
        <Translate>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Build dApps</Translate>,
    link: "/docs/about/astar",
    img: "build.svg",
    button: <Translate>Play with code</Translate>,
    color: "#3D73FF",
    description: (
      <>
        <Translate>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Learn through tutorials</Translate>,
    link: "/docs/about/astar",
    img: "tutorials.svg",
    button: <Translate>View tutorials</Translate>,
    color: "#00BFD9",
    description: (
      <>
        <Translate>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Translate>
      </>
    ),
  },
];

function Feature({
  title,
  img,
  button,
  color,
  description,
  link,
}: FeatureItem) {
  return (
    <div className="feature-item">
      <div className="feature-item__image">
        <img src={`/img/homepage/${img}`} />
      </div>
      <h3 className="feature-item__title">{title}</h3>
      <div className="row--description">
        <span className="text--description">{description}</span>
      </div>
      <Link
        to={link}
        className="feature-item__button"
        style={{ backgroundColor: `${color}` }}
      >
        {button}
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section>
      <h2 className="homepage-title">How would you like to get started?</h2>
      <div className="feature-list">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
