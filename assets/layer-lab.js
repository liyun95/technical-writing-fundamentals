document.addEventListener('DOMContentLoaded', () => {
  const layerButtons = document.querySelectorAll('[data-layer-trigger]');
  const layerPanels = document.querySelectorAll('[data-layer-panel]');

  layerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.layerTrigger;

      layerButtons.forEach((candidate) => {
        candidate.setAttribute(
          'aria-selected',
          String(candidate.dataset.layerTrigger === target),
        );
      });

      layerPanels.forEach((panel) => {
        panel.hidden = panel.dataset.layerPanel !== target;
      });
    });
  });

  document.querySelectorAll('[data-layer-quiz]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const items = [...form.querySelectorAll('.classification-item')];
      let correct = 0;
      let answered = 0;

      items.forEach((item) => {
        const select = item.querySelector('select[data-answer]');
        const itemFeedback = item.querySelector('[data-item-feedback]');
        const isAnswered = select.value !== '';
        const isCorrect = isAnswered && select.value === select.dataset.answer;

        item.classList.toggle('is-correct', isCorrect);
        item.classList.toggle('is-review', isAnswered && !isCorrect);

        if (!isAnswered) {
          itemFeedback.textContent = '先选择一个层次，再检查。';
          return;
        }

        answered += 1;
        correct += Number(isCorrect);
        itemFeedback.textContent = `${isCorrect ? '定位正确。' : '再看一次。'} ${select.dataset.explanation}`;
      });

      const summary = form.querySelector('[data-quiz-feedback]');
      summary.setAttribute('aria-live', 'polite');
      if (answered < items.length) {
        summary.textContent = `已回答 ${answered}/${items.length} 项；请先完成剩余项目。`;
      } else if (correct === items.length) {
        summary.textContent = `${correct}/${items.length}：判断准确。接下来请完成开放式练习。`;
      } else {
        summary.textContent = `${correct}/${items.length}：阅读每项解释后修改答案，再检查一次。`;
      }
    });
  });
});
