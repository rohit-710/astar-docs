import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import React from "react";
import "../../css/homepage-index.scss";

type IndexItem = {
  title: JSX.Element;
  img: string;
  color: string;
  subCategoryList: subCategoryItem[];
};

type subCategoryItem = {
  title: JSX.Element;
  link: string;
  description: JSX.Element;
};

const IndexList: IndexItem[] = [
  {
    title: <Translate>Learn</Translate>,
    img: "learn.svg",
    color: "#E0338F",
    subCategoryList: [
      {
        title: <Translate>Second Category</Translate>,
        link: "/docs/about/astar",
        description: (
          <>
            <Translate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Translate>
          </>
        ),
      },
      {
        title: <Translate>Second Category</Translate>,
        link: "/docs/about/astar",
        description: (
          <>
            <Translate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Translate>
          </>
        ),
      },
    ],
  },
  {
    title: <Translate>Use</Translate>,
    img: "use.svg",
    color: "#703AC2",
    subCategoryList: [
      {
        title: <Translate>Second Category</Translate>,
        link: "/docs/about/astar",
        description: (
          <>
            <Translate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Translate>
          </>
        ),
      },
      {
        title: <Translate>Second Category</Translate>,
        link: "/docs/about/astar",
        description: (
          <>
            <Translate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Translate>
          </>
        ),
      },
    ],
  },
  {
    title: <Translate>Build</Translate>,
    img: "build.svg",
    color: "#3D73FF",
    subCategoryList: [
      {
        title: <Translate>Second Category</Translate>,
        link: "/docs/about/astar",
        description: (
          <>
            <Translate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Translate>
          </>
        ),
      },
      {
        title: <Translate>Second Category</Translate>,
        link: "/docs/about/astar",
        description: (
          <>
            <Translate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Translate>
          </>
        ),
      },
    ],
  },
  {
    title: <Translate>Tutorials</Translate>,
    img: "tutorials.svg",
    color: "#00BFD9",
    subCategoryList: [
      {
        title: <Translate>Second Category</Translate>,
        link: "/docs/about/astar",
        description: (
          <>
            <Translate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Translate>
          </>
        ),
      },
      {
        title: <Translate>Second Category</Translate>,
        link: "/docs/about/astar",
        description: (
          <>
            <Translate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Translate>
          </>
        ),
      },
    ],
  },
];

function Index({ title, img, color, subCategoryList }: IndexItem) {
  return (
    <div className="index-item">
      <div className="index-item__title">
        <div className="index-item__image">
          <img src={`/img/homepage/${img}`} />
        </div>
        <h3 style={{ color: `${color}` }}>{title}</h3>
      </div>
      <div className="subcategory-list">
        {subCategoryList.map((subCategory) => (
          <div className="subcategory-item">
            <h4 className="subcategory-item__title">
              <Link to={subCategory.link}>{subCategory.title}</Link>
            </h4>
            <div>{subCategory.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className="homepage-container">
      <section>
        <h2 className="homepage-title">Explore the Docs By Topic</h2>
        {IndexList.map((props, idx) => (
          <Index key={idx} {...props} />
        ))}
      </section>
    </div>
  );
}
