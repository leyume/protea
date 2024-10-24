import { API } from "@/config";
import { qc } from "@/modules";
import { useMutation, useQuery } from "@tanstack/vue-query";

export const getPosts = () =>
  useQuery(
    {
      queryKey: ["posts"],
      queryFn: async () => {
        console.log("WE are calling Post again....");
        return (await API.get("posts")).data;
      },
      // refetchInterval: 5 * 1000
    },
    qc
  );

export const mPost = () =>
  useMutation(
    {
      mutationFn: async (data) => {
        // Post
        let res = await API.post(`posts`, data);
        console.log({ res });
        return res;
      },
      onSuccess: (data) => {
        console.log({ data });
        qc.refetchQueries({ queryKey: ["posts"] });
      },
      onError: (error) => {
        console.log({ error });
      },
    },
    qc
  );
