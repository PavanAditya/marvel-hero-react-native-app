import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Home } from './app/views/Home';
import { Contact } from './app/views/Contact';
import { Video } from './app/views/Video';
import { VideoDetail } from './app/views/VideoDetail';
import { Register } from './app/views/Register';
import { Login } from './app/views/Login';
import { Quiz } from './app/views/Quiz';
import { Blog } from './app/views/Blog';
import { About } from './app/views/About';
import { BlogDetail } from './app/views/BlogDetail';
import { Finish } from './app/views/QuizFinish';

const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  LessonsRT: {
    screen: Video
  },
  VideoDetailRT: {
    screen: VideoDetail
  },
  RegisterRT: {
    screen: Register
  },
  LoginRT: {
    screen: Login
  },
  QuizRT: {
    screen: Quiz
  },
  BlogRT: {
    screen: Blog
  },
  BlogDetailRT: {
    screen: BlogDetail
  },
  AboutRT: {
    screen: About
  },
  FinishRT: {
    screen: Finish
  }
},
  {
    initialRouteName: 'HomeRT'
  });

export default class App extends React.Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}
