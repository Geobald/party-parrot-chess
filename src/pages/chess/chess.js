
// This is where The main game initializes and loads the chessboard component
// 20180703 GB

import Chessboard from '../../components/chessboard/chessboard.vue'
import StockfishApi from '../../services/stockfish-api'
import Chess from 'chess.js'

export default {
  name: 'chess',
  components: {
    Chessboard
  },
  data () {
    return {
      pgn: undefined, //PGN files not supported yet
      userid: Math.floor(Math.random() * 1000), // Random session ID (not really important for 1 player)
      side: 'w', // Start as white
      twoplayer: false, // Start as single player
      iconDir: 'static/icons/' // Load the Parrots!
    }
  },
  computed: {
    game () { // TODO: Create pgn func
      const chess = Chess() // Load new instance of a chess game, involving birds
      chess.load_pgn(this.pgn)
      return chess
    }
  },
  created () {
    this.newGame()
    this.stockfishApi = new StockfishApi() // Create a new instance of a GAME and init the Stockfish API
  },
  methods: {
    newGame () {
      const chess = Chess() // TODO: Create pgn func
      this.pgn = chess.pgn()
    },
    boardChange (pgn) {
      this.pgn = pgn // TODO: Create pgn func

      if (this.twoplayer) { // TODO: Create 2 player func
        setTimeout(this.swapSides, 1000)
      } else if (this.game.turn() !== this.side) { // Check whos turn it is. IF AI THEN call the API!
        this.stockfishApi.getBestMove(this.game.fen()).then(response => {
          console.log(response)
          this.move(response.data)
        })

      }
    },
    swapSides () {
      if (this.side === 'w') {// TODO: Create 2 player func
        this.side = 'b'
      } else {
        this.side = 'w'
      }
    },
    randomMove () { // TODO: Create 2 player func
      const moves = this.game.moves()
      const move = moves[Math.floor(Math.random() * (moves.length - 1))]
      this.move(move)
    },
    move (move) {
      const result = this.game.move(move, {sloppy: true})
      console.log(result)
      this.pgn = this.game.pgn() // TODO: Create pgn func
    },
    reset () {
      const chess = this.newGame()
      this.pgn = chess.pgn()  // TODO: Create pgn func
    }
  }
}
