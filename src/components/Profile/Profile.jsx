import PropTypes from 'prop-types';

import { Container, ProfileDescription, ProfilePhoto, UserName, UserInfo, StatsList, StatsElemnt, StatName, StatInfo } from './Profile.styled';

export default function Profile({ username, tag, location, avatar, followers, views, likes }) {
    return (
      <Container>
  <ProfileDescription>
    <ProfilePhoto
      src={avatar}
      alt={username}
    />
    <UserName>{username}</UserName>
    <UserInfo>@{tag}</UserInfo>
    <UserInfo>{location}</UserInfo>
  </ProfileDescription>

  <StatsList>
    <StatsElemnt>
      <StatName>Followers</StatName>
    <StatInfo>{followers}</StatInfo>
    </StatsElemnt>
    <StatsElemnt>
      <StatName>Views</StatName>
        <StatInfo>{views}</StatInfo>
    </StatsElemnt>
    <StatsElemnt>
      <StatName>Likes</StatName>
        <StatInfo>{likes}</StatInfo>
    </StatsElemnt>
  </StatsList>
</Container>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired

}