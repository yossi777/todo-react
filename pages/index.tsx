import type { NextPage } from "next";
import { TwitterCard } from "../components/TwitterCard";

const foo: boolean = false;

const Home: NextPage = () => {
  return (
    <div>
      <TwitterCard
        user={{ name: "しまぶー", accountName: "しまぶー", image: "" }}
      />
    </div>
  );
};

export default Home;
