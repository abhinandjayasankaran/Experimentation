import UserItem from "./UserItem";

function UserList(props) {
    return(
        <div>
            <UserItem name={props.data[0].name} age={props.data[0].age}/>
            <UserItem name={props.data[1].name} age={props.data[1].age}/>
            <UserItem name={props.data[2].name} age={props.data[2].age}/>
        </div>
    );
}

export default UserList;