import ActiveUsers from "./active-users";
import { ActiveUsersContainer, AsideContainer, PopularContainer } from "./asideStyled";
import PopularPosts from "./popular-posts";

const popularDummydata = [
  {
    id: 1,
    img: "https://img.wprost.pl/img/mateusz-morawiecki/b3/f1/9097f97688f2e72461a85c832e14.jpeg",
    title: "Firma w której ma udział Michał orbitek zarobiła pieniądze",
    comments: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    likes: 10,
  },
  {
    id: 1,
    img: "https://img.wprost.pl/img/mateusz-morawiecki/b3/f1/9097f97688f2e72461a85c832e14.jpeg",
    title: "Firma w której ma udział Michał orbitek zarobiła pieniądze",
    comments: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    likes: 10,
  },
  {
    id: 1,
    img: "https://img.wprost.pl/img/mateusz-morawiecki/b3/f1/9097f97688f2e72461a85c832e14.jpeg",
    title: "Firma w której ma udział Michał orbitek zarobiła pieniądze",
    comments: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    likes: 10,
  },
];

const usersDummyData = [
  {
    img: "https://img.wprost.pl/img/mateusz-morawiecki/b3/f1/9097f97688f2e72461a85c832e14.jpeg",
    username: "Morawiecki",
    comments: ["1", "2", "3"],
  },
  {
    img: "https://img.wprost.pl/img/mateusz-morawiecki/b3/f1/9097f97688f2e72461a85c832e14.jpeg",
    username: "Morawiecki",
    comments: ["1", "2", "3"],
  },
  {
    img: "https://img.wprost.pl/img/mateusz-morawiecki/b3/f1/9097f97688f2e72461a85c832e14.jpeg",
    username: "Morawiecki",
    comments: ["1", "2", "3"],
  },
];

const Aside = () => {
  return (
    <AsideContainer>
      <PopularContainer>
        <h2>Popularne teraz</h2>
        {popularDummydata.map((data) => (
          <PopularPosts data={data} />
        ))}
      </PopularContainer>
      <ActiveUsersContainer>
          <h2>Najbardziej aktywni dzisiaj</h2>
          {usersDummyData.map((data) => (
            <ActiveUsers data={data}/>
          ))}
      </ActiveUsersContainer>
    </AsideContainer>
  );
};

export default Aside;
