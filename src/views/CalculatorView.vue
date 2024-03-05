<template>
  <main class="calculator root">
    <textarea class="calculator monitor" type="text" disabled></textarea>
    <button class="calculator backspace">Backspace</button>
    <button class="calculator c">C</button>
    <button class="calculator seven">7</button>
    <button class="calculator eight">8</button>
    <button class="calculator nine">9</button>
    <button class="calculator divide">/</button>
    <button class="calculator four">4</button>
    <button class="calculator five">5</button>
    <button class="calculator six">6</button>
    <button class="calculator multiply">x</button>
    <button class="calculator one">1</button>
    <button class="calculator two">2</button>
    <button class="calculator three">3</button>
    <button class="calculator minus">-</button>
    <button class="calculator zero">0</button>
    <button class="calculator plus">+</button>
    <button class="calculator dot">.</button>
    <button class="calculator equals">=</button>
  </main>
</template>

<style>
.calculator.root {
  display: grid;
  height: 100%;
  gap: 2px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template:
    'monitor monitor monitor monitor  '
    'c       c       .       backspace'
    'seven   eight   nine    divide   '
    'four    five    six     multiply '
    'one     two     three   minus    '
    'zero    dot     plus    equals   ';
}

.calculator.monitor {
  grid-area: monitor;
  resize: none;
}

.calculator.backspace {
  grid-area: backspace;
}

.calculator.c {
  grid-area: c;
}

.calculator.divide {
  grid-area: divide;
}

.calculator.multiply {
  grid-area: multiply;
}

.calculator.minus {
  grid-area: minus;
}

.calculator.plus {
  grid-area: plus;
}

.calculator.equals {
  grid-area: equals;
}

.calculator.dot {
  grid-area: dot;
}

.calculator.one {
  grid-area: one;
}

.calculator.two {
  grid-area: two;
}

.calculator.three {
  grid-area: three;
}

.calculator.four {
  grid-area: four;
}

.calculator.five {
  grid-area: five;
}

.calculator.six {
  grid-area: six;
}

.calculator.seven {
  grid-area: seven;
}

.calculator.eight {
  grid-area: eight;
}

.calculator.nine {
  grid-area: nine;
}

.calculator.zero {
  grid-area: zero;
}
</style>
