import { observable } from 'mobx';

class AppState {
    @observable clicked_amount = 0;
}

export default AppState;
