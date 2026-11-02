(() => {
  'use strict';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  const closeMenu = () => { nav.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

  const mediaData = window.TARO_MEDIA;
  const changeClip = (video, key, label) => {
    const clip = mediaData.media[key];
    video.pause();
    video.poster = clip.poster;
    video.setAttribute('aria-label', label);
    const source = video.querySelector('source');
    if (source.getAttribute('src') !== clip.src) {
      source.src = clip.src;
      const fallback = video.querySelector('a');
      if (fallback) { fallback.href = clip.src; fallback.textContent = `Download ${label}`; }
      // The selected clip remains paused. preload=none avoids fetching every condition.
      video.load();
    } else if (video.readyState >= 1) video.currentTime = 0;
  };
  const buttonFor = (label, group, onSelect) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.className = 'choice-button';
    button.setAttribute('aria-pressed', 'false');
    group.append(button);
    button.addEventListener('click', onSelect);
    return button;
  };
  const markChoice = (buttons, active) => buttons.forEach(button => button.setAttribute('aria-pressed', String(button === active)));
  const taskSelectors = {};
  document.querySelectorAll('[data-task]').forEach(card => {
    const task = card.dataset.task;
    const config = mediaData.tasks[task];
    card.id = `demo-${task}`;
    const video = card.querySelector('video');
    const controls = card.querySelector('.condition-controls');
    controls.setAttribute('role', 'group');
    const buttons = [];
    const select = (clip, button, replace = true) => {
      markChoice(buttons, button);
      card.querySelector('.condition-description').textContent = `${clip.id} · ${clip.description}`;
      card.querySelector('.demo-setting').textContent = `Condition ${clip.id} · 2× speed`;
      if (task === 'bottle') card.querySelector('.demo-body > p:not(.condition-description)').textContent = clip.id === 'C1'
        ? 'With 90° remaining, TARO twists the cap and lifts it off. Switch to C2 to see recovery when the cap remains attached after the first twist.'
        : 'After the first 90° twist, upward resistance reveals that the cap is still attached. TARO releases and resets its grasp, twists another 90°, and lifts off the cap.';
      if (task === 'blackbox') card.querySelector('.demo-body > p:not(.condition-description)').textContent = clip.id === 'C2'
        ? 'An unbalanced lift reveals a misplaced grasp. TARO moves left moderately, then right slightly twice. The fourth grasp succeeds.'
        : 'The center of mass is hidden from view. TARO uses contact feedback to adjust its grasp and complete the transfer.';
      if (replace) changeClip(video, clip.media, `${config.name}, condition ${clip.id}, autonomous TARO at 2× speed`);
      else video.setAttribute('aria-label', `${config.name}, condition ${clip.id}, autonomous TARO at 2× speed`);
    };
    config.clips.forEach(clip => {
      let button;
      button = buttonFor(clip.id, controls, () => select(clip, button));
      button.setAttribute('aria-label', `${clip.id}: ${clip.description}`);
      buttons.push(button);
    });
    const defaultIndex = config.clips.findIndex(clip => clip.id === config.default);
    select(config.clips[defaultIndex], buttons[defaultIndex], false);
    taskSelectors[task] = () => select(config.clips[defaultIndex], buttons[defaultIndex]);
  });

  const bindCases = (items, prefix) => {
    const group = document.querySelector(`#${prefix}-tabs`);
    const video = document.querySelector(`#${prefix}-video`);
    const buttons = [];
    const select = (item, button, replace = true) => {
      markChoice(buttons, button);
      ['title', 'description', 'detail'].forEach(field => {
        document.querySelector(`#${prefix}-${field}`).textContent = item[field];
      });
      if (prefix === 'tactile') {
        document.querySelector('#tactile-mechanism').textContent = item.mechanism;
        document.querySelector('#tactile-speed').textContent = mediaData.media[item.media].speed;
        const link = document.querySelector('#tactile-demo-link');
        link.href = `#demo-${item.task}`;
        link.textContent = item.id === 'sponge-trigger' ? 'Explore TARO obstacle demos ↗' : 'See TARO on this task ↗';
        link.onclick = () => taskSelectors[item.task]();
      }
      const label = `${mediaData.tasks[item.task || item.id].name}, ${prefix === 'tactile' ? 'without tactile input' : 'without motion history'}, failed trial`;
      if (replace) changeClip(video, item.media, label);
      else video.setAttribute('aria-label', label);
    };
    items.forEach(item => {
      let button;
      button = buttonFor(item.label, group, () => select(item, button));
      buttons.push(button);
    });
    select(items[0], buttons[0], false);
  };
  bindCases(mediaData.cases, 'tactile');
  bindCases(mediaData.history, 'history');
  document.querySelectorAll('a[href="#task-settings"]').forEach(link => link.addEventListener('click', () => {
    document.querySelector('#task-settings').open = true;
  }));

  const hero = document.querySelector('#hero-video');
  const heroButton = document.querySelector('#hero-play');
  const syncHeroButton = () => {
    heroButton.setAttribute('aria-label', hero.paused ? 'Play preview' : 'Pause preview');
    heroButton.firstElementChild.textContent = hero.paused ? '▶' : 'Ⅱ';
  };
  heroButton.addEventListener('click', () => {
    if (hero.paused) hero.play().catch(syncHeroButton); else hero.pause();
  });
  hero.addEventListener('play', syncHeroButton);
  hero.addEventListener('pause', syncHeroButton);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches) { hero.autoplay = false; hero.pause(); }
  const heroObserver = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) hero.pause();
  }, { threshold: 0.05 });
  heroObserver.observe(hero);
  syncHeroButton();

  // Keep only one trial playing at a time. All inline media remains user-controllable.
  const videos = [...document.querySelectorAll('video')];
  videos.forEach(video => video.addEventListener('play', () => {
    videos.forEach(other => { if (other !== video) other.pause(); });
  }));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) videos.forEach(video => video.pause());
  });

  const trial = document.querySelector('#recovery-video');
  const stageLabel = document.querySelector('#recovery-stage-label');
  const steps = [...document.querySelectorAll('.story-step')];
  const setStage = (step) => {
    steps.forEach(other => {
      other.classList.toggle('is-selected', other === step);
      other.setAttribute('aria-pressed', String(other === step));
    });
    stageLabel.textContent = step ? `Chapter ${steps.indexOf(step) + 1} · ${step.querySelector('.plan-chip').textContent.trim()}` : 'Edited trial · Select a stage to explore';
  };
  let requestedChapter = 0;
  const playTrialFrom = async (seconds, step) => {
    const request = ++requestedChapter;
    trial.pause();
    if (trial.readyState < 1) {
      try {
        await new Promise((resolve, reject) => {
          const loaded = () => { cleanup(); resolve(); };
          const failed = () => { cleanup(); reject(new Error('Video metadata unavailable')); };
          const cleanup = () => {
            trial.removeEventListener('loadedmetadata', loaded);
            trial.removeEventListener('error', failed);
          };
          trial.addEventListener('loadedmetadata', loaded, { once: true });
          trial.addEventListener('error', failed, { once: true });
          if (trial.networkState === HTMLMediaElement.NETWORK_EMPTY) trial.load();
        });
      } catch { stageLabel.textContent = 'Video unavailable · Please reload and try again'; return; }
    }
    if (request !== requestedChapter) return;
    trial.currentTime = seconds;
    setStage(step);
    trial.play().catch(() => {});
  };
  steps.forEach((step, index) => {
    step.dataset.time = mediaData.chapters[index];
    step.setAttribute('aria-pressed', 'false');
    step.addEventListener('click', () => {
      playTrialFrom(Number(step.dataset.time), step);
    });
  });
  document.querySelector('#restart-trial').addEventListener('click', () => {
    playTrialFrom(0, null);
  });

  const dialog = document.querySelector('#figure-dialog');
  const dialogImage = document.querySelector('#dialog-image');
  let figureTrigger = null;
  document.querySelectorAll('[data-figure]').forEach(button => button.addEventListener('click', () => {
    figureTrigger = button;
    dialogImage.src = button.dataset.figure;
    dialogImage.alt = button.querySelector('img').alt;
    document.querySelector('#figure-dialog-title').textContent = button.dataset.title;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  }));
  document.querySelector('#close-figure').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  }});
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    if (figureTrigger) figureTrigger.focus();
  });

  const links = [...nav.querySelectorAll('a[href^="#"]')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        links.forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    links.forEach(link => { const section = document.querySelector(link.hash); if (section) observer.observe(section); });
  }
})();
