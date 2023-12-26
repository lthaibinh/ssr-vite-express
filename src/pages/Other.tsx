import { Helmet } from "react-helmet";

export const Other = () => {
  return (
    <div>
      <Helmet>
        <title>Other page</title>
        <meta name="og:url" content="https://twitter.com/" />
        <meta name="og:type" content="object" />
        <meta name="og:title" content="X. It’s what’s happening" />
        <meta
          name="og:image"
          content="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png"
        />
        <meta
          name="og:description"
          content="From breaking news and entertainment to sports and politics, get the full story with all the live commentary."
        />

        <meta name="og:site_name" content="twitter" />

        <meta
          name="og:image:alt"
          content="From breaking news and entertainment to sports and politics, get the full story with all the live commentary."
        />
      </Helmet>
      <div>This is the Other Page</div>
    </div>
  );
};
