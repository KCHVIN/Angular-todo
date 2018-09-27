import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const todos = [
        { id: 0, name: '', editing: false }
      ];
      return {todos};
    }
  }
