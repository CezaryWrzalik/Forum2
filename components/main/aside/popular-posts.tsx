import CommentsIcon from "../../icons/comments-icon";
import HappyfaceIcon from "../../icons/happyface-icon";
import HeartIcon from "../../icons/heart-icon";
import LikeIcon from "../../icons/like-icon";
import { UiCountDisplayer } from "../../ui/uiCountDisplayer";
import {
  ImageContainer,
  PopularContainer,
  ReactionsContainer,
  TitleContainer,
} from "./popular-postsStyled";

type PropsType = {
  data: {
    id: number;
    img: string;
    title: string;
    comments: string[];
    likes: number;
  };
};

const PopularPosts = ({ data }: PropsType) => {
  return (
    <PopularContainer>
      <ImageContainer>
        <img src={data.img} alt="" />
      </ImageContainer>
      <TitleContainer>{data.title}</TitleContainer>
      <ReactionsContainer>
        <UiCountDisplayer>
          <CommentsIcon />
          {data.comments.length}
        </UiCountDisplayer>
        <div>
          <LikeIcon />
          <HappyfaceIcon />
          <UiCountDisplayer>
            <HeartIcon />
            {data.likes}
          </UiCountDisplayer>
        </div>
      </ReactionsContainer>
    </PopularContainer>
  );
};

export default PopularPosts;
