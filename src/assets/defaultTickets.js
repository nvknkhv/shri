import { uuid } from 'uuidv4';

const defaultTickets = {
  todo: [
    {
      id: '1',
      title: 'Сделать дз по реакту',
      description: 'К дедлайну обязательно',
      tags: ['yellow', 'green'],
      comments: [
        {
          author: 'Иван Иванов',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
      ],
    },
    {
      id: '2',
      title: 'Сделать дз по TS',
      description: 'К дедлайну обязательно',
      tags: ['red', 'blue', 'green'],
      comments: [],
    },
  ],
  in_progress: [
    {
      id: '3',
      title: 'Добавить  redux в дз по ректу',
      description: '',
      tags: [],
      comments: [],
    },
  ],
  done: [
    {
      id: '4',
      title: 'ДЗ по асинхронности',
      description: 'Готово к дедлайну',
      tags: ['green'],
      comments: [
        {
          author: 'Наташа',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
      ],
    },
  ],
};

export default defaultTickets;