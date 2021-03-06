import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import GlobeIcon from "../icons/TweetInput/GlobeIcon";
import ImageIcon from "../icons/TweetInput/ImageIcon";
import GifIcon from "../icons/TweetInput/GifIcon";
import PollIcon from "../icons/TweetInput/PollIcon";
import EmojiIcon from "../icons/TweetInput/EmojiIcon";
import ScheduleIcon from "../icons/TweetInput/ScheduleIcon";
import PlusIcon from "../icons/TweetInput/PlusIcon";
import ProgressIcon from "../icons/TweetInput/ProgressIcon";

const TWEET_PRIVACY_VARIANTS = {
  hidden: { opacity: 0, height: 0, y: -20 },
  visible: { opacity: 1, height: "fit-content", y: 0 },
  exit: { opacity: 0, height: 0, y: -20 },
};

const TWEET_ACTION_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const AVATAR_URL =
  "https://pbs.twimg.com/profile_images/1294112797698043904/U4GAUapX_400x400.jpg";

const INPUT_ACTIONS = [ImageIcon, GifIcon, PollIcon, EmojiIcon, ScheduleIcon];

const TweetInput = () => {
  const [{ inputText }, setState] = useState({
    inputText: "",
  });

  const handleInputChange = (evt) => {
    setState((prev) => ({ ...prev, inputText: evt.target.value }));
  };

  return (
    <div className="flex py-3 px-4 border-b-10 border-gray-800">
      {/* Left Section */}
      <div className="mr-4">
        {/* Avatar */}
        <img
          src={AVATAR_URL}
          alt="Denny Hong"
          className="block rounded-full w-14 h-14 object-cover"
        />
        {/* Avatar End */}
      </div>
      {/* Left Section End */}

      {/* Right Section */}
      <div className="group flex-grow flex flex-col">
        {/* Text Input */}
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="What's happening?"
          className="bg-transparent resize-none text-xl mt-4 outline-none"
        />
        {/* Text Input End */}

        {/* Tweet Privacy Settings */}
        <AnimatePresence>
          {!!inputText && (
            <motion.div
              variants={TWEET_PRIVACY_VARIANTS}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-start"
            >
              <div className="self-start flex items-center text-primary mt-2 p-1 bg-transparent hover:bg-secondary rounded-full cursor-pointer subtle-transition">
                <GlobeIcon className="text-primary text-2xl mr-2" />
                <span className="font-bold">Everyone can reply</span>
              </div>
              <hr className="self-stretch border-gray-800 my-2" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Tweet Privacy Settings End */}

        {/* Tweet Actions Left */}
        <div className="flex items-center justify-between">
          <div className="flex items-center -ml-2">
            {INPUT_ACTIONS.map((Action, idx) => (
              <span
                key={idx}
                className="cursor-pointer p-2 rounded-full bg-transparent hover:bg-secondary subtle-transition"
              >
                <Action className="text-2xl text-primary" />
              </span>
            ))}
          </div>
          {/* Tweet Actions Left End */}

          {/* Tweet Actions Right */}
          <div className="flex items-center">
            {/* Plus & Progress */}
            <AnimatePresence>
              {!!inputText && (
                <motion.div
                  variants={TWEET_ACTION_VARIANTS}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex items-center mr-3"
                >
                  <span>
                    <ProgressIcon className="text-3xl" />
                  </span>
                  <div className="w-0 border-l self-stretch border-gray-800 mx-3"></div>
                  <span className="rounded-full border border-primary p-1 cursor-pointer bg-transparent hover:bg-secondary subtle-transition">
                    <PlusIcon className="text-2xl text-primary" />
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
            {/* Plus & Progress End */}

            {/* Tweet Button */}
            <button
              disabled={!inputText}
              className={`text-xl font-semibold py-2 px-4 bg-primary rounded-full outline-none hover:bg-primary-600 subtle-transition ${
                !inputText && "opacity-50 hover:bg-primary cursor-not-allowed"
              }`}
            >
              Tweet
            </button>
            {/* Tweet Button End */}
          </div>
          {/* Tweet Actions Right End */}
        </div>
      </div>
      {/* Right Section End */}
    </div>
  );
};

export default TweetInput;
