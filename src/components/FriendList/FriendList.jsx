import PropTypes from 'prop-types';
import { List, FriendListItem, Status, Avatar, Name } from "./FriendList.styled";
export default function FriendList({ friends }) {
    return (
        <List>
            {friends.map(friend => (
                < FriendListItem key={friend.id} >
                    {friend.isOnline === true ?(
                        <Status style={{ backgroundColor: "green" }}></Status>
                    ) : (
                            <Status style={{ backgroundColor: "red" }}></Status>      
                    )}
                    
            <Avatar src={friend.avatar} alt={friend.name} width="48" />
                    <Name>{friend.name}</Name>
        </FriendListItem>))
          
}
</List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    )
}