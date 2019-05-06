import configs from "../configs";
import messages from "../messages";
export default async (
  tweet: TwitStatus,
  reject: typeReject,
  resolve: typeCallback
) => {
  console.log("valid followers", tweet.user.followers_count);
  if (tweet.user.followers_count >= configs.Rules.min_followers) {
    return resolve();
  }
  reject(new Error(messages.ERRORS.not_enough_followers));
};
