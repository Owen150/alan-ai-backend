// Use this sample to create your own voice commands
intent('What does this app do?', 'What can I do here?',
      reply('This is a news project.'));

intent('Start a command', (p) => {
    p.play({ command: 'testCommand'});
})