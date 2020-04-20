import React, { useState } from 'react';
import { compose } from 'recompose';
import { StyleSheet, View, Button, Text } from 'react-native';
import {
  handleTextInput,
  withNextInputAutoFocusInput,
  withNextInputAutoFocusForm,
} from 'react-native-formik';
import { Formik } from 'formik';

import { TextField } from 'react-native-material-textfield';
import * as Yup from 'yup';

const MyInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(TextField);

const Form = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required()
    .min(4, 'title must be at least 4 characters long !'),
  content: Yup.string()
    .required()
    .min(10, 'Try to write at least 10 chars please !'),
});

export default (props) => (
  <Formik
    initialValues={{ title: '', content: '' }}
    onSubmit={(values) => console.log(values)}
    validationSchema={validationSchema}
    render={(props) => {
      return (
        <Form>
          <MyInput label="Title" name="title" type="title" />
          <MyInput label="Content" name="content" type="content" />
          <Button onPress={props.handleSubmit} title="SUBMIT" />
        </Form>
      );
    }}
  />
);

// export default function BlogPostFormFormik() {
//   <View>
//     <Formik
//       initialValues={{ title: '', content: '' }}
//       onSubmit={(values) => {
//         console.log(values);
//       }}
//     >
//       {(props) => (
//         <View>
//           <TextInput
//             placeholder="Article title"
//             onChangeText={props.handleChange('title')}
//             value={props.values.title}
//           />
//           <TextInput
//             multiline
//             placeholder="Article content"
//             onChangeText={props.handleChange('content')}
//             value={props.values.title}
//           />
//           <Button title="submit" onPress={() => props.handleSubmit} />
//         </View>
//       )}
//     </Formik>
//   </View>;
// }
