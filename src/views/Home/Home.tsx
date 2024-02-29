import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Button from '@components/Button';
import { StackProps } from '@navigator/stack';
import { colors } from '@theme';
import { PostFeedContext } from '../../providers/PostFeedsProvider';

const Home: React.FC = () => {
  const { postFeeds } = useContext(PostFeedContext);
  // console.log('running Home----------------1', postFeeds);
  return (
    <View>
      <Text>Home Page</Text>
      {postFeeds?.map((postFeed, index) => (
        <View key={index}>
          <Text>{postFeed.user_name}</Text>
          {/* Use Image component to display the image */}
          <Image source={{ uri: postFeed.main_photo }} style={{ width: 200, height: 200 }} />
          {/* Render other post feed data */}
        </View>
      ))}
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonTitle: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    backgroundColor: colors.lightPurple,
  },
});
