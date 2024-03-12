const poll = {
  question: 'what is your favorite programming language',
  options: ['0: javascript', '1 : python', '2 : rust', '3: C ++'],
  answers: new Array(4).fill(0),

  displayResults(type = 'array') {
    if (typeof type === 'array') {
      console.log(this.answers);
    } else if (typeof type === 'string') {
      {
        console.log(`Poll results are ${this.answers.join(', ')}`);
      }
    }
  },

  registerAnswer() {
    console.log('hey');
    const userAnswer = prompt(
      `${this.question} \n ${this.options.join('\n')} `
    );
    userAnswer && userAnswer > this.options && this.answers[userAnswer]++;
    console.log(this.answers);
    poll.displayResults('string');
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
