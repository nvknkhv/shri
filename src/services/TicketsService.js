import lsRequest from '../api';
import defaultTickets from '../assets/defaultTickets';

const TICKETS_KEY = 'MY_TICKETS';

class TicketsAPI {
  async createTicket({ title = 'ffff', description = 'olololo', tags = [], comments = [] }) {
    const { todo, in_progress, done } = await this.requestAllTickets();
    todo.unshift({ title, description, id: '444', tags, comments });
    await this.updateTickets({ todo, in_progress, done });
  }

  async getTicket({ targetStatus, targetId }) {
    const tickets = await this.requestAllTickets();
    return tickets[targetStatus].find(({ id }) => id === targetId);
  }

  async removeTicket({ deleteStatus = 'todo', deleteId = '444' }) {
    const tickets = await this.requestAllTickets();
    await this.updateTickets(
      Object.entries(tickets).reduce((result, [status, values]) => {
        if (status !== deleteStatus) result[status] = values;
        else result[status] = values.filter(({ id }) => id !== deleteId);
        return result;
      }, {}),
    );
  }

  async requestTicketsWithFilters({ isTags }) {
    const tickets = await this.requestAllTickets();

    if (!tickets.length) {
      return [];
    }

    return tickets.filter(/* делаем логику с isTags */);
  }

  async requestAllTickets() {
    if (!localStorage.getItem(TICKETS_KEY)) await lsRequest.setItem(TICKETS_KEY, JSON.stringify(defaultTickets));
    return lsRequest.getItem(TICKETS_KEY).then((data) => JSON.parse(data));
  }

  updateTickets(items) {
    return lsRequest.setItem(TICKETS_KEY, JSON.stringify(items));
  }
}

export default new TicketsAPI();
