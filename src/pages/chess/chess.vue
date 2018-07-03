<template>
  <div class="page-container">
    <!-- The chessboard listens to events triggered within the app whilst the vue instance is running the party -->
    <chessboard class="chessboard" :iconDir="iconDir" :pgn="pgn" :side="side" v-on:change="boardChange($event)"></chessboard>
    <div class="controls">
          <table>
          <tbody><tr><img src="https://media.giphy.com/media/l3q2zVr6cu95nF6O4/giphy.gif"></tr>
          <tr><h2>PARTY PARROT CHESS</h2></tr>
          <!-- This calls the RandomMove() Method to make parrots move! -->
                <a class="button" v-on:click="randomMove()">Test Stockfish API</a>
                <tr><h6>Made using Chode.js</h6></tr>
        </tbody></table>
    </div>
  </div>
<!-- init the scripts and tid bits of css -->
</template>
<script src="./chess.js"></script>

<style scoped lang="scss">
@import '../../_variables';

.page-container {
  display: flex;
  flex-direction: row;

  @include media('medium') {
    flex-direction: column;
  }
}

.chessboard {
  flex: 1;
  flex-basis: 70%;
  max-width: 100vh;
}

.controls {
  flex: 0;
  flex-basis: 30%;
}

</style>
