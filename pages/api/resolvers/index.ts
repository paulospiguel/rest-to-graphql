import axios from "axios";
import { User } from "../../types";

export const resolvers = {
  Query: {
    getUsers: async (_, args) => {
      try {
        const users = await axios.get(
          `https://api.github.com/users?per_page=${args.per_page}`
        );
        return users.data.map(({ id, login, avatar_url }: User) => ({
          users,
        }));
      } catch (error) {
        throw error;
      }
    },
    getUser: async () => {
      try {
        const user = await axios.get(
          `https://api.github.com/users/${args.name}`
        );
        return {
          id: user.data.id,
          login: user.data.login,
          avatar_url: user.data.avatar_url,
        };
      } catch (error) {
        throw error;
      }
    },
  },
};
