/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
//import type {Node} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import Box from './components/Box';
import Counter from './components/Counter';
import DateHead from './components/DateHead';
import Empty from './components/Empty';
import Greeting from './components/Greeting';
import TodoList from './components/TodoList';

const App = () => {
  const date = new Date();
  //console.log(date);
  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리엑트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ])
  
  // todo 항목 추가 
  const onInsert = text => {
    // 새로 등록할 항목의 id를 구함
    // 등록된 항목 중에서 가장 큰 id를 구하고, 그 값에 1을 더함
    // 만약 리스트가 비어있다면 1을 id로 사용함
    const nextId 
        = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };

    setTodos(todos.concat(todo));
  }

  //todo 항목 반전
  const onToggle = id => {
    const nextTodos = todos.map(todo => 
      todo.id === id ? {...todo, done: !todo.done} : todo
    );
    setTodos(nextTodos);
  }

  //todo 항목 삭제
  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  }

  return (
    <>
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <DateHead date={date} />
        {todos.length===0 ? (
          <Empty />
        ) : (
          <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
        )}
        <AddTodo onInsert={onInsert} />
      </SafeAreaView>
    </SafeAreaProvider>
    </>
  )
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default App;
