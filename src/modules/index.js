import { QueryClient, useQuery } from "@tanstack/vue-query";
import { API } from "../config.js";

export const qc = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 15 * 60, // 60 secs,
      refetchOnMount: false,
    },
  },
});

export const getQ = (key) =>
  useQuery(
    {
      queryKey: [key],
      queryFn: async () => {
        console.log("GETTING...", key);
        return (await API.get(key)).data;
      },
      // refetchInterval: 5 * 1000
    },
    qc
  );

// export const setABC = () =>
qc.setQueryData(["abc"], "123");

export { mPost } from "./posts";
export { getAlbums } from "./albums";
