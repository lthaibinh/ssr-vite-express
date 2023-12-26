import { Helmet } from "react-helmet";

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home page</title>

        <meta name="og:url" content="https://github.com/" />
        <meta name="og:type" content="object" />
        <meta name="og:title" content="GitHub: Let’s build from here" />
        <meta
          name="og:image"
          content="https://github.githubassets.com/assets/campaign-social-031d6161fa10.png"
        />
        <meta
          name="og:description"
          content="GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and fea"
        />

        <meta name="og:site_name" content="GitHub" />

        <meta
          name="og:image:alt"
          content="GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and fea.."
        />
      </Helmet>
      <div>This is the Home Page</div>
    </div>
  );
};
