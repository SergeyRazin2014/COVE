import { postsUrl } from "../../../api";
import { useFetchData } from "../../../hooks/useFetchData";

export const useFetchCards = ({ lang }) => {
    const { data, isLoading } = useFetchData(postsUrl);
    const cards = data?.map(item => { return { ...item, title: item?.title?.[lang], text: item?.body?.[lang] } });

    return { cards, isLoading }
}