import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'counter',
  initialState : {
    prime: 0,
    value: 0,
    step: 1,
    currentStep: 1,
    player: 'X',
    connected: false,
    message: '',
    totalCount: 0,
    xCount: 0,
    oCount: 0,
    drawCount: 0,
    gameOver: false,
    winner: '',
    board : [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  },
  reducers: {
    play: (state, action) => {

      function count() {
        for (let i=0; i< 3; i++) {
          let result = 0;
          for (let j=0; j<3; j++) {
            result += Math.sign(state.board[i][j]);
          }
          if (result == 3) {
            for (let j=0; j<3; j++) {
              state.board[i][j]+=10;
            }
            return 1;
          }
          else if (result == -3) {
            for (let j=0; j<3; j++) {
              state.board[i][j]-=10;
            }
            return -1;
          }
        }
        for (let i=0; i< 3; i++) {
          let result = 0;
          for (let j=0; j<3; j++) {
            result += Math.sign(state.board[j][i]);
          }
          if (result == 3) {
            for (let j=0; j<3; j++) {
              state.board[j][i]+=10;
            }
            return 1;
          }
          else if (result == -3) {
            for (let j=0; j<3; j++) {
              state.board[j][i]-=10;
            }
            return -1;
          }
        }
        let result = 0;
        for (let i=0; i<3; i++) {
          result += Math.sign(state.board[i][i]);
        }
        if (result == 3) {
          for (let i=0; i<3; i++) {
            state.board[i][i]+=10;
          }
          return 1;
        }
        else if (result == -3) {
          for (let i=0; i<3; i++) {
            state.board[i][i]-=10;
          }
          return -1;
        }
        result = 0;
        for (let i=0; i<3; i++) {
          result += Math.sign(state.board[2-i][i]);
        }
        if (result == 3) {
          for (let i=0; i<3; i++) {
            state.board[2-i][i]+=10;
          }
          return 1;
        }
        else if (result == -3) {
          for (let i=0; i<3; i++) {
            state.board[2-i][i]-=10;
          }
          return -1;
        }
        return 0;
      }

      // Основной код

      if (state.player=='X') {
        state.player = '0';
        state.board[action.payload.y][action.payload.x] = 1 * state.step;
      }
      else {
        state.player='X';
        state.board[action.payload.y][action.payload.x] = -1 * state.step;
      }
      const gameCount=count();
      if (gameCount != 0) {
        state.gameOver = true;
        state.totalCount+=1;
        if (gameCount == 1) {
          state.winner = 'X';
          state.xCount+=1;
        }
        else if (gameCount == -1) {
          state.winner = '0';
          state.oCount+=1;
        }
        return;
      }
      if (state.step==9 && gameCount == 0) {
        state.gameOver = true;
        state.totalCount+=1;
        state.drawCount+=1;
        return;
      } 
      state.step++;
      state.currentStep = state.step;
  },
  newGame: state => {
    state.value = 0;
    state.step = 1;
    state.currentStep=1;
    state.player ='X';
    state.gameOver = false;
    state.winner = '';
    state.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  },
  setStep: (state, action) => { 
    state.currentStep = action.payload.n;
  },
  MONGO_CONNECT_FAILED: (state, action) => {
    state.message = action.payload.message;
    state.connected = false;
  },
  MONGO_CONNECT_SUCCEEDED: (state, action) => {
    state.message = '';
    state.connected = true;
    state.totalCount = action.payload.totalCount;
    state.xCount = action.payload.xCount;
    state.oCount = action.payload.oCount;
    state.drawCount = action.payload.drawCount;
  },
  noPrime: (state) => {
    state.prime=1;
  }
  }
})

export const {play, newGame, setStep, MONGO_CONNECT_FAILED, MONGO_CONNECT_SUCCEEDED, noPrime} = counterSlice.actions

export default counterSlice.reducer