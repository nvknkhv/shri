import React from 'react';
import Tag from './components/Tag';
import Checkbox from './components/Checkbox';
import TaskCard from './components/TaskCard';
import Button from './components/Button';
import { Plus } from './icons';
import Input from './components/Input/Input';
import MultiSelect from './components/Multiselect';
import Comment from './components/Comment';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="component">
        <h3>1. Tag</h3>
        <Tag accent="yellow" />
      </div>
      <div className="component">
        <h3>2. Checkbox with comment</h3>
        <Checkbox isChecked>Комментарий</Checkbox>
      </div>
      <div className="component">
        <h3>2. Checkbox without comment</h3>
        <Checkbox />
      </div>
      <div className="component">
        <h3>3. Task card</h3>
        <TaskCard
          title="Сверстать лендинг по готовому шаблону"
          tags={['violet', 'green', 'red', 'yellow', 'orange', 'green2']}
        />
      </div>
      <div className="component">
        <h3>4. Button with Icon</h3>
        <Button accent="active" LeftIcon={Plus}>
          Добавить
        </Button>
      </div>
      <div className="component">
        <h3>4. Button full</h3>
        <Button accent="active" isFullWidth>
          Сохранить
        </Button>
      </div>
      <div className="component">
        <h3>4. Button transparent</h3>
        <Button withBorder size="sm">
          Добавить
        </Button>
      </div>
      <div className="component">
        <h3>5. Input single</h3>
        <Input placeholder="Имя" />
      </div>
      <div className="component">
        <h3>5. Input multi</h3>
        <Input placeholder="Комментарий" rowsCount={5} />
      </div>
      <div className="component">
        <h3>6. MultiSelect</h3>
        <MultiSelect options={['yellow', 'red', 'green', 'blue', 'violet', 'green2', 'dark-blue']} />
      </div>
      <div className="component">
        <h3>7. Comment</h3>
        <Comment
          author="Иван Иванов"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        />
      </div>
    </div>
  );
}

export default App;
