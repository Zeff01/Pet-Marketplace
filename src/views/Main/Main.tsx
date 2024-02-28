import { ScrollView } from 'react-native-gesture-handler';
import { faker } from '@faker-js/faker'; // for temporary data;
import Post from '@components/Post/Post';
import { COLORS } from '@theme';

const fakeData = Array.from({ length: 10 }, () => {
  const name = faker.person;

  return {
    id: faker.string.alphanumeric(5),
    displayName: name.fullName(),
    userName: name.firstName(),
    postMessage: faker.lorem.sentence({ min: 10, max: 25 }),
    likes: faker.number.int({ min: 10, max: 99 }),
    shares: faker.number.int({ min: 0, max: 99 }),
  };
});

// TODO: replace with actual Flatlist or SectionList
export default function Main() {
  return (
    <ScrollView style={{ backgroundColor: COLORS['Dark Mode'].border }}>
      {fakeData.map(m => (
        <Post key={m.id} {...m} />
      ))}
    </ScrollView>
  );
}
