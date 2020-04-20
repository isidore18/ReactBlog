import React, { useContext, useState } from 'react';
import { StyleSheet, Animated, Text } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';
import BasicExample from '../components/BlogPostFormFormik';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View
      style={{
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      <BlogPostForm
        onSubmit={(title, content) => {
          addBlogPost(title, content, () => navigation.navigate('Index'));
        }}
      />
    </Animated.View>
    // <BasicExample />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
