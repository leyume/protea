import { API } from "@/config";
import { qc } from "@/modules";
import { useQuery } from "@tanstack/vue-query";

export const getAlbums = () =>
  useQuery(
    {
      queryKey: ["albums"],
      queryFn: async () => (await API.get("albums")).data,
    },
    qc
  );

export const getAlbumWithPosts = () =>
  useQuery(
    {
      queryKey: ["albums"],
      queryFn: async () => (await API.get("albums/post")).data,
    },
    qc
  );
