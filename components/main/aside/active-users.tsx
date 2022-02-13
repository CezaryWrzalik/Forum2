import CommentsIcon from "../../icons/comments-icon";
import { UiCountDisplayer } from "../../ui/uiCountDisplayer";
import { ActiveUsersContainer, ImageContainer } from "./active-usersStyled";

type PropsType = {
	data: {
		img: string,
		username: string,
		comments: string[],
	}
}

const ActiveUsers = ({data}: PropsType) => {
	return(
		<ActiveUsersContainer>
			<ImageContainer>
				 <img src={data.img} />
			</ImageContainer>
			<p>{data.username}</p>
			<UiCountDisplayer>
				<CommentsIcon />
				{data.comments.length}
			</UiCountDisplayer>
		</ActiveUsersContainer>
	)
}

export default ActiveUsers;