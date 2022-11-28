import UserItem from "./UserItem";

function UserList(props) {

  return (
    <div>
      {props.data.map((user) => {
        return <UserItem key={user.id} name={user.name} age={user.age} />;
      })}
    </div>
  );
}

export default UserList;
